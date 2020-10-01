import * as THREE from "three";
import { SPEED_PLAYER, ROTATION_SPEED, GRAVITY, JUMP_POWER } from './constants';

class Player {
    loader: any;
    body: any;
    speedMoveY: number;
    sceneItems: Array<any>;
    groundItem: any;


    constructor(cubeBuilder: any, sceneItems: any) {
        this.body = cubeBuilder.getCube();
        this.speedMoveY = 0;
        this.sceneItems = sceneItems;
        this.groundItem = undefined;
        this.initKeyInputhanlder();
    }

    private onDocumentKeyDown = (event: any) => {
        const keyCode = event.which;

        if ((keyCode === 32 || keyCode === 83) && this.groundItem) {
            this.speedMoveY = JUMP_POWER;
            this.groundItem = undefined;
        }
    };

    private initKeyInputhanlder = () => {
        document.addEventListener("keydown", this.onDocumentKeyDown, false);
    };

    private isCollisionCheck = () => {
        let items = this.sceneItems[Math.floor(Math.abs(this.body.position.x))]
       
        this.groundItem = items.find((item: any) => {
            return (item.y + 1) >= this.body.position.y && item.y < this.body.position.y
        })
    };

    public changeColor = () => {
        console.log('change');
    };

    public getPosition = () => {
        return this.body.position
    }

    public move() {
        this.body.position.y += this.speedMoveY;
        this.isCollisionCheck()
        console.log(this.groundItem)
        
        if (this.groundItem) {
            this.speedMoveY = 0;
            this.body.position.y = this.groundItem.y + 1;
            this.body.rotation.z = 0;
        } else {
            this.speedMoveY -= GRAVITY;
            this.body.rotation.z += ROTATION_SPEED;
        }

        this.body.position.x -= SPEED_PLAYER;
    }
}

export default Player;