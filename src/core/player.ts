import * as THREE from "three";
import { SPEED_PLAYER, ROTATION_SPEED, GRAVITY, JUMP_POWER, THRESHOLD_TOP_CUBE, COLORS_PLAYER } from './constants';
import { randomInteger } from "./helpers";
import Colors from "./interfaces/colors";

class Player {
    loader: any;
    body: any;
    speedMoveY: number;
    sceneItems: Array<any>;
    groundItem: any;
    isCollision: boolean;
    colors: Colors;
    isJumpEnd: boolean;


    constructor(cubeBuilder: any, sceneItems: any) {
        this.body = cubeBuilder.getCube();
        this.colors = cubeBuilder.getColors();
        this.speedMoveY = 0;
        this.sceneItems = sceneItems;
        this.groundItem = undefined;
        this.isCollision = false;
        this.isJumpEnd = true;
        this.initKeyInputhanlder();
    }

    private onDocumentKeyDown = (event: any) => {
        const keyCode = event.which;

        if ((keyCode === 32 || keyCode === 83) && this.groundItem) {
            this.speedMoveY = JUMP_POWER;

            let val = JSON.parse(localStorage.getItem('position') || '[]');
            val.push(this.groundItem.x)
            localStorage.setItem('position', JSON.stringify(val));

            this.groundItem = undefined;
            this.isJumpEnd = false;
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

        if (front) {
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

    private changeColor(item: any) {
        let randColor: string = COLORS_PLAYER[randomInteger(0, 4)]
        item.material = this.colors[randColor];
        item.material.needsUpdate = true;
    }

    public getPosition = () => {
        return this.body.position
    }


    public move() {
        if (this.isCollision) {
            return;
        }


        this.body.position.y += this.speedMoveY;
        this.isGroundedCheck()

        if (this.groundItem) {
            this.speedMoveY = 0;
            this.body.position.y = this.groundItem.y + 1;
            this.body.rotation.z = 0;

            if(!this.isJumpEnd) {
                this.changeColor(this.groundItem);
                this.isJumpEnd = true;
            }

        } else {
            this.isJumpEnd = false;
            this.speedMoveY -= GRAVITY;
            this.body.rotation.z += ROTATION_SPEED;
        }

        this.body.position.x -= SPEED_PLAYER;
        return this.body.position.x;
    }
}

export default Player;