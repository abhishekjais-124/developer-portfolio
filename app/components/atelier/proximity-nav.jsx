"use client";

import { useEffect, useRef } from "react";

export default function ProximityNav({
  children,
  className = "",
  maxScale = 1.22,
  radius = 130,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const items = () => [...root.querySelectorAll("[data-proximity]")];
    let frame = 0;

    const reset = () => {
      items().forEach((el) => {
        el.style.transition = "transform 420ms cubic-bezier(0.16, 1, 0.3, 1), color 320ms ease";
        el.style.transform = "translate3d(0, 0, 0) scale(1)";
        el.style.color = "";
      });
    };

    const apply = (clientX) => {
      items().forEach((el) => {
        const box = el.getBoundingClientRect();
        const dx = clientX - (box.left + box.width / 2);
        const t = Math.max(0, 1 - Math.abs(dx) / radius);
        const eased = t * t * (3 - 2 * t);
        const scale = 1 + eased * (maxScale - 1);
        el.style.transition = "none";
        el.style.transform = `translate3d(0, ${(-eased * 6).toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
        el.style.color = `color-mix(in srgb, #c8c0b2 ${(100 - eased * 100).toFixed(1)}%, #c9a962)`;
      });
    };

    const move = (event) => {
      const x = event.clientX;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => apply(x));
    };

    root.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", reset);
    };
  }, [maxScale, radius]);

  return (
    <div ref={ref} className={`proximity-nav ${className}`}>
      {children}
    </div>
  );
}
