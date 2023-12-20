/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();
type createGeometryType = {
  size:{  
    x: number;
    y: number;
    z: number;
  };
  position:{  
    x: number;
    y: number;
    z: number;
  };
  yaw: number;
  map: string;
  id: string;
};

type createRoad = {
  data: unknown[];
  scene: any;
};
// 创建一个模块
export const createGeometry = ({
  position,
  size,
  yaw,
  map,
  id,
}: createGeometryType) => {
  const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
  const texture = textureLoader.load(map);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const cube:any = new THREE.Mesh(geometry, material);
  cube.position.set(position.x,position.y,position.z)
  // 旋转立方体90度
  cube.rotateY((Math.PI / 360) * yaw);
  cube.cubeId = id;
  return cube;
};

// 生成路口
export const createRoad = ({ data, scene }: createRoad) => {
  const dataArr:any[] = []
  data.forEach((item: any) => {
    const dom = createGeometry({
      position: item.position,
      size: item.size,
      map: item.map,
      yaw: item.yaw,
      id: item.id
    });
    dataArr.push(dom)
    scene.add(dom);
  });
  return dataArr
};
