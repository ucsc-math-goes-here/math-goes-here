import * as THREE from 'three';
import { setupMouseDrag } from './utils/mouseDrag.js';
import { createGroundAndSun } from './components/groundAndSun.js';
import { createNormalArrows } from './components/normalArrows.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createGroundPanel } from './components/backgroundPanel.js';

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
    controls = {},
    onDotProductChange = (value) => { },
  } = options;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x333333);

  const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  camera.position.set(0, 0, 8.5);
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableZoom = false;

  const ambientLight = new THREE.AmbientLight(0x777777, 1);
  scene.add(ambientLight);

  let normalArrows = null;
  let groundAndSunGroup = null;
  let ground = null;
  let backgroundPanel = null;
  createGroundAndSun(3.5, camera, { controls }).then((results) => {
    groundAndSunGroup = results;
    ground = groundAndSunGroup.ground;
    scene.add(ground);
    scene.add(groundAndSunGroup.sun);
    scene.add(groundAndSunGroup.directionalLight);
    
    backgroundPanel = createGroundPanel(camera, groundAndSunGroup.sun);
    scene.add(backgroundPanel);
    orbitControls.target.set(ground.position.x, ground.position.y + 1.2, ground.position.z);
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

  function updateCameraPosition(time) {
    orbitControls.update();
  }
  controls.updateGroundRotation = (xRotation, zRotation) => {
    ground?.rotation.set(xRotation, 0, zRotation);
  };

  function animate(time) {
    requestAnimationFrame(animate);
    if (normalArrows) {
      normalArrows.lightSourcePointer.update();
    }
    updateCameraPosition(time);
    backgroundPanel?.update();
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