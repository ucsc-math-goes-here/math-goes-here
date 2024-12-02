import * as THREE from 'three';
import { setupMouseDrag } from './utils/mouseDrag.js';
import { createGroundAndSun } from './components/groundAndSun.js';
import { createNormalArrows } from './components/normalArrows.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/*
TODOs:
1: Orbit Camera.
2: Orbit Rotation of light source
3: ground plane Roation and normal display.
4: beautify

Juicy stuff:
1: Add a post processing effect for light.
2: Make normal arrows prettier.
*/

/**
 * Initializes and renders a Three.js game scene within a specified container.
 *
 * @function createGameScene
 * @param {HTMLElement} container - The HTML element (div or body) where the game scene will be rendered.
 * 
 * @returns {Object} An object containing references to the `scene`, `camera`, and `renderer` for further interaction if needed.
 * 
 * @description
 * A dot product visualizer.
 */
export function createGameScene(container, options = {}) {
  const {
    planeEuler,
    planePosition,
    lightSourceAngle = 0,
    lightSourceOrbit = 0,
    planeColor = 0xff3333,
    lightPointerColor = 0x3333ff,
    dotProductPointerColor = 0xffff33,
    controls = {},
    onDotProductChange = (value) => { },
  } = options;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x333333);

  const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x3333ff });

  camera.position.set(0, 0, 8.5);
  const orbitControls = new OrbitControls(camera, renderer.domElement);

  // ADDIING ALL LIGHTS
  // =======================================================================================================
  const ambientLight = new THREE.AmbientLight(0x777777, 1);
  scene.add(ambientLight);

  let normalArrows = null;
  let groundAndSunGroup = null;
  let ground = null;

  createGroundAndSun(5, camera, { controls }).then((results) => {
    groundAndSunGroup = results;
    ground = groundAndSunGroup.ground;
    scene.add(ground);
    scene.add(groundAndSunGroup.sun);
    scene.add(groundAndSunGroup.directionalLight);

    orbitControls.target.set(ground.position.x, ground.position.y + 2, ground.position.z);
    orbitControls.update();
    createNormalArrows(scene, groundAndSunGroup.sun, ground, {
      scale: 0.001,
      onDotProductChange,
      controls,
    }).then((results) => {
      normalArrows = results;
    }).catch((error) => {
      console.error('Error loading normal arrows:', error);
    });
  }).catch((error) => {
    console.error('Error loading movable sun:', error);
  });
  // =======================================================================================================

  function updateCameraPosition(time) {
    orbitControls.update();
  }
  controls.updateGroundRotation = (xRotation, zRotation) => {
    ground?.rotation.set(xRotation, 0, zRotation);
  };

  // setupMouseDrag(document, (dragDistance) => {
  //   movableSun.sun.rotateAroundCenter(dragDistance);
  // });

  function animate(time) {
    requestAnimationFrame(animate);
    if (normalArrows) {
      // this might not be ready immediately
      normalArrows.lightSourcePointer.update();
    }
    updateCameraPosition(time);
    if (groundAndSunGroup) {
      groundAndSunGroup.sun.lookAt(camera.position);
    }
    renderer.render(scene, camera);
  }
  animate(0);

  window.addEventListener('resize', () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
  });

  return { scene, camera, renderer };
}