import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const loader = new GLTFLoader();

type LoadGLTFType = {
    path:string
}
export const LoadGLTF = ({path}:LoadGLTFType) => {
    return new Promise((res,rej)=>{
        loader.load(
            // resource URL
            path,
            // called when the resource is loaded
            function ( gltf ) {
               console.log(gltf)
               res(gltf)
            },
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            // called when loading has errors
            function ( error ) {
                rej(error)
                console.log( '加载失败' );
            }
        );
    })
}