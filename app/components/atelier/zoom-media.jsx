"use client";

import { useEffect, useRef } from "react";

export default function ZoomMedia({
  children,
  className = "",
  intensity = 0.22,
}) {
  const frameRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    const inner = innerRef.current;
    if (!frame || !inner) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf;

    const update = () => {
      const rect = frame.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const progress = 1 - (rect.top + rect.height) / (view + rect.height);
      const clamped = Math.min(1, Math.max(0, progress));
      inner.style.transform = `scale(${1 + clamped * intensity})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [intensity]);

  return (
    <div ref={frameRef} className={`overflow-hidden ${className}`}>
      <div
        ref={innerRef}
        className="h-full w-full will-change-transform origin-center"
        style={{ transform: "scale(1.08)" }}
      >
        {children}
      </div>
    </div>
  );
}
