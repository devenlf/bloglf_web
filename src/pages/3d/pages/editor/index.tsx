import * as THREE from 'three';
import { useEffect, useRef, useCallback } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import "./index.css";
import { createOrbitControl,createAxesHelper, createGridHelper} from '../../utils/tool'
import { Radio } from 'antd';
import RoadEdit from './component/roadEdit';

const Editor = () => {
    const renderRef = useRef<HTMLDivElement>(null); 
    const renderer = useRef<THREE.WebGLRenderer>();
    const scene = useRef<THREE.Scene>();
    const camera = useRef<THREE.PerspectiveCamera>();
    const controls = useRef<OrbitControls>()


     // 渲染器
  const animate = useCallback(() => {
    requestAnimationFrame(animate);
    controls.current?.update();
    if(renderer.current && scene.current && camera.current){
        renderer.current.render(scene.current,camera.current);
    }
  }
,[])

  // 创建场景
  const createScene = () => {
    const color = new THREE.Color("rgb(255, 255, 255)");
    // 相机角度
    scene.current = new THREE.Scene();
    scene.current.background = color;
    camera.current = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );
    camera.current.position.set(200,200,200)
    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize( window.innerWidth, window.innerHeight);
    if(renderRef.current){
        renderRef.current.appendChild(renderer.current.domElement)
    }
    // 添加控制器
   controls.current = createOrbitControl({camera:camera.current,renderer:renderer.current})
    // 添加辅助线
    createAxesHelper({len:200,scene:scene.current})
    // 添加网格
    createGridHelper({len:200,scene:scene.current})
  } 

  useEffect(()=>{
    if(renderRef.current){
        createScene()
        animate()
    }
  },[animate])

    return(
      <div className="root">
        <div className="top">
        <Radio.Group defaultValue="edit" size="large" buttonStyle="solid">
            <Radio.Button value="show">预览</Radio.Button>
            <Radio.Button value="edit">编辑</Radio.Button>
        </Radio.Group>
        </div>
        <div className="left">
            <RoadEdit />
        </div>
        <div className="right"></div>
        <div className="render-box" ref={renderRef}></div>
      </div>
    )
   
};

export default Editor;
