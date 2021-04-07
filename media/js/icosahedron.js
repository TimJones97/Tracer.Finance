import { OrbitControls } from './OrbitControls.js';

var $container = $('#container');
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
var camera = new THREE.PerspectiveCamera(80, 1, 0.1, 10000);
var scene = new THREE.Scene();
var Ico;
var selectedObject = null;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

scene.add(camera);
renderer.setSize(600, 600);

// Making the canvas responsive
function onWindowResize(){
  var screenWidth = $(window).width();
  if (screenWidth <= 440) {
    renderer.setSize(310, 310);
  } else if (screenWidth <= 479) {
    renderer.setSize(400, 400);
  } else if (screenWidth <= 767) {
    renderer.setSize(450, 450);
  } else if (screenWidth <= 991) {
    renderer.setSize(500, 500);
  } else if (screenWidth <= 1200) {
    renderer.setSize(600, 600);
  } else if (screenWidth <= 1366) {
    renderer.setSize(650, 650);
  }
  camera.updateProjectionMatrix();
}
onWindowResize();
$(window).resize(function(){
  onWindowResize();
});

$container.append(renderer.domElement);

// Camera
camera.position.z = 220;

// Material
var greyMat = new THREE.MeshPhongMaterial({
  // color: new THREE.Color("rgb(125,127,129)"),
  // opacity: 0.1,
  opacity: 0,
  shading: THREE.FlatShading,
  transparent: true,
  vertexColors: true
});

// instantiate a loader
var group = new THREE.Object3D();
scene.add(group);
var image = '../../media/images/build/tracer_factory.svg';
var loader = new THREE.TextureLoader();
loader.load( image, function ( texture ) {
    var geometry = new THREE.PlaneGeometry(100, 100);
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    var mesh = new THREE.Mesh( geometry, material );
    group.add( mesh );
});

var Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(125, 1), greyMat);
Ico.rotation.z = 0.5;

const wireframeMaterial = new THREE.MeshBasicMaterial( { color: 0x3DA8F5, wireframe: true, transparent: true } );

let wireframe = new THREE.Mesh( new THREE.IcosahedronGeometry(125, 1), wireframeMaterial );

Ico.add(wireframe);

scene.add(Ico);

const orbit = new OrbitControls( camera, renderer.domElement );
orbit.enableZoom = false;
orbit.minPolarAngle = Math.PI * 0.4; // radians
orbit.maxPolarAngle = Math.PI * 0.6; // radians
orbit.minAzimuthAngle = - Math.PI / 2 * 0.2 // radians
orbit.maxAzimuthAngle = (Math.PI / 2) * 0.2; // radians

// sprites
var txtLoader = new THREE.TextureLoader();
txtLoader.setCrossOrigin("");
var texturesPartners = [
  "../../media/images/build/RMIT_BIH_logo_dark.svg",
  "../../media/images/build/lions_mane_logo_white_square.svg"
];
var direction = new THREE.Vector3();
Ico.geometry.vertices.forEach(function(vertex, index){
	var texture = txtLoader.load(texturesPartners[index]);
	var spriteMaterial = new THREE.SpriteMaterial({map: texture});
	var sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.setScalar(18);
  direction.copy(vertex).normalize();
  sprite.position.copy(vertex).addScaledVector(direction, 10);
  Ico.add(sprite);
});
var texturesPlaceholder = [
  "../../media/images/build/person.svg",
  "../../media/images/build/person.svg",
  "../../media/images/build/person.svg"
];
Ico.geometry.vertices.forEach(function(vertex, index){
  var texture = txtLoader.load(texturesPlaceholder[index % 3]);
  var spriteMaterial = new THREE.SpriteMaterial({map: texture});
  var sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.setScalar(15);
  direction.copy(vertex).normalize();
  sprite.position.copy(vertex).addScaledVector(direction, 10);
  Ico.add(sprite);
});

function update() {
  Ico.rotation.x += 2 / 2000;
  Ico.rotation.y += 2 / 2000;
}

// FOR CLICK EVENTS 
var canvas = document.querySelector('canvas');
canvas.addEventListener( 'pointermove', onPointerMove );

function onPointerMove( event ) {
  if (selectedObject) {
    selectedObject.material.color.set( '#69f' );
    selectedObject = null;
  }

  pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  // raycaster.setFromCamera( pointer, camera );
  // const intersects = raycaster.intersectObject( Ico, true );
  // if (intersects.length > 0) {
  //   const res = intersects.filter( function ( res ) {
  //     return res && res.object;
  //   } )[0];
  //   if (res && res.object && res.object.type == 'Sprite') {
  //     selectedObject = res.object;
  //     console.log(selectedObject.material);
  //     // selectedObject.material.color.set( '#f00' );
  //     // selectedObject.scale.set(100, 100, 100);
  //   }
  // }
}

// Render
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  update();
}
render();