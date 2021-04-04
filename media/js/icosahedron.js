import { OrbitControls } from './OrbitControls.js';

var $container = $('#container');
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
var camera = new THREE.PerspectiveCamera(80, 1, 0.1, 10000);
var scene = new THREE.Scene();
var Ico;


scene.add(camera);
renderer.setSize(600, 600);

// Making the canvas responsive
function onWindowResize() {

  var screenWidth = $(window).width();
  console.log(screenWidth);
  if (screenWidth <= 479) {
    renderer.setSize(350, 350);
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
	setTimeout(function(){
		onWindowResize();
	}, 500);
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
var image = '../../media/images/build/tracer_factory.png';
var loader = new THREE.TextureLoader();
loader.load( image, function ( texture ) {
    var geometry = new THREE.PlaneGeometry(100, 100);
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    var mesh = new THREE.Mesh( geometry, material );
    group.add( mesh );
});

var L2 = new THREE.PointLight();
L2.position.z = 1900;
L2.position.y = 1850;
L2.position.x = 1000;
scene.add(L2);
camera.add(L2);

var Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(125, 1), greyMat);
Ico.rotation.z = 0.5;

const wireframeMaterial = new THREE.MeshBasicMaterial( { color: 0x3DA8F5, wireframe: true, transparent: true } );

let wireframe = new THREE.Mesh( new THREE.IcosahedronGeometry(125, 1), wireframeMaterial );

Ico.add( wireframe );

scene.add(Ico);

const orbit = new OrbitControls( camera, renderer.domElement );
orbit.enableZoom = false;
orbit.minPolarAngle = Math.PI * 0.3; // radians
orbit.maxPolarAngle = Math.PI * 0.7; // radians
orbit.minAzimuthAngle = - Math.PI / 2 * 0.6 // radians
orbit.maxAzimuthAngle = (Math.PI / 2) * 0.6; // radians

// sprites
var txtLoader = new THREE.TextureLoader();
txtLoader.setCrossOrigin("");
var textures = [
  "../../media/images/build/person.png",
  "../../media/images/build/person.png"
];
var direction = new THREE.Vector3();
Ico.geometry.vertices.forEach(function(vertex, index){
	var texture = txtLoader.load(textures[index % 3]);
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

// Render
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  update();
}
render();