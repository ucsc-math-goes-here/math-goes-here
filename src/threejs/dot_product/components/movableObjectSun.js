import * as THREE from 'three';

/**
 * Creates a movable object (sun) that can be moved circularly around the lightTarget, basing on drag distance.
 * This will also create the main directional lightsource in the scene!
 *
 * @param {THREE.Object3D} lightTarget - The target object that the light will always point towards.
 * @returns {Object} An object containing the sun mesh and directional light.
 */
export function createMovableObjectSun(lightTarget, radius = 5) {
    const geometry = new THREE.SphereGeometry(0.5, 16, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffff00 });
    const sun = new THREE.Mesh(geometry, material);

    let angle = 90;
    const center = lightTarget.position; // Center position
    sun.position.set(
      center.x + radius * Math.cos(THREE.MathUtils.degToRad(angle)),
      center.y + radius * Math.sin(THREE.MathUtils.degToRad(angle)),
      center.z
    );

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.copy(sun.position);
    directionalLight.target = lightTarget;
  
    sun.rotateAroundCenter = function (dragDistance) {
      angle += dragDistance * -0.3;
      angle = THREE.MathUtils.clamp(angle, 0, 180);
  
      sun.position.set(
        center.x + radius * Math.cos(THREE.MathUtils.degToRad(angle)),
        center.y + radius * Math.sin(THREE.MathUtils.degToRad(angle)),
        center.z
      );
  
      directionalLight.position.copy(sun.position);
      directionalLight.target.updateMatrixWorld();
    };
  
    return { sun, directionalLight };
  }