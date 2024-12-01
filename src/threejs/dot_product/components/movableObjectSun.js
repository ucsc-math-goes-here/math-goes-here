import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

/**
 * Creates a movable object (sun) that can be moved circularly around the lightTarget, basing on drag distance.
 * This will also create the main directional lightsource in the scene!
 *
 * @param {THREE.Object3D} lightTarget - The target object that the light will always point towards.
 * @returns {Object} An object containing the sun mesh and directional light.
 */
export async function createMovableObjectSun(lightTarget, radius = 5, camera, options = {}) {
  const toGroundDistance = 1;
  const { controls } = options;
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffff00 });
  const loader = new FBXLoader();
  const sun = await new Promise((resolve, reject) => {
    loader.load('./models/sun.fbx', resolve, undefined, reject);
  });
  sun.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  let angle = 0;
  let orbit = 0;
  const basePosition = lightTarget.position;

  sun.scale.set(0.01, 0.01, 0.01);
  sun.position.set(basePosition.x, basePosition.y, basePosition.z);
  sun.rotation.set(0, THREE.MathUtils.degToRad(orbit), THREE.MathUtils.degToRad(angle));
  sun.translateOnAxis(new THREE.Vector3(0, toGroundDistance, 0), radius);


  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
  directionalLight.position.copy(sun.position);
  directionalLight.target = lightTarget;

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

  return { sun, directionalLight };
}