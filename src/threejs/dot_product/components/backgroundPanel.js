import * as THREE from 'three';

export function createGroundPanel(camera, sunObj) {
  // Note for future:
  /*
  The most important thing here is finding the "projection distance".
  planePoint is just ANY point on the plane. Can be the center point of the obj, it's fine.
  distanceToPlane can be calcualted using dot product of the (sunPosition - planePoint) and planeNormal.
  Becuase the planeNormal is a unit vector, so the (sunPosition - planePoint)'s projection length on the planeNormal is the distance to the plane.
  (If confused, check this threejs demo haha)
  Now we have the distanceToPlane. We can calculate the projectionPoint by subtracting the distanceToPlane * planeNormal from sunPosition.
  Becuase the direction of the projection will be the same as the planeNormal, so the projectionPoint will be on the plane.
  */
  const customShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      sunPosition: { value: new THREE.Vector3(0, 0, 0) },
      litColor: { value: new THREE.Color(0.4, 0.4, 0.25) },
      unlitColor: { value: new THREE.Color(0.1, 0.1, 0.25) },
      fadeDistance: { value: 22.0 },
      planeNormal: { value: new THREE.Vector3(0, 0, 1) },
      planePoint: { value: new THREE.Vector3(0, 0, 0) },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      void main() {
        vUv = uv;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 sunPosition;
      uniform vec3 litColor;
      uniform vec3 unlitColor;
      uniform float fadeDistance;
      uniform vec3 planeNormal;
      uniform vec3 planePoint;

      varying vec2 vUv;
      varying vec3 vWorldPosition;

      void main() {
        vec3 sunToPlane = sunPosition - planePoint;
        float distanceToPlane = dot(sunToPlane, planeNormal);
        vec3 projectionPoint = sunPosition - distanceToPlane * planeNormal;

        float distance = length(vWorldPosition - projectionPoint);

        float t = clamp(distance / fadeDistance, 0.0, 1.0); // Normalized fade value
        vec3 color = mix(litColor, unlitColor, t);

        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });

  const groundGeometry = new THREE.PlaneGeometry(1, 1);
  const backgroundPanel = new THREE.Mesh(groundGeometry, customShaderMaterial);

  backgroundPanel.position.set(camera.position.x, camera.position.y, -10);
  backgroundPanel.scale.set(100, 100, 100);
  backgroundPanel.receiveShadow = false;

  backgroundPanel.update = function () {
    const backgroundPanelLocalPositionToSun = new THREE.Vector3(0, 0, -20);
    const backgroundPanelWorldPositionToSun = camera.localToWorld(backgroundPanelLocalPositionToSun);
    backgroundPanel.position.set(backgroundPanelWorldPositionToSun.x, backgroundPanelWorldPositionToSun.y, backgroundPanelWorldPositionToSun.z);

    const cameraUpDirectionLocal = new THREE.Vector3(0, 1, 0);
    const cameraUpDirectionWorld = camera.localToWorld(cameraUpDirectionLocal);
    backgroundPanel.lookAt(cameraUpDirectionWorld);



    const planeNormal = new THREE.Vector3();
    backgroundPanel.getWorldDirection(planeNormal);
    customShaderMaterial.uniforms.planeNormal.value.copy(planeNormal);

    // as said, just pick a point that's for sure on the plane.
    const planePoint = backgroundPanel.position.clone();
    customShaderMaterial.uniforms.planePoint.value.copy(planePoint);

    customShaderMaterial.uniforms.sunPosition.value.copy(sunObj.position);
  };

  return backgroundPanel;
}