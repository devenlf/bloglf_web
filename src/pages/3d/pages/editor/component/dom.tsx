  import * as THREE from 'three';

  // 创建一个模块
  export const createGeometry = () => {
    const geometry = new THREE.BoxGeometry( 4, 1, 4 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    return cube
  }

//   export const transformControl = ({camera,renderer}) =>{
//         const control = new TransformControls( camera.current, renderer.current.domElement );
//     		control.addEventListener( 'change', ()=>{console.log(12313)} );

//     		control.addEventListener( 'dragging-changed', function ( event ) {
//     			controls.current.enabled =! event.value;

//     		} );

//     		control.attach( cube );
//     		scene.current.add( control );
//   }