import "./style.css"
import gsap from 'gsap';
import * as THREE from 'three';
import * as dat from "dat.gui"
// console.log(dat);
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const canvas = document.querySelector('canvas.webgl');
const gui = new dat.GUI();
const Configuracion = function () {
    this.color = "#ff0000",
        this.spin = () => {
            gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + 10 })
        }
}
const conf = new Configuracion();
// console.log(conf);
const parameters = {
    color: "25500"
}
gui.addColor(conf, "color").onChange(function () {
    mesh.material.color.set(conf.color)
    // console.log(mesh.material.color.set(conf.color))
})
gui.add(conf, 'spin')
console.log(gui);
// // import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene();
/* Cursor */
const cursor = {
    x: 0,
    y: 0
};
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight

};
window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height)
})
window.addEventListener("mousemove", (e) => {
    cursor.x = -(e.clientX / sizes.width - .5);
    cursor.y = -(e.clientY / sizes.height - .5);
});
// const positionArray = new Float32Array([
//     0, 0, 0,
//     0, 1, 0,
//     1, 0, 0
// ])
// const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
// const postionAttribute = new THREE.BufferAttribute(positionArray, 3);
// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', postionAttribute)
// const vetex1 = new THREE.Vector3
// const hey = new THREE.Geometry
// console.log(THREE.Geometr);

// const geotmetry = new THREE.BufferGeometry();
// const geotmetry2 = new THREE.BufferGeometry();
const count = 10;
// const positionArray2 = new Float32Array([
//     -1, -1, 1,
//     1, -1, 1,
//     1, 1, 1,
//     1, 1, 1,
//     -1, 1, 1,
//     -1, -1, 1
// ]);
// let count=10
// const postionArray = new Float32Array(count * 300 * 300)
// for (let i = 0; i < count * 3 * 3 * 3; i++) {
//     postionArray[i] = Math.random();
//     // console.log(Math.random() * -.5);
// }
// const postionAttribute2 = new THREE.BufferAttribute(positionArray2, 3);
// const postionAttribute = new THREE.BufferAttribute(postionArray, 3);
// geotmetry2.setAttribute("position", postionAttribute2)
// geotmetry.setAttribute("position", postionAttribute)/
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 2, 1, 1),

    new THREE.MeshBasicMaterial({
        color: conf.color,
        // wireframe: true
    })
);
mesh.visible = false
gui.add(mesh.position, "y")
    .max(3)
    .min(-3)
    .step(.01)
    .name("elevation");

gui
    .add(mesh, "visible");
gui
    .add(mesh.material, "wireframe")
// console.log(mesh.material.color)


// gui.add(mesh.position, "y", -3, 3, .01)
// gui.add(mesh.position, "x", -3, 3, .01)
// gui.add(mesh.position, "z", -3, 3, .01)
// scene.add(mesh2)
scene.add(mesh);
// mesh.position.normalize();

// Sizes

const aspetRation = sizes.width / sizes.height

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000);
// console.log(camera);
camera.position.x = .1,
    camera.position.z = 3,

    scene.add(camera);
/* orbit */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true


/*  */

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
window.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        canvas.requestFullscreen();
    }
    else {
        console.log('object');
        document.exitFullscreen()
    };
})



let time = Date.now();
renderer.setSize(sizes.width, sizes.height);
const clock = new THREE.Clock();

const tick = () => {
    const elaspedTime = clock.getElapsedTime();


    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick)
};

tick();
const a = 5;
const b = 5;
const c = a + b;