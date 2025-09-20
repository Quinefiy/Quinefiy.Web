"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroBackground.module.css";

export default function Particles({ count = 50 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Keep track of timeouts for cleanup
    const timeouts = new Map<HTMLElement, number[]>();

    function resetParticle(el: HTMLElement) {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      el.style.left = `${posX}%`;
      el.style.top = `${posY}%`;
      el.style.opacity = "0";
      // ensure centered
      el.style.transform = "translate(-50%, -50%)";
      return { x: posX, y: posY };
    }

    function animateParticle(el: HTMLElement) {
      // stop if element was removed
      if (!container?.contains(el)) return;

      const pos = resetParticle(el);
      const duration = Math.random() * 8 + 5; // 8 - 18s (movement duration)
      const delay = Math.random() * 4; // 0 - 4s before this movement starts
      const visibleOpacity = (Math.random() * 0.4 + 0.2).toFixed(2); // 0.2 - 0.6

      // schedule movement start
      const moveTimeout = window.setTimeout(() => {
        // set CSS transition for smooth movement
        el.style.transition = `left ${duration}s linear, top ${duration}s linear, opacity ${Math.min(
          1.2,
          duration / 8
        )}s linear`;

        // compute next random move (percent-based)
        const moveX = pos.x + (Math.random() * 20 - 10); // +/-10%
        const moveY = pos.y + (Math.random() * -30); // mostly upwards
        el.style.left = `${moveX}%`;
        el.style.top = `${moveY}%`;
        el.style.opacity = visibleOpacity;

        // when movement done, schedule next cycle
        const endTimeout = window.setTimeout(() => {
          animateParticle(el);
        }, duration * 1000);

        // store endTimeout
        const arr = timeouts.get(el) || [];
        arr.push(endTimeout);
        timeouts.set(el, arr);
      }, delay * 1000);

      // store moveTimeout
      const arr = timeouts.get(el) || [];
      arr.push(moveTimeout);
      timeouts.set(el, arr);
    }

    // create particles
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = styles.particle; // wrapper particle
      // size
      const size = Math.random() * 3 + 1; // px
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.position = "absolute";
      p.style.pointerEvents = "none";

      // add glow child that is animated with CSS
      const glow = document.createElement("div");
      glow.className = styles.glow;

      // randomize glow timing so each particle glows independently
      const glowDuration = (Math.random() * 3 + 2).toFixed(2); // 2s - 5s
      const glowDelay = (Math.random() * 6).toFixed(2); // 0s - 6s
      glow.style.animationDuration = `${glowDuration}s`;
      glow.style.animationDelay = `${glowDelay}s`;

      // append glow to particle
      p.appendChild(glow);

      // place and start movement loop
      resetParticle(p);
      container.appendChild(p);
      timeouts.set(p, []);
      // initial animate call
      animateParticle(p);
    }

    // Cleanup on unmount: clear timeouts + remove DOM children
    return () => {
      timeouts.forEach((ids, el) => {
        ids.forEach((id) => clearTimeout(id));
        // optional: remove element
        if (container.contains(el)) container.removeChild(el);
      });
      timeouts.clear();
      // ensure container is empty
      container.innerHTML = "";
    };
  }, [count]);

  return <div ref={containerRef} className={styles.container} />;
}
