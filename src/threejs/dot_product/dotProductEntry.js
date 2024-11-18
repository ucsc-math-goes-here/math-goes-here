import * as THREE from 'three';
import { setupMouseDrag } from './utils/mouseDrag.js';
import { createMovableObjectSun } from './components/movableObjectSun.js';
import { createNormalArrows } from './components/normalArrows.js';

/*
TODOs:
1: Add a global z value for standard object depth.
2: Add a shader that will show the dot product of the two vectors.
3: Make the sun movement a rotation instead of a translation.
4: Skybox. Something suitable. Maybe a solar system.
5: Add texts.

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
export function createGameScene(container) {
  console.log('Creating game scene... in threejs');
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x333333);

  const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 0.5, 5);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // ADDIING ALL LIGHTS
  // =======================================================================================================
  const ambientLight = new THREE.AmbientLight(0x777777, 1);
  scene.add(ambientLight);
  // =======================================================================================================

  // ADDING OBJECTS
  // =======================================================================================================
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0xff3333 });
  const ground = new THREE.Mesh(geometry, material);
  ground.position.set(0, -2, -5);
  ground.scale.set(4, 0.2, 4);
  scene.add(ground);

  const movableSun = createMovableObjectSun(ground);
  scene.add(movableSun.sun);
  scene.add(movableSun.directionalLight);



  let normalArrows = null;
  createNormalArrows(scene, {
    scale: 0.001,
    position: { x: 0, y: -1.8, z: -5 },
  }, movableSun.sun).then((results) => {
    normalArrows = results;
  }).catch((error) => {
    console.error('Error loading normal arrows:', error);
  });
  // =======================================================================================================

  setupMouseDrag(document, (dragDistance) => {
    movableSun.sun.rotateAroundCenter(dragDistance);
  });

  function animate() {
    requestAnimationFrame(animate);
    if (normalArrows) {
      // this might not be ready immediately
      normalArrows.lightSourcePointer.update();
    }
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
  });

  return { scene, camera, renderer };
}