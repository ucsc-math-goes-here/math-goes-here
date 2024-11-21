import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import * as THREE from 'three';


export async function createNormalArrows(scene, options = {}, lightSource) {
  const pointersLength = 2;
  const loader = new FBXLoader();
  const { scale = 0.1, position = { x: 0, y: 0, z: -5 }, onDotProductChange, controls } = options;

  const planeNormalPointer = await new Promise((resolve, reject) => {
    loader.load('./models/lightPointer.fbx', resolve, undefined, reject);
  });

  planeNormalPointer.scale.set(scale, scale, scale);
  planeNormalPointer.position.set(position.x, position.y, position.z);
  const groundNormalMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, depthTest: false });
  planeNormalPointer.traverse((child) => {
    if (child.isMesh) {
      child.material = groundNormalMaterial;
    }
  });
  const pointerUpPosition1 = new THREE.Vector3(planeNormalPointer.position.x, planeNormalPointer.position.y + 1, planeNormalPointer.position.z);
  planeNormalPointer.lookAt(pointerUpPosition1);
  planeNormalPointer.renderOrder = 1;
  scene.add(planeNormalPointer);

  const lightSourcePointer = await new Promise((resolve, reject) => {
    loader.load('./models/lightPointer.fbx', resolve, undefined, reject);
  });

  lightSourcePointer.scale.set(scale, scale, scale);
  lightSourcePointer.position.set(position.x, position.y, position.z);
  const lightSourceMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, depthTest: false });
  lightSourcePointer.traverse((child) => {
    if (child.isMesh) {
      child.material = lightSourceMaterial;
    }
  });
  lightSourcePointer.renderOrder = 2;
  scene.add(lightSourcePointer);


  const dotLengthPointer = await new Promise((resolve, reject) => {
    loader.load('./models/lightPointer.fbx', resolve, undefined, reject);
  });

  dotLengthPointer.scale.set(scale, scale, scale);
  dotLengthPointer.position.set(position.x, position.y, position.z);
  const dotLengthPointerMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, depthTest: false });
  dotLengthPointer.traverse((child) => {
    if (child.isMesh) {
      child.material = dotLengthPointerMaterial;
    }
  });

  const pointerUpPosition2 = new THREE.Vector3(dotLengthPointer.position.x, dotLengthPointer.position.y + 1, dotLengthPointer.position.z);
  dotLengthPointer.lookAt(pointerUpPosition2);
  dotLengthPointer.renderOrder = 3;
  scene.add(dotLengthPointer);


  const fontLoader = new FontLoader();
  const font = await new Promise((resolve, reject) => {
    fontLoader.load('./fonts/helvetiker_regular.typeface.json', resolve, undefined, reject);
  });

  const directionVector = new THREE.Vector3();
  lightSourcePointer.update = () => {
    directionVector.subVectors(lightSource.position, lightSourcePointer.position).normalize();
    lightSourcePointer.lookAt(lightSource.position);

    let dotProduct = directionVector.dot(new THREE.Vector3(0, 1, 0));
    dotProduct = Math.max(0, dotProduct);
    onDotProductChange(dotProduct);

    dotLengthPointer.scale.set(dotLengthPointer.scale.x, dotLengthPointer.scale.y, scale * dotProduct);
  };
  lightSourcePointer.update();

  controls.updateShowPlaneNormal = (show) => {
    if (show) {
      planeNormalPointer.visible = show;
    } else {
      planeNormalPointer.visible = false;
    }
  }
  controls.updateShowLightPointer = (show) => {
    if (show) {
      lightSourcePointer.visible = show;
    } else {
      lightSourcePointer.visible = false;
    }
  }
  controls.updateShowDotLengthPointer = (show) => {
    if (show) {
      dotLengthPointer.visible = show;
    } else {
      dotLengthPointer.visible = false;
    }

  }

  return { groundNormalPointer: planeNormalPointer, lightSourcePointer };
}