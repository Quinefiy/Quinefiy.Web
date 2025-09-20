"use client";

import { useEffect } from "react";
import styles from "./HeroBackground.module.css";

const HeroBackground = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById("particles-container");
    if (!particlesContainer) return;

    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      createParticle(particlesContainer);
    }

    function createParticle(container: HTMLElement) {
      const particle = document.createElement("div");
      particle.className = styles.particle;

      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      resetParticle(particle);
      container.appendChild(particle);
      animateParticle(particle, container);
    }

    function resetParticle(particle: HTMLElement) {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = "0";

      return { x: posX, y: posY };
    }

    function animateParticle(particle: HTMLElement, container: HTMLElement) {
      const pos = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();

        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setTimeout(() => {
          animateParticle(particle, container);
        }, duration * 1000);
      }, delay * 1000);
    }

    // Mouse effect
    document.addEventListener("mousemove", (e) => {
      if (!particlesContainer) return;
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      const particle = document.createElement("div");
      particle.className = styles.particle;

      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = "0.6";

      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.style.transition = "all 2s ease-out";
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = "0";

        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);
    });
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050505] text-white">
      {/* Background Layers */}
      <div className={styles.gradientBackground}>
        <div className={`${styles.gradientSphere} ${styles.sphere1}`}></div>
        <div className={`${styles.gradientSphere} ${styles.sphere2}`}></div>
        <div className={`${styles.gradientSphere} ${styles.sphere3}`}></div>
        <div className={styles.glow}></div>
        <div className={styles.gridOverlay}></div>
        <div className={styles.noiseOverlay}></div>
        <div id="particles-container" className={styles.particlesContainer}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Next.js Animated Hero
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          This hero section is built with Next.js, TypeScript, Tailwind, and custom CSS animations.
        </p>
        <button className="bg-gradient-to-r from-pink-500 to-indigo-600 px-6 py-3 rounded-full uppercase font-semibold tracking-wider shadow-lg hover:translate-y-[-2px] transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroBackground;
