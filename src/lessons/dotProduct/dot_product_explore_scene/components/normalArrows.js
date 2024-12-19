import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import * as THREE from 'three';


export async function createNormalArrows(scene, lightSource, ground, options = {},) {
  const groundNormalColor = 0x0000ff;
  const lightSourcePointerColor = 0xffff00;
  const positiveDotLengthPointerColor = 0x00ff00;
  const negativeDotLengthPointerColor = 0xff0000;

  const pointersLength = 2;
  const loader = new FBXLoader();
  const { scale = 0.1, onDotProductChange, controls } = options;
  let position = new THREE.Vector3(ground.position.x, ground.position.y - 0.05, ground.position.z);
  const planeNormalPointer = await new Promise((resolve, reject) => {
    loader.load('./models/lightPointer.fbx', resolve, undefined, reject);
  });

  planeNormalPointer.scale.set(scale, scale, scale);
  planeNormalPointer.position.set(position.x, position.y, position.z);
  const groundNormalMaterial = new THREE.MeshBasicMaterial({ color: groundNormalColor });
  planeNormalPointer.traverse((child) => {
    if (child.isMesh) {
      child.material = groundNormalMaterial;
    }
  });

  const upDirection = new THREE.Vector3(0, 1, 0);
  const worldUpDirection = ground.localToWorld(upDirection.clone()).sub(ground.position).normalize();
  const groundUpwardLookPosition = position.clone().add(worldUpDirection);

  planeNormalPointer.lookAt(groundUpwardLookPosition);

  planeNormalPointer.renderOrder = 1;
  scene.add(planeNormalPointer);

  const lightSourcePointer = await new Promise((resolve, reject) => {
    loader.load('./models/lightPointer.fbx', resolve, undefined, reject);
  });

  lightSourcePointer.scale.set(scale, scale, scale);
  lightSourcePointer.position.set(position.x, position.y, position.z);
  const lightSourceMaterial = new THREE.MeshBasicMaterial({ color: lightSourcePointerColor });
  lightSourcePointer.traverse((child) => {
    if (child.isMesh) {
      child.material = lightSourceMaterial;
    }
  });
  lightSourcePointer.renderOrder = 2;
  scene.add(lightSourcePointer);


  const dotLengthPointer = await new Promise((resolve, reject) => {
    loader.load('./models/dotIndicator.fbx', resolve, undefined, reject);
  });

  dotLengthPointer.scale.set(scale, scale, scale);
  dotLengthPointer.position.set(position.x, position.y, position.z);
  const dotLengthPointerMaterial = new THREE.MeshBasicMaterial({ color: positiveDotLengthPointerColor, depthTest: false });
  dotLengthPointer.traverse((child) => {
    if (child.isMesh) {
      child.material = dotLengthPointerMaterial;
    }
  });

  dotLengthPointer.lookAt(groundUpwardLookPosition);
  dotLengthPointer.renderOrder = 3;
  scene.add(dotLengthPointer);

  const dashGeometry = new THREE.BufferGeometry();
  const dashMaterial = new THREE.LineDashedMaterial({
    color: 0xffffff,
    dashSize: 0.1,
    gapSize: 0.1,
    linewidth: 1,
    // depthTest: false,
  });
  dashMaterial.renderOrder = 4;
  const dashLine = new THREE.Line(dashGeometry, dashMaterial);
  scene.add(dashLine);

  const lightDirectionVector = new THREE.Vector3();
  lightSourcePointer.update = () => {
    lightDirectionVector.subVectors(lightSource.position, lightSourcePointer.position).normalize();
    lightSourcePointer.lookAt(lightSource.position);

    const groundWorldUpWorldPosition = ground.localToWorld(new THREE.Vector3(0, 1, 0));
    const groundUpDir = groundWorldUpWorldPosition.sub(ground.position).normalize();
    const groundUpwardLookPosition = position.clone().add(groundUpDir);
    planeNormalPointer.lookAt(groundUpwardLookPosition);
    dotLengthPointer.lookAt(groundUpwardLookPosition);

    let dotProduct = lightDirectionVector.dot(groundUpDir);
    if (dotProduct < 0) {
      dotLengthPointerMaterial.color.setHex(negativeDotLengthPointerColor);
    } else {
      dotLengthPointerMaterial.color.setHex(positiveDotLengthPointerColor);
    }

    const dotTop = dotLengthPointer.position.clone().add(groundUpDir.clone().multiplyScalar(dotProduct).multiplyScalar(pointersLength));
    const lightPointerTop = lightSourcePointer.position.clone().add(lightDirectionVector.clone().multiplyScalar(pointersLength));
    dashGeometry.setFromPoints([lightPointerTop, dotTop]);
    dashLine.computeLineDistances();

    onDotProductChange(dotProduct);
    ground.updateMaterial(dotProduct);

    dotLengthPointer.scale.set(dotLengthPointer.scale.x, dotLengthPointer.scale.y, scale * dotProduct);
  };
  lightSourcePointer.update();

  const checkIfDashlineCanBeSeen = () => {
    dashLine.visible = lightSourcePointer.visible && planeNormalPointer.visible && dotLengthPointer.visible && dashlineShouldBeVisible;
  }

  let dashlineShouldBeVisible = true;
  controls.updateShowPlaneNormal = (show) => {
    planeNormalPointer.visible = show;
    checkIfDashlineCanBeSeen();
  }
  controls.updateShowLightPointer = (show) => {
    lightSourcePointer.visible = show;
    checkIfDashlineCanBeSeen();
  }
  controls.updateShowDotLengthPointer = (show) => {
    dotLengthPointer.visible = show;
    checkIfDashlineCanBeSeen();
  }
  controls.updateShowDotProductline = (show) => {
    dashlineShouldBeVisible = show;
    checkIfDashlineCanBeSeen();
  }

  return { groundNormalPointer: planeNormalPointer, lightSourcePointer };
}