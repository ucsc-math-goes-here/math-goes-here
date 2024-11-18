import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import * as THREE from 'three';


// const groundNormalMaterial = new THREE.ShaderMaterial({
//   uniforms: {
//     pointerLength: { value: pointersLength },
//     dotProduct: { value: 1.0 },
//     objectPosition: { value: new THREE.Vector3(0, 0, 0) },
//   },
//   vertexShader: `
//     varying float vY;
//     void main() {
//       vY = position.y + modelViewMatrix[3].y;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
//   `,
//   fragmentShader: `
//     uniform float pointerLength;
//     uniform float dotProduct;
//     uniform vec3 objectPosition;
//     varying float vY;

//     void main() {
//       float threshold = dotProduct * pointerLength + objectPosition.y;
//       if (vY < threshold) {
//         gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
//       } else {
//         gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
//       }
//     }
//   `,
// });

export async function createNormalArrows(scene, options = {}, lightSource) {
  const pointersLength = 2;
  const loader = new FBXLoader();
  const { scale = 0.1, position = { x: 0, y: 0, z: -5 } } = options;

  const fbx = await new Promise((resolve, reject) => {
    loader.load('./models/lightPointer.fbx', resolve, undefined, reject);
  });

  fbx.scale.set(scale * 1.1, scale * 1.1, scale);
  fbx.position.set(position.x, position.y, position.z);
  const groundNormalMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  fbx.traverse((child) => {
    if (child.isMesh) {
      child.material = groundNormalMaterial;
    }
  });
  const pointerUpPosition1 = new THREE.Vector3(fbx.position.x, fbx.position.y + 1, fbx.position.z);
  fbx.lookAt(pointerUpPosition1);
  scene.add(fbx);

  const lightSourcePointer = await new Promise((resolve, reject) => {
    loader.load('./models/lightPointer.fbx', resolve, undefined, reject);
  });

  lightSourcePointer.scale.set(scale, scale, scale);
  lightSourcePointer.position.set(position.x, position.y, position.z);
  const lightSourceMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
  lightSourcePointer.traverse((child) => {
    if (child.isMesh) {
      child.material = lightSourceMaterial;
    }
  });
  scene.add(lightSourcePointer);


  const dotLengthPointer = await new Promise((resolve, reject) => {
    loader.load('./models/lightPointer.fbx', resolve, undefined, reject);
  });

  dotLengthPointer.scale.set(scale * 0.8, scale * 0.8, scale);
  dotLengthPointer.position.set(position.x, position.y, position.z + 0.6);
  const dotLengthPointerMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
  dotLengthPointer.traverse((child) => {
    if (child.isMesh) {
      child.material = dotLengthPointerMaterial;
    }
  });

  const pointerUpPosition2 = new THREE.Vector3(dotLengthPointer.position.x, dotLengthPointer.position.y + 1, dotLengthPointer.position.z);
  dotLengthPointer.lookAt(pointerUpPosition2);
  scene.add(dotLengthPointer);


  const fontLoader = new FontLoader();
  const font = await new Promise((resolve, reject) => {
    fontLoader.load('./fonts/helvetiker_regular.typeface.json', resolve, undefined, reject);
  });

  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const dotProductTextGeometry = new TextGeometry("Light dot Normal = 0", {
    font: font,
    size: 0.2,
    depth: 0.0001,
  });
  const dotProductText = new THREE.Mesh(dotProductTextGeometry, textMaterial);
  dotProductText.position.set(position.x + 1, position.y + 3, position.z + 5);
  scene.add(dotProductText);

  function updateDotProductText(dotProduct) {
    const text = `Light dot Normal = ${dotProduct.toFixed(2)}`;
    dotProductText.geometry.dispose();
    dotProductText.geometry = new TextGeometry(text, {
      font: font,
      size: 0.2,
      depth: 0.0001,
    });
  }

  const directionVector = new THREE.Vector3();
  lightSourcePointer.update = () => {
    directionVector.subVectors(lightSource.position, lightSourcePointer.position).normalize();
    lightSourcePointer.lookAt(lightSource.position);

    let dotProduct = directionVector.dot(new THREE.Vector3(0, 1, 0));
    dotProduct = Math.max(0, dotProduct);
    updateDotProductText(dotProduct);

    dotLengthPointer.scale.set(dotLengthPointer.scale.x, dotLengthPointer.scale.y, scale * dotProduct);

    // console.log('Dot product:', (fbx.position.y + dotProduct * pointersLength));
    // groundNormalMaterial.uniforms.pointerLength.value = pointersLength;
    // groundNormalMaterial.uniforms.dotProduct.value = dotProduct;
    // groundNormalMaterial.uniforms.objectPosition.value.copy(fbx.position);
  };
  lightSourcePointer.update();

  return { groundNormalPointer: fbx, lightSourcePointer };
}