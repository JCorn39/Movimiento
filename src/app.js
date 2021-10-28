 import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';

 //                                                                 -------------- Manera #1 --------------

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000,);
const renderer = new THREE.WebGLRenderer();

// Paleta de colores
const palette = {bgColor: '#000000', boxColor: 0xffffff, };

let objects = {};

document.body.onload = () => { main(); };

window.onresize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, true);
};

function main() {
  // Configurracion inicial
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(palette.bgColor, 1);
  document.body.appendChild(renderer.domElement);

  camera.position.z = 20;
  camera.position.y = 0;

  //cubo
  const geometry = new THREE.BoxGeometry(10, 10, 10, 5, 5, 5);
  const material = new THREE.MeshBasicMaterial({color: palette.boxColor, side: THREE.DoubleSide, wireframe: true});
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
  console.log(objects);

  //Movimiento

 window.addEventListener('keydown',(e)=>{
   let tecla=e.key
    console.log(e.key)
      switch (tecla) {
        case 'ArrowRight':
         camera.position.x=camera.position.x-0.5;
        break;
        case 'ArrowLeft':
         camera.position.x=camera.position.x+0.5;
        break;
        case 'ArrowUp':
         camera.position.y=camera.position.y-0.5;
        break;
        case 'ArrowDown':
         camera.position.y=camera.position.y+0.5;
        break;
       case 'd':
         camera.position.x=camera.position.x-0.5;
       break;
       case 'a':
         camera.position.x=camera.position.x+0.5;
       break;
       case 'w':
         camera.position.y=camera.position.y-0.5;
       break;
       case 's':
         camera.position.y=camera.position.y+0.5;
       break;
       default:
       break;
     }
 })
  
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

//                                                                 -------------- Manera #2 --------------

/* 
var xSpeed= 2.0;
var ySpeed= 2.0;
var direction= "stop";

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );
var camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight, 1, 10000);
camera.position.z = 1000;
// Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Cube
var geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function render() {
  requestAnimationFrame(render);
  if(direction=="right"){
    cube.position.x -= xSpeed;  
  } else if (direction=="left"){
    cube.position.x += xSpeed;
  } 
  else if (direction=="up"){
    cube.position.y -= ySpeed;
  }
  else if (direction=="down"){
    cube.position.y += ySpeed;
  }else {
  }
  renderer.render(scene, camera);
};

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    // Izquierda
    if (keyCode == 37) {
      if (direction=="left"){
        direction= "stop";
      } else if (direction=="stop"){
        direction= "right";
      }
    // Derecha
    } else if (keyCode == 39) {
      if (direction=="right"){
        direction= "stop";
      } else if (direction=="stop"){
        direction= "left";
      }
    }
    else if (keyCode == 38) {
      if (direction=="up"){
        direction= "stop";
      } else if (direction=="stop"){
        direction= "down";
      }
    }
    else if (keyCode == 40) {
      if (direction=="down"){
        direction= "stop";
      } else if (direction=="stop"){
        direction= "up";
      }
    }
};

render(); */