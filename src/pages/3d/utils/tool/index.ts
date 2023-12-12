import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { TransformControls } from 'three/addons/controls/TransformControls.js';

type HelperType = {
  len: number;
  scene: THREE.Scene;
};

export const createGridHelper = ({ len = 10, scene }: HelperType) => {
  const gridHelper = new THREE.GridHelper(len, len);
  scene?.add(gridHelper);
  return gridHelper;
};
export const createAxesHelper = ({ len = 10, scene }: HelperType) => {
  const axesHelper = new THREE.AxesHelper(len);
  scene?.add(axesHelper);
  return axesHelper;
};

// 创建万向拖拽辅助
export const createTransformControls = ({render,renderer,camera}) =>{
 const control = new TransformControls( camera, renderer.domElement );
				control.addEventListener( 'change', render );
				control.addEventListener( 'dragging-changed', function ( event ) {
          console.log(event)
				} );

        return control
}

  // 箭头
 export const createArrowHelper = ({scene}:HelperType) => {
    const dir = new THREE.Vector3( 1, 2, 0 );

    //normalize the direction vector (convert to vector of length 1)
    dir.normalize();

    const origin = new THREE.Vector3( 0, 0, 0 );
    const length = 1;
    const hex = 0xffff00;

    const arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );

    scene?.add( arrowHelper );

  }

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


