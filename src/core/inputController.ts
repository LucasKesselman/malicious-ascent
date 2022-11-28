
import * as BABYLON from '@babylonjs/core';
export default class PlayerInput{


    private gamepadManager = new BABYLON.GamepadManager();



    constructor():void {
        this.gamepadManager.onGamepadConnectedObservable.add((gamepad, state) => {

            //Handle gamepad types only works with xbox 360 controller right now
            if (gamepad instanceof BABYLON.Xbox360Pad) {
                
            }

        })
    }

    //Create gamepad to handle controller connect/disconnec
        
    gamepadManager.onGamepadConnectedObservable.add((gamepad, state)=>{
       
        
        //Handle gamepad types
        if (gamepad instanceof BABYLON.Xbox360Pad) {
            //Xbox button down/up events
            gamepad.onButtonDownObservable.add((button, state)=>{
                buttonsText.text = BABYLON.Xbox360Button[button] + " pressed";
            })
            gamepad.onButtonUpObservable.add((button, state)=>{
                buttonsText.text = BABYLON.Xbox360Button[button] + " released";
            })

            //Stick events
            gamepad.onleftstickchanged((values)=>{
                stickText.text = "x:" + values.x.toFixed(3) + " y:" + values.y.toFixed(3);
            });
            gamepad.onrightstickchanged((values)=>{
                stickText.text = "x:" + values.x.toFixed(3) + " y:" + values.y.toFixed(3);
            });
        } 
    }
}