import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { Object3D } from 'three/src/core/Object3D.js';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { Texture } from 'three/src/textures/Texture.js';

type LoadGLTFType = {
    path:string
}

type LoadObjType = {
    path:string;
    materials: MTLLoader.MaterialCreator;
}

export const LoadGLTF= ({path}:LoadGLTFType) => {
    return new Promise((res,rej)=>{
        const loader = new GLTFLoader();
        loader.load(
            // resource URL
            path,
            // called when the resource is loaded
            function ( gltf ) {
                if(gltf){
                    res(gltf)
                }
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

export const LoadOBJ= ({path,materials}:LoadObjType):Promise<Object3D> => {
    materials.preload();
    return new Promise((res,rej)=>{
        const loaderOBJ = new OBJLoader();
        loaderOBJ.setMaterials(materials);
        loaderOBJ.load(
            // resource URL
            path,
            // called when the resource is loaded
            function ( obj ) {
                if(obj){
                    res(obj)
                }
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
        )
        
    })
}

export const LoadMTLL= ({path}:LoadGLTFType):Promise<MTLLoader.MaterialCreator> => {
    return new Promise((res,rej)=>{
        const loaderMTLL = new MTLLoader()
        loaderMTLL.load(
            // resource URL
            path,
            // called when the resource is loaded
            function ( obj ) {
                if(obj){
                    res(obj)
                }
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

export const LoadTexture= ({path}:LoadGLTFType):Promise<Texture> => {
    return new Promise((res,rej)=>{
        const loaderTexture = new TextureLoader();
        loaderTexture.load(
            // resource URL
            path,
            // called when the resource is loaded
            function ( obj ) {
                if(obj){
                    res(obj)
                }
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