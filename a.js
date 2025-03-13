// GSAP Animation for Hero Section
gsap.from(".profile-pic", { opacity: 0, scale: 0.5, duration: 1.5, delay: 0.3 });
gsap.from(".glow", { opacity: 0, y: 20, duration: 1.5, delay: 0.5 });
gsap.to(".animated-text", { opacity: 1, y: -10, duration: 1.5, delay: 0.7 });

// THREE.js 3D Background Effect
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#bgCanvas") });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const particleGeometry = new THREE.BufferGeometry();
const particleCount = 500;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particleMaterial = new THREE.PointsMaterial({ color: 0x00ffff, size: 0.5 });
const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.002;
    renderer.render(scene, camera);
}

animate();
