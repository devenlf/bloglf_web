/* eslint-disable react-hooks/exhaustive-deps */
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {LoadGLTF, LoadTexture} from '../../utils/loader'
import "./index.css";
import { createOrbitControl,createAxesHelper} from '../../utils/tool'

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
  }

  // 创建光线
  const createLight = () =>{
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 10 );
    const light = new THREE.AmbientLight( 0x404040,10 ); // 柔和的白光
    const lightPoint1 = new THREE.PointLight( 0x404040, 10 );
    lightPoint1.position.set( 100, 100, 100 );
    scene.current?.add( directionalLight );
    scene.current?.add( lightPoint1 );
    scene.current?.add( light );  
  }

  // 加载建筑
    const createBuild =  async() => {
     const city = await LoadGLTF({path:'3d/build/city/RoadTEST_Export_08151.glb'})
     const sceneCity = city?.scene;
     sceneCity?.position.set(-35,15,-335)
     sceneCity?.rotation.set(0,Math.PI/360 * 60,0)
     scene.current?.add(sceneCity)
     // 调整城市的位置
    }
  // 渲染器
  const animate =() => {
    requestAnimationFrame(animate);
    controls.current?.update();
    if(renderer.current && scene.current && camera.current){
        renderer.current.render(scene.current,camera.current);
    }
  }

  // 创建场景
  const createScene = () => {

    // 相机角度
    scene.current = new THREE.Scene();
    LoadTexture({path:'3d/back/buildBack.jpg'}).then((imgBack)=>{
      if(scene.current){
        scene.current.background = imgBack;
      }
    })
    camera.current = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );
    camera.current.position.set(200,200,200)
    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize( window.innerWidth, window.innerHeight);
    if(renderRef.current){
        renderRef.current.appendChild(renderer.current.domElement)
    }
    // 添加控制器
    createOrbitControl({camera:camera.current,renderer:renderer.current})
    // 添加辅助线
    createAxesHelper({len:1000,scene:scene.current})
  } 

  useEffect(()=>{
    if(renderRef.current){
        createScene()
        createLight()
        createBuild()
        animate()
        createGeometry()
    }
  },[renderRef])
  
  return <div className="road-box" ref={renderRef}></div>;
};

export default Road;
