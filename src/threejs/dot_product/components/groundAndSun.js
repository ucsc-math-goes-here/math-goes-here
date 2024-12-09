import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';


export async function createGroundAndSun(radius = 5, camera, options = {}) {
  const toGroundDistance = 1;
  const { controls } = options;
  const loader = new FBXLoader();

  const groundColorAtMax = 0x0000ff;
  const groundColorAtMin = 0x000000;
  const groundEmission = 0x7777ff;
  const ground = await new Promise((resolve, reject) => {
    loader.load('./models/ground.fbx', resolve, undefined, reject);
  });
  const groundMaterial = new THREE.MeshStandardMaterial({ color: groundColorAtMin, emissive: groundEmission, emissiveIntensity: 0 });
  ground.traverse((child) => {
    if (child.isMesh) {
      child.material = groundMaterial;
    }
  });
  ground.position.set(0, -2, -5);
  ground.scale.set(0.02, 0.02, 0.02);

  const sun = await new Promise((resolve, reject) => {
    loader.load('./models/sun.fbx', resolve, undefined, reject);
  });
  const sunMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffff00 });
  sun.traverse((child) => {
    if (child.isMesh) {
      child.material = sunMaterial;
    }
  });

  let angle = 30;
  let orbit = 0;
  const basePosition = ground.position;

  sun.scale.set(0.01, 0.01, 0.01);
  sun.position.set(basePosition.x, basePosition.y, basePosition.z);
  sun.rotation.set(0, THREE.MathUtils.degToRad(orbit), THREE.MathUtils.degToRad(angle));
  sun.translateOnAxis(new THREE.Vector3(0, toGroundDistance, 0), radius);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
  directionalLight.position.copy(sun.position);
  directionalLight.target = ground;

  ground.updateMaterial = (dot) => {
    const color = new THREE.Color();
    // if (dot < 0) {
    //   dot = -Math.pow(-dot, 0.5);
    // }
    // color.lerpColors(new THREE.Color(groundColorAtMin), new THREE.Color(groundColorAtMax), (dot + 1) / 2);
    dot = Math.max(0, Math.min(1, dot));
    color.lerpColors(new THREE.Color(groundColorAtMin), new THREE.Color(groundColorAtMax), dot);
    groundMaterial.color = color;
    groundMaterial.emissiveIntensity = dot * 0.1;
  }

  controls.updateLightSourceRotation = function (new_angle) {
    new_angle = -new_angle;
    sun.position.set(radius, 0, 0);

    // sun.translateY(radius);
    angle = new_angle;
    sun.position.set(basePosition.x, basePosition.y, basePosition.z);
    sun.rotation.set(0, THREE.MathUtils.degToRad(orbit), THREE.MathUtils.degToRad(angle));
    sun.translateOnAxis(new THREE.Vector3(0, 1, 0), radius);
  };

  controls.updateLightSourceOrbit = function (new_orbit) {
    sun.position.set(radius, 0, 0);

    sun.translateY(radius);
    orbit = new_orbit;
    sun.position.set(basePosition.x, basePosition.y, basePosition.z);
    sun.rotation.set(0, THREE.MathUtils.degToRad(orbit), THREE.MathUtils.degToRad(angle));
    sun.translateOnAxis(new THREE.Vector3(0, toGroundDistance, 0), radius);
  };

  return { sun, ground, directionalLight };
}