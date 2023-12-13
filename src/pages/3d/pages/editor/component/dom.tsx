/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();
type createGeometryType = {
  x: number;
  y: number;
  z: number;
  yaw: number;
  map: string;
};

type createRoad = {
  data: unknown[];
  scene: any;
};
// 创建一个模块
export const createGeometry = ({
  x,
  y,
  z,
  yaw,
  map,
}: createGeometryType) => {
  console.log(x, y, z,'x, y, z')
  const geometry = new THREE.BoxGeometry(x, y, z);
  const texture = textureLoader.load(map);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const cube = new THREE.Mesh(geometry, material);
  // 旋转立方体90度
  cube.rotateY((Math.PI / 360) * yaw);
  return cube;
};

// 生成路口
export const createRoad = ({ data, scene }: createRoad) => {
  data.forEach((item: any) => {
    const dom = createGeometry({
      x: item.size.x,
      y: item.size.y,
      z: item.size.z,
      map: item.map,
      yaw: item.yaw
    });
    scene.add(dom);
  });
};
