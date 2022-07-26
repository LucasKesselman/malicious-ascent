
import * as BABYLON from '@babylonjs/core';


export default class Engine {

    private _canvas: HTMLCanvasElement = document.getElementById('canvas-background') as HTMLCanvasElement;
    private _gameArea: HTMLDivElement = document.getElementById('game-area') as HTMLDivElement;
    private _babylonEngine: BABYLON.Engine;
    private _aspectRatio: number;

    private _audioOptions: BABYLON.IAudioEngineOptions = {
            outputAudio: true,
            spatialSound: true,
            maxSoundPointers: 8,
            disableAudioFocus: false,
            audioDevice: null,
            useHRTF: true,
            hrtfMaxAngle: Math.PI,
            audioContextInitialized: false,
            audioEnabled: true,
            useCustomHRTF: false,

            useAudioWorklet: true,
            audioWorkletModule: './audio-worklet.js',
            audioWorkletInputs: [
                'input'
            ],
            audioWorkletOutputs: [
                'output'
            ]
    }

    private _engineOptions: BABYLON.EngineOptions = {
 
        antialias: true,
        alpha: true,
        stencil: true,
        deterministicLockstep: false,
        lockstepMaxSteps: 4,
        audioEngine: true,
        useHighPrecisionFloats: false,
        audioEngineOptions: this._audioOptions,

    }


    constructor() {

        this._babylonEngine = new BABYLON.Engine(
            this._canvas,
            false,
            this._engineOptions,
            true
        );
        console.log(this._babylonEngine);

    }
    /**
     * @param  {number} width
     * @param  {number} height
     * @returns void
     */
    public Start(width: number, height: number): void {
        console.log("Start()");
    
        this._canvas.width = width;
        this._canvas.height = height;

        //set the aspect ratio
        if(width > height){
            this._aspectRatio = width / height;
        }
        else{
            this._aspectRatio = height / width;
        }

        window.addEventListener('resize', this.onWindowResize.bind(this));
        
       
    }


    private onWindowResize(): void {
        console.log("%cWindow Resized", "color:green");

        let width: number;
        let height: number;
        let windowAspectRatio: number = window.innerWidth / window.innerHeight;

        //horizontal
        if(windowAspectRatio > this._aspectRatio){
            height = window.innerHeight;
            width = height * this._aspectRatio;
        }
        //vertical
        else{
            width = window.innerWidth;
            height = width / this._aspectRatio;
        }

        this._gameArea.style.width = width + "px";
        this._gameArea.style.height = height + "px";

        this._gameArea.style.marginLeft = (-(width / 2)) + "px";
        this._gameArea.style.marginTop = (-(height / 2)) + "px";

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix;

        this._renderer.OnWindowResize(width, height);
    

        
    }

}