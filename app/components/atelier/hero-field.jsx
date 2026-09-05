"use client";

import { useEffect, useRef } from "react";

export default function HeroField() {
  const followRef = useRef(null);

  useEffect(() => {
    const node = followRef.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const parent = node.parentElement;
    let frame = 0;
    let tx = 0.32;
    let ty = 0.38;
    let cx = tx;
    let cy = ty;

    const move = (event) => {
      const box = parent.getBoundingClientRect();
      tx = (event.clientX - box.left) / box.width;
      ty = (event.clientY - box.top) / box.height;
    };

    const tick = () => {
      cx += (tx - cx) * 0.045;
      cy += (ty - cy) * 0.045;
      node.style.left = `${cx * 100}%`;
      node.style.top = `${cy * 100}%`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="hero-field" aria-hidden="true">
      <div className="hero-field-silk" />
      <div ref={followRef} className="hero-field-follow" />
    </div>
  );
}
