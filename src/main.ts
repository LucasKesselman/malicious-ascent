import './style.css'
import * as BABYLON from '@babylonjs/core';





//ON DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
    console.log("%cDOM Conent Loaded", "color:green");
    init();
});






/**
* Initialize the game engine and start the game loop
* @returns void
*/
function init(): void {
    console.log("init()");
    
    //notes of what to do
    // initHTML();
    // initEngine();
    // initLevelManager();
    
    // create the game engine
    let engine = new Engine(
        document.getElementById('canvas-background') as HTMLCanvasElement, 
        document.getElementById('game-area') as HTMLDivElement
    );
    
    // create the game level manager
    let levelManager = new LevelManager(engine);


    // start the game engine
    engine.Start(1280, 720);
        
    }
    
    
function initHTML(): void {
    console.log("initHTML()");

    
}
    
    let app = document.getElementById('app');
    let canvas = document.getElementById('renderCanvas');
    let engine = new BABYLON.Engine(canvas, true);
    let scene = new BABYLON.Scene(engine);
    let camera = new BABYLON.ArcRotateCamera('Camera', 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 0, -10));
    camera.attachControl(canvas, true);
    
    
    let engine = new BABYLON.EngineFactory.CreateEngine(document.getElementById('renderCanvas'));