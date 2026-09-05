"use client";

import { useRef } from "react";

export default function Tilt({ children, className = "", max = 8 }) {
  const ref = useRef(null);

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };

  const move = (event) => {
    const node = ref.current;
    if (!node || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -max * 2;
    const ry = (px - 0.5) * max * 2;
    node.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={move}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
}
