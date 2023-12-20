/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three';
import { useEffect, useRef, useCallback, useState } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import "./index.css";
import { createOrbitControl,createAxesHelper, createGridHelper} from '../../utils/tool'
import { Radio } from 'antd';
import RoadEdit from './component/roadEdit';
import { createRoad } from './component/dom';
import { listImgPublic} from './component/roadEdit/config.ts'
import { mapData } from './data/mock';
import _ from 'lodash';

const Editor = () => {
    const renderRef = useRef<HTMLDivElement>(null); 
    const renderer = useRef<THREE.WebGLRenderer>();
    const scene = useRef<THREE.Scene>();
    const camera = useRef<THREE.PerspectiveCamera>();
    const controls = useRef<OrbitControls>();
    const [mapDataVal, setMapDataVal] = useState<any[]>(mapData)
    const saveMapDataVal = useRef<any[]>([])
    // 激活模块
    const [activeRoad,setActiveRoad] = useState(null)
    // 所有路口实例
    const [roadModules,setRoadModules] = useState([])

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

  // 生成地形
  const createBuild = (data:any[]) => {
    const doms:any = createRoad({data, scene:scene.current})
    setRoadModules(doms)
  }

  const onFinish = (val: any) => {
    const uniqueId = _.uniqueId()
    const newData = {
      id: uniqueId,
      size: val.size,
      position:{
          x:0,
          y:0,
          z:10
      },
      yaw: 0,
      map:listImgPublic[val.material],
      type: 1
      };
      const newDataArr = [...mapDataVal,newData]
      setMapDataVal(newDataArr)
  }

  // 激活模块
  useEffect(()=>{

  },[activeRoad, roadModules])

  // 初始化基础场景
  useEffect(()=>{
    if(renderRef.current){
        createScene()
        animate()
    }
  },[animate])

  // 初始化地形
  useEffect(()=>{
    if(mapDataVal.length > saveMapDataVal.current.length){
       // 新增
       createBuild(mapDataVal)
       saveMapDataVal.current = mapDataVal

    }

    if(mapDataVal.length < saveMapDataVal.current.length){
      // 删除
      saveMapDataVal.current = mapDataVal

    }
  },[mapDataVal])

    return(
      <div className="root">
        <div className="top">
        <Radio.Group defaultValue="edit" size="large" buttonStyle="solid">
            <Radio.Button value="show">预览</Radio.Button>
            <Radio.Button value="edit">编辑</Radio.Button>
        </Radio.Group>
        </div>
        <div className="left">
            <RoadEdit onFinish={onFinish}/>
        </div>
        <div className="right"></div>
        <div className="render-box" ref={renderRef}></div>
      </div>
    )
   
};

export default Editor;
