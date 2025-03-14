
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const StarryBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize scene
    const scene = new THREE.Scene();
    
    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 50;
    
    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Append renderer to the DOM
    containerRef.current.appendChild(renderer.domElement);
    
    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true
    });
    
    const starsVertices = [];
    for (let i = 0; i < 6000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    
    // Create shooting stars
    class ShootingStar {
      mesh: THREE.Mesh;
      done: boolean = false;
      speed: number;
      
      constructor() {
        // Create shooting star geometry
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 15);
        const material = new THREE.MeshBasicMaterial({
          color: 0x66FCF1,
          transparent: true,
          opacity: 0.8
        });
        
        this.mesh = new THREE.Mesh(geometry, material);
        
        // Random position
        this.mesh.position.x = (Math.random() - 0.5) * 200;
        this.mesh.position.y = (Math.random() - 0.5) * 200;
        this.mesh.position.z = -100;
        
        // Random rotation
        this.mesh.rotation.x = Math.random() * Math.PI;
        this.mesh.rotation.y = Math.random() * Math.PI;
        this.mesh.rotation.z = Math.random() * Math.PI;
        
        // Random speed
        this.speed = 2.5 + Math.random() * 1.5;
        
        scene.add(this.mesh);
      }
      
      update() {
        this.mesh.position.z += this.speed;
        
        // Check if shooting star is out of view
        if (this.mesh.position.z > 100) {
          scene.remove(this.mesh);
          this.done = true;
        }
      }
    }
    
    const shootingStars: ShootingStar[] = [];
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate stars slowly
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;
      
      // Update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        shootingStars[i].update();
        if (shootingStars[i].done) {
          shootingStars.splice(i, 1);
        }
      }
      
      // Randomly add new shooting stars
      if (Math.random() < 0.01 && shootingStars.length < 20) {
        shootingStars.push(new ShootingStar());
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup on unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      
      // Dispose resources
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default StarryBackground;
