import * as THREE from 'three';
import { setupMouseDrag } from './utils/mouseDrag.js';
import { createMovableObjectSun } from './components/movableObjectSun.js';
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
  const material = new THREE.MeshStandardMaterial({ color: 0xff3333 });
  const ground = new THREE.Mesh(geometry, material);
  ground.position.set(0, -2, -5);
  ground.scale.set(4, 0.2, 4);
  scene.add(ground);

  const orbitControls = new OrbitControls( camera, renderer.domElement );
  camera.position.set(0, 0, 8.5);
  orbitControls.target.set(ground.position.x, ground.position.y + 2, ground.position.z);
  orbitControls.update();

  function updateCameraPosition(time) {
    orbitControls.update();
  }
  controls.updateGroundRotation = (xRotation, zRotation) => {
    ground.rotation.set(xRotation, 0, zRotation);
  };

  // ADDIING ALL LIGHTS
  // =======================================================================================================
  const ambientLight = new THREE.AmbientLight(0x777777, 1);
  scene.add(ambientLight);
  // =======================================================================================================

  const movableSun = createMovableObjectSun(ground, 5, { controls });
  scene.add(movableSun.sun);
  scene.add(movableSun.directionalLight);



  let normalArrows = null;
  createNormalArrows(scene, movableSun.sun, ground, {
    scale: 0.001,
    onDotProductChange,
    controls,
  }).then((results) => {
    normalArrows = results;
  }).catch((error) => {
    console.error('Error loading normal arrows:', error);
  });
  // =======================================================================================================

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