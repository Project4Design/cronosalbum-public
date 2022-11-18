import * as THREE from 'three';

const FIELD_OF_VIEW = 75;
const NEAR_PLANE = 1;
const FAR_PLANE = 1000;
let elementContainer;
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let aspectRatio = screenWidth / screenHeight;
let windowHalfY = screenHeight / 2;
let windowHalfX = screenWidth / 2;
let mouseX = 0;
let mouseY = 0;
let camera;
let scene;
let renderer;

function setContainer(container) {
  elementContainer = container;
  elementContainer.style.touchAction = 'none';
  setElementSize();
};

function setElementSize() {
  screenWidth = elementContainer.getBoundingClientRect().width;
  screenHeight = elementContainer.getBoundingClientRect().height;
  aspectRatio = screenWidth / screenHeight;
}

function init() {
  camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, aspectRatio, NEAR_PLANE, FAR_PLANE);
  camera.position.z = FAR_PLANE / 2;

  scene = new THREE.Scene();

  const parameters = [
    [0xff7700, 2],
    [0xff9900, 2],
    [0xffaa00, 1.75],
    [0xffaa00, 1.5],
    [0x000833, 1.8],
    [0xaaaaaa, 1.75],
    [0xffffff, 1.5],
    [0xffffff, 1.25],
    [0xffffff, 1.125],
  ];

  const geometry = createGeometry();
  const spriteStar = new THREE.TextureLoader().load('/images/star.png');

  for (let i = 0; i < parameters.length; ++i) {
    const p = parameters[i];

    const material = new THREE.PointsMaterial({ color: p[0], size: p[1], map: spriteStar, blending: THREE.AdditiveBlending, depthTest: false, transparent: true });

    const point = new THREE.Points(geometry, material);
    scene.add(point);
  }

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setClearColor(0x000011, 1);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(screenWidth, screenHeight);

  elementContainer.appendChild(renderer.domElement);
  window.addEventListener('resize', onWindowResize);
}

function createGeometry() {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const vertex = new THREE.Vector3();

  for (let i = 0; i < 3500; i++) {
    vertex.x = Math.random() * 2000 - 1000;
    vertex.y = Math.random() * 2000 - 1000;
    vertex.z = Math.random() * 2000 - 1000;

    vertices.push(vertex.x, vertex.y, vertex.z);
    vertex.multiplyScalar(Math.random() * 0.09 + 1);
    vertices.push(vertex.x, vertex.y, vertex.z);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  return geometry;
}

function onWindowResize() {
  setElementSize();

  camera.aspect = aspectRatio;
  camera.updateProjectionMatrix();
  renderer.setSize(screenWidth, screenHeight);
}

function onMouseMove(event) {
  if (event.isPrimary === false) return;

  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  camera.position.y += (-mouseY + 200 - camera.position.y) * 0.05;
  camera.position.x += (mouseX - camera.position.x) * 0.005;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);

  const time = Date.now() * 0.00001;

  for (let i = 0; i < scene.children.length; i++) {
    const object = scene.children[i];

    if (object.isLine) {
      object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));

      if (i < 5) {
        const scale = object.userData.originalScale * (i / 5 + 1) * (1 + 0.5 * Math.sin(7 * time));

        object.scale.x = object.scale.y = object.scale.z = scale;
      }
    }
  }
}

export {
  setContainer,
  init,
  animate,
  onMouseMove,
};
