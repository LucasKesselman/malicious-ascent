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

                // Show inspector.
                newScene!.debugLayer.show({
                    embedMode: false,
                    showExplorer: true,
                    showInspector: true,
                });


                // replace with my own 
                //newScene!.createDefaultCameraOrLight(true, true, true);
                // newScene!.createDefaultEnvironment({

                // });  

                //replace this with something better import it from bender?? 
                const LevelLight1 = new BABYLON.HemisphericLight(`HemisphericLightfor levelID=${levelID}`, new BABYLON.Vector3(-1, 2, -1), newScene);
                LevelLight1.intensity = 1;
                LevelLight1.diffuse = new BABYLON.Color3(1, 1, 1);
                LevelLight1.specular = new BABYLON.Color3(1, 1, 1);
                LevelLight1.groundColor = new BABYLON.Color3(0, 0, 0);

                const LevelLight = new BABYLON.DirectionalLight(`DirectionalLightfor levelID=${levelID}`, new BABYLON.Vector3(1, -2, 1), newScene);
                LevelLight.intensity = 3;
                LevelLight.position = new BABYLON.Vector3(-400, 800, -400);
                LevelLight.diffuse = new BABYLON.Color3(1, 1, 1);


                //LevelLight1.direction = new BABYLON.Vector3(0, -1, 0);
  




                // replace this with a FollowCamera instead of ArcRotateCamera
                const Levelcamera = new BABYLON.ArcRotateCamera(`Camera for levelID=${levelID}`, -Math.PI / 2, Math.PI / 2.5, 60, new BABYLON.Vector3(0, 0, 0), newScene);



                // replace this with Levelcamera.attachControl(engine.GetGamepad(), true);
                Levelcamera.attachControl(engine.GetCanvas(), true);
                
                

                //maybe try to figure out a way to made a node in the scene explorer that is't __root__ ... call it "EnvironmentNode" and it has all the relevent meshes and stuff
                ////let environmentNode = new BABYLON.Node("environment", newScene);



                BABYLON.SceneLoader.ImportMeshAsync(["environment-ico-platform-mesh"], "../babylon_blender_assets/", "platformv1.gltf", newScene).then( (environmentMeshes) => {

                    //DO THIS LATER
                    // environmentMeshes.skeletons.forEach( (skeleton) => {
                    //     skeleton.enableBlending(0.5);
                    //     skeleton.name


                    // });


                    environmentMeshes.meshes.forEach(mesh => {

                        mesh.isVisible = true;
                        mesh.checkCollisions = true;
                        mesh.receiveShadows = true;
                        mesh.actionManager = new BABYLON.ActionManager(newScene);
                        mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, (evt) => {
                            console.log(`Mesh picked:\n${mesh.name}\n\n`,`Pick Event:`, evt, `\n\n`, `Mesh:`, mesh);
                        }));

                        console.log(mesh);

                        
                    });



       
                }).catch( (err) => {
                    console.error(err);
                } );
                    
       


                // BABYLON.SceneLoader.Load("", "../babylon_blender_assets/untitled.babylon", engine.GetEngine(),function (scene) { });

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