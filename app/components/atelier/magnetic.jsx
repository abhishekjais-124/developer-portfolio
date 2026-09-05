"use client";

import { useRef } from "react";

export default function Magnetic({ children, className = "", strength = 18 }) {
  const ref = useRef(null);

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate3d(0, 0, 0)";
  };

  const move = (event) => {
    const node = ref.current;
    if (!node || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate3d(${x / strength}px, ${y / strength}px, 0)`;
  };

  return (
    <div
      ref={ref}
      className={`magnetic inline-block will-change-transform ${className}`}
      onMouseMove={move}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
}
