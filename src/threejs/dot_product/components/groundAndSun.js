import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';


export async function createGroundAndSun(radius = 5, camera, options = {}) {
  const toGroundDistance = 1;
  const { controls } = options;
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffff00 });
  const loader = new FBXLoader();


  const ground = await new Promise((resolve, reject) => {
    loader.load('./models/ground.fbx', resolve, undefined, reject);
  });

  ground.position.set(0, -2, -5);
  ground.scale.set(0.02, 0.02, 0.02);

  const sun = await new Promise((resolve, reject) => {
    loader.load('./models/sun.fbx', resolve, undefined, reject);
  });

  sun.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
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