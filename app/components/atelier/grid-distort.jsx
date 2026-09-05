"use client";

import { useEffect, useRef } from "react";

export default function GridDistort() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let width = 0;
    let height = 0;
    let frame = 0;
    let cols = 0;
    let rows = 0;
    let gap = 34;
    let restX = new Float32Array(0);
    let restY = new Float32Array(0);
    let posX = new Float32Array(0);
    let posY = new Float32Array(0);
    let mx = -9999;
    let my = -9999;
    let hasPointer = false;
    let visible = true;

    const radius = 190;
    const strength = 56;
    const ease = 0.16;

    const rebuild = () => {
      const box = wrap.getBoundingClientRect();
      width = Math.max(1, Math.round(box.width));
      height = Math.max(1, Math.round(box.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      gap = width < 640 ? 56 : 48;
      cols = Math.ceil(width / gap) + 2;
      rows = Math.ceil(height / gap) + 2;
      const originX = (width - (cols - 1) * gap) / 2;
      const originY = (height - (rows - 1) * gap) / 2;
      const n = cols * rows;
      restX = new Float32Array(n);
      restY = new Float32Array(n);
      posX = new Float32Array(n);
      posY = new Float32Array(n);
      let i = 0;
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const x = originX + c * gap;
          const y = originY + r * gap;
          restX[i] = x;
          restY[i] = y;
          posX[i] = x;
          posY[i] = y;
          i += 1;
        }
      }
    };

    const move = (event) => {
      const box = wrap.getBoundingClientRect();
      const x = event.clientX - box.left;
      const y = event.clientY - box.top;
      if (x < 0 || y < 0 || x > box.width || y > box.height) {
        hasPointer = false;
        return;
      }
      mx = x;
      my = y;
      hasPointer = true;
    };

    const fadeEdges = () => {
      ctx.save();
      ctx.globalCompositeOperation = "destination-in";
      const fadeX = ctx.createLinearGradient(0, 0, width, 0);
      fadeX.addColorStop(0, "rgba(0,0,0,0)");
      fadeX.addColorStop(0.08, "rgba(0,0,0,1)");
      fadeX.addColorStop(0.92, "rgba(0,0,0,1)");
      fadeX.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = fadeX;
      ctx.fillRect(0, 0, width, height);
      const fadeY = ctx.createLinearGradient(0, 0, 0, height);
      fadeY.addColorStop(0, "rgba(0,0,0,0)");
      fadeY.addColorStop(0.1, "rgba(0,0,0,1)");
      fadeY.addColorStop(0.9, "rgba(0,0,0,1)");
      fadeY.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = fadeY;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    };

    const tick = () => {
      if (!visible) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const n = cols * rows;
      for (let i = 0; i < n; i += 1) {
        let tx = restX[i];
        let ty = restY[i];
        if (hasPointer && !reduce) {
          const dx = restX[i] - mx;
          const dy = restY[i] - my;
          const dist = Math.hypot(dx, dy) || 0.0001;
          if (dist < radius) {
            const force = (1 - dist / radius) ** 1.6;
            tx += (dx / dist) * force * strength;
            ty += (dy / dist) * force * strength;
          }
        }
        posX[i] += (tx - posX[i]) * (reduce ? 1 : ease);
        posY[i] += (ty - posY[i]) * (reduce ? 1 : ease);
      }

      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 0.7;
      ctx.strokeStyle = "rgba(201, 169, 98, 0.14)";
      for (let r = 0; r < rows; r += 1) {
        ctx.beginPath();
        const rowStart = r * cols;
        ctx.moveTo(posX[rowStart], posY[rowStart]);
        for (let c = 1; c < cols; c += 1) {
          ctx.lineTo(posX[rowStart + c], posY[rowStart + c]);
        }
        ctx.stroke();
      }
      for (let c = 0; c < cols; c += 1) {
        ctx.beginPath();
        ctx.moveTo(posX[c], posY[c]);
        for (let r = 1; r < rows; r += 1) {
          const i = r * cols + c;
          ctx.lineTo(posX[i], posY[i]);
        }
        ctx.stroke();
      }

      for (let i = 0; i < n; i += 1) {
        const push = Math.min(1, Math.hypot(posX[i] - restX[i], posY[i] - restY[i]) / 28);
        if (push < 0.04) continue;
        ctx.beginPath();
        ctx.fillStyle = `rgba(232, 213, 163, ${0.12 + push * 0.4})`;
        ctx.arc(posX[i], posY[i], 0.8 + push * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      if (hasPointer) {
        const glow = ctx.createRadialGradient(mx, my, 10, mx, my, radius);
        glow.addColorStop(0, "rgba(201, 169, 98, 0.1)");
        glow.addColorStop(1, "rgba(201, 169, 98, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      fadeEdges();
      frame = requestAnimationFrame(tick);
    };

    rebuild();
    const ro = new ResizeObserver(rebuild);
    ro.observe(wrap);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(wrap);
    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
