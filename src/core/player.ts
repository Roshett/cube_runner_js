import * as THREE from "three";
import Colors from './interfaces/colors';
import { SPEED_PLAYER } from './constants';

class Player {
    loader: any;
    body: any;


    constructor(cubeBuilder: any) {
        this.body = cubeBuilder.getCube();

        this.initKeyInputhanlder();
    }

    initKeyInputhanlder = () => {
        const onDocumentKeyDown = (event: any) => {
            var keyCode = event.which;
            if (keyCode === 87) {
                this.body.position.y += SPEED_PLAYER;
            } else if (keyCode === 83) {
                this.body.position.y -= SPEED_PLAYER;
            } else if (keyCode === 65) {
                this.body.position.x -= SPEED_PLAYER;
            } else if (keyCode === 68) {
                this.body.position.x += SPEED_PLAYER;
            } else if (keyCode === 32) {
                this.body.position.set(0, 0, 0);
            } else if (keyCode === 81) {
                this.body.position.z += SPEED_PLAYER;
            } else if (keyCode === 69) {
                this.body.position.z -= SPEED_PLAYER;
            }
            console.log(keyCode)
        };
        document.addEventListener("keydown", onDocumentKeyDown, false);
    };

    changeColor = () => {
        console.log('change');
    };
}

export default Player;