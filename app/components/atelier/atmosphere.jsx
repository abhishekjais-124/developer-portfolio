"use client";

import { useEffect, useRef } from "react";

export default function Atmosphere() {
  const canvasRef = useRef(null);
  const spotRef = useRef(null);
  const zoomRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    const spot = spotRef.current;
    const zoomLayer = zoomRef.current;
    if (!canvas || !spot) return;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let frame;
    const count = reduce ? 0 : window.innerWidth < 768 ? 28 : 72;
    const particles = Array.from({ length: count }, () => spawn());
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;

    function spawn() {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.4 + 0.2,
        vx: (Math.random() - 0.5) * 0.18,
        vy: -Math.random() * 0.22 - 0.04,
        a: Math.random() * 0.45 + 0.12,
      };
    }

    const resize = () => {
      width = canvas.width = window.innerWidth * window.devicePixelRatio;
      height = canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const move = (event) => {
      mx = event.clientX;
      my = event.clientY;
      spot.style.background = `radial-gradient(520px circle at ${mx}px ${my}px, rgba(201,169,98,0.14), transparent 48%)`;
    };

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((p) => {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          p.x += dx / dist;
          p.y += dy / dist;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -8) Object.assign(p, spawn(), { y: window.innerHeight + 6 });
        if (p.x < -8 || p.x > window.innerWidth + 8) p.x = Math.random() * window.innerWidth;
        ctx.beginPath();
        ctx.fillStyle = `rgba(232, 213, 163, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      frame = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    if (!reduce) frame = requestAnimationFrame(tick);

    const onScroll = () => {
      if (!zoomLayer || reduce || window.innerWidth < 1024) return;
      const p = Math.min(1, window.scrollY / (window.innerHeight * 1.4));
      zoomLayer.style.transform = `scale(${1 + p * 0.16})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#070707]" />
      <div ref={zoomRef} className="absolute inset-0 origin-center will-change-transform">
        <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_12%_8%,rgba(201,169,98,0.12),transparent_42%),radial-gradient(70%_50%_at_88%_0%,rgba(232,213,163,0.08),transparent_40%),radial-gradient(50%_40%_at_70%_90%,rgba(141,107,47,0.08),transparent_45%)]" />
      </div>
      <div ref={spotRef} className="absolute inset-0 transition-opacity duration-700" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 opacity-[0.11] mix-blend-overlay">
        <div className="grain-layer absolute -inset-[20%] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')] bg-[length:180px_180px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
