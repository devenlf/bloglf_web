import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/Addons.js";

type HelperType = {
  len: number;
  scene: THREE.Scene;
};

export const createGridHelper = ({ len = 10, scene }: HelperType) => {
  const gridHelper = new THREE.GridHelper(len, len);
  scene?.add(gridHelper);
  return gridHelper;
};
export const createAxesHelper = ({ len = 5, scene }: HelperType) => {
  const axesHelper = new THREE.AxesHelper(len);
  scene?.add(axesHelper);
  return axesHelper;
};

// 创建控制器
export const createOrbitControl = ({
  camera,
  renderer,
}: {
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
}) => {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls?.update();
  return controls;
};


