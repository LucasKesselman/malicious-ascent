import * as BABYLON from '@babylonjs/core';
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import Engine from "./Engine";


export default class LevelManager {


    
    private _currentScene: BABYLON.Scene | undefined;

    



    constructor() {
            
        this._currentScene = undefined;
    
    }


    public LoadLevel(levelID: number, engine: Engine): BABYLON.Scene | undefined {
        console.log("loadLevel()");
        console.log(`level ID: ${levelID}`);

        let newScene: BABYLON.Scene | undefined;

        switch (levelID) {
            case 0:
                
                console.log("level 0"); 

                newScene = new BABYLON.Scene(engine.GetEngine());

                newScene!.createDefaultCameraOrLight(true, true, true);
                newScene!.createDefaultEnvironment();  


                // Show inspector.
                newScene!.debugLayer.show({
                    embedMode: false,
                    showExplorer: true,
                    showInspector: true,
                });
                

                // BABYLON.SceneLoader.Append("https://www.babylonjs.com/Assets/DamagedHelmet/glTF/", "DamagedHelmet.gltf", newScene, function (meshes) {
                //     newScene!.createDefaultCameraOrLight(true, true, true);
                //     newScene!.createDefaultEnvironment();       
                // });

                break;

            case 1:
            
                newScene = new BABYLON.Scene(engine.GetEngine());
                break;

            case 2:

                newScene = new BABYLON.Scene(engine.GetEngine());
                break;
        
            default:

                console.error("Level ID not found");
                newScene = undefined;
                break;
        }

        this._currentScene = newScene;
        return this._currentScene;
    }

    /**
     * @returns BABYLON
     */
    public GetCurrentScene(): BABYLON.Scene | undefined {
        return this._currentScene;
    }

   

}