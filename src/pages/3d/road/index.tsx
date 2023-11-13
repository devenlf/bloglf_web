/* eslint-disable react-hooks/exhaustive-deps */
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {LoadGLTF} from '../loader'
import "./index.css";

const Road = () => {
  const renderRef = useRef<HTMLDivElement>(null); 
  const renderer = useRef<THREE.WebGLRenderer>();
  const scene = useRef<THREE.Scene>();
  const camera = useRef<THREE.PerspectiveCamera>();
  const controls = useRef<OrbitControls>()

  // 创建物体
  const createGeometry = () => {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.current?.add( cube );
    if(camera.current){
        camera.current.position.z = 5;
    }
   
  }

  // 加载建筑
  const createBuild =  async() => {
    const obj = await LoadGLTF({path:'/3d/uploads_files_2720101_BusGameMap.glb'})
    console.log(obj,'obj')
  }

  // 创建控制器
  const createOrbitControls = () => {
    if(camera.current && renderer.current){
        controls.current = new OrbitControls( camera.current, renderer.current.domElement );
    }
    controls.current?.update();
  }

  // 渲染器
  const animate =() => {
    requestAnimationFrame(animate);
    controls.current?.update();
    if(renderer.current && scene.current && camera.current){
        renderer.current.render(scene.current,camera.current );
    }
  }

  // 创建场景
  const createScene = () => {
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize( window.innerWidth, window.innerHeight);
    if(renderRef.current){
        renderRef.current.appendChild(renderer.current.domElement)
    }
  } 
  useEffect(()=>{
    if(renderRef.current){
        createScene()
        createGeometry()
        createBuild()
        animate()
        createOrbitControls()
        // 初始化场景
    }
  },[renderRef])
  
  return <div className="road-box" ref={renderRef}></div>;
};

export default Road;
