/* eslint-disable react-hooks/exhaustive-deps */
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {LoadMTLL, LoadOBJ, LoadTexture} from '../loader'
import "./index.css";
import { createOrbitControl,createAxesHelper,createGridHelper} from '../tool'

const Road = () => {
  console.log(createOrbitControl,createAxesHelper,createGridHelper)
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
    const light = new THREE.AmbientLight( 0x404040,10 ); // 柔和的白光

    const lightPoint1 = new THREE.PointLight( 0x404040, 1000 );
    const lightPoint2 = new THREE.PointLight( 0x404040, 1000 );
    lightPoint1.position.set( 500, 500, 500 );
    lightPoint2.position.set( -500, -500, 500 );
    scene.current?.add( light );
    scene.current?.add( lightPoint1 );
    scene.current?.add( lightPoint2 );  
  }

  // 加载建筑
    const createBuild =  async() => {
     const mtl = await LoadMTLL({path:'3d/build/wild_town/wild_town.mtl'})	
     const obj = await LoadOBJ({path:'3d/build/wild_town/wild_town.obj', materials:mtl})
     scene.current?.add( obj );
    // new MTLLoader()
		// 			.setPath( '3d/' )
		// 			.load( 'male02.mtl', function ( materials ) {

		// 				materials.preload();

		// 				new OBJLoader()
		// 					.setMaterials( materials )
		// 					.setPath( '3d/' )
		// 					.load( 'male02.obj', function ( object ) {

		// 						object.position.y = - 0.95;
		// 						object.scale.setScalar( 0.01 );
		// 						scene.current?.add( object );

		// 					} );

		// 			} );
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
    createAxesHelper({len:100,scene:scene.current})
    // 添加网格
    createGridHelper({len:100,scene:scene.current})
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
