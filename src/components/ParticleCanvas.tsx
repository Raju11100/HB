"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  maxOpacity: number;
  fadeSpeed: number;
  color: string;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const colors = [
      "rgba(226, 190, 114, ", // Gold
      "rgba(243, 215, 148, ", // Light Amber
      "rgba(142, 56, 76, ",   // Burgundy Rose
      "rgba(253, 248, 243, ", // Warm Cream
    ];

    // Determine particle count based on screen width (mobile friendly!)
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      const maxOpacity = 0.15 + Math.random() * 0.45;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2.5,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -0.2 - Math.random() * 0.45,
        opacity: Math.random() * maxOpacity,
        maxOpacity,
        fadeSpeed: 0.003 + Math.random() * 0.006,
        color: colorBase,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.fadeSpeed;

        if (p.opacity >= p.maxOpacity || p.opacity <= 0.05) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        // Reset if off-screen top
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, p.opacity)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color + "0.6)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
