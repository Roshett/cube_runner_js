import * as THREE from "three";

class Scene {
    scene: any;
    sceneItems: Array<any>;

    constructor() {
        this.scene = new THREE.Scene();
        this.sceneItems = [];
    }

    buildPath(cubeBuilder: any) {
        for (let
            index = 0; index < 10; index++) {

            let cube = cubeBuilder.getCube(-index, -1, 0);
            cube.name = `index-cube-${index}`

            this.sceneItems.push([{ x: cube.position.x, y: cube.position.y, z: cube.position.z, name: cube.name }]);
            this.add(cube);
        }

        for (let
            index = 10; index < 150; index++) {

            if (index % 3 == 0) {
                let cube = cubeBuilder.getCube(-index, -1, 0);
                cube.name = `index-cube-${index}`

                this.sceneItems.push([{ x: cube.position.x, y: cube.position.y, z: cube.position.z, name: cube.name }]);
                this.add(cube)
            }
        }
    };

    add(body: any) {
        this.scene.add(body);
    };

    getScene() {
        return this.scene;
    };

    getSceneItems() {
        return this.sceneItems;
    }
}

export default Scene;