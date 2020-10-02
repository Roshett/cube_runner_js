import * as THREE from "three";
import { SPEED_PLAYER, ROTATION_SPEED, GRAVITY, JUMP_POWER, THRESHOLD_TOP_CUBE } from './constants';

class Player {
    loader: any;
    body: any;
    speedMoveY: number;
    sceneItems: Array<any>;
    groundItem: any;
    isCollision: boolean;


    constructor(cubeBuilder: any, sceneItems: any) {
        this.body = cubeBuilder.getCube();
        this.speedMoveY = 0;
        this.sceneItems = sceneItems;
        this.groundItem = undefined;
        this.isCollision = false;
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

    private isGroundedCheck = () => {
        let items = this.sceneItems[Math.floor(Math.abs(this.body.position.x)) + 1]
        
        this.isCollisionCheck(items)

        let front = items.find((item: any) => {
            return (item.y + 1) >= this.body.position.y && item.y + THRESHOLD_TOP_CUBE < this.body.position.y
        })

        if(front) {
            this.groundItem = front
            return;
        }
        
        items = this.sceneItems[Math.floor(Math.abs(this.body.position.x))]

        let back = items.find((item: any) => {
            return (item.y + 1) >= this.body.position.y && item.y + THRESHOLD_TOP_CUBE < this.body.position.y
        })

        this.groundItem = back
    };

    private isCollisionCheck(cubes: any) {
        this.isCollision = cubes.some((item: any) => {
            return item.y + THRESHOLD_TOP_CUBE >= this.body.position.y && item.y <= this.body.position.y
        })
    }

    public getPosition = () => {
        return this.body.position
    }

    public move() {
        if(this.isCollision) {
            return;
        }


        this.body.position.y += this.speedMoveY;
        this.isGroundedCheck()
        // console.log(this.groundItem)
        
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