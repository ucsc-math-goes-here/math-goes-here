import * as THREE from 'three';

/**
 * This is just a prototype. I decided to not use it in the final project.
 */
export function createSlider(scene, camera, options = {}) {
  const { width = 2, height = 0.1, initialValue = 0.5, bgColor = 0xaaaaaa, handleColor = 0x0077ff } = options;

  const sliderGroup = new THREE.Group();

  const sliderBgGeometry = new THREE.PlaneGeometry(width, height);
  const sliderBgMaterial = new THREE.MeshBasicMaterial({ color: bgColor });
  const sliderBackground = new THREE.Mesh(sliderBgGeometry, sliderBgMaterial);
  sliderBackground.position.set(0, -1.5, -3);
  sliderGroup.add(sliderBackground);

  const handleWidth = height * 1.5;
  const handleGeometry = new THREE.PlaneGeometry(handleWidth, height * 1.5);
  const handleMaterial = new THREE.MeshBasicMaterial({ color: handleColor });
  const sliderHandle = new THREE.Mesh(handleGeometry, handleMaterial);
  sliderHandle.position.set((initialValue - 0.5) * width, -1.5, 0.01);
  sliderGroup.add(sliderHandle);

  scene.add(sliderGroup);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let dragging = false;
  let sliderValue = initialValue;

  function onDocumentMouseMove(event) {
    if (!dragging) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(sliderBackground);

    if (intersects.length > 0) {
      const intersect = intersects[0];
      const handlePosition = Math.min(Math.max(intersect.point.x, -width / 2), width / 2);
      sliderHandle.position.x = handlePosition;
      sliderValue = (handlePosition + width / 2) / width;
      console.log('Slider Value:', sliderValue.toFixed(2));
    }
  }

  function onDocumentMouseDown(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(sliderHandle);

    if (intersects.length > 0) {
      dragging = true;
    }
  }

  function onDocumentMouseUp() {
    dragging = false;
  }

  window.addEventListener('mousemove', onDocumentMouseMove, false);
  window.addEventListener('mousedown', onDocumentMouseDown, false);
  window.addEventListener('mouseup', onDocumentMouseUp, false);

  return {
    group: sliderGroup,
    getValue: () => sliderValue,
  };
}