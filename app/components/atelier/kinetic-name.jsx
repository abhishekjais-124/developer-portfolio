"use client";

import { useEffect, useRef } from "react";

export default function KineticName() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const move = (event) => {
      const box = root.getBoundingClientRect();
      const pad = 140;
      const inside =
        event.clientX >= box.left - pad &&
        event.clientX <= box.right + pad &&
        event.clientY >= box.top - pad &&
        event.clientY <= box.bottom + pad;

      if (!inside) {
        targetX = 0;
        targetY = 0;
        return;
      }

      const nx = ((event.clientX - box.left) / box.width) * 2 - 1;
      const ny = ((event.clientY - box.top) / box.height) * 2 - 1;
      targetX = Math.max(-1, Math.min(1, nx)) * 3.2;
      targetY = Math.max(-1, Math.min(1, ny)) * -2.4;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;
      root.style.transform = `perspective(1400px) rotateX(${currentY.toFixed(3)}deg) rotateY(${currentX.toFixed(3)}deg)`;
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
    <h1
      ref={rootRef}
      className="hero-name relative mt-4 font-display font-light leading-[0.82] text-[#f3eee4] sm:mt-6 sm:leading-[0.76]"
    >
      <span className="hero-name-asterisk" aria-hidden="true">
        *
      </span>
      <span className="hero-name-mask">
        <span
          className="hero-name-fill hero-name-ivory text-[clamp(2.55rem,12.5vw,4.6rem)] italic sm:text-[11.5vw] lg:text-[7.4rem] xl:text-[8.2rem]"
          style={{ animationDelay: "140ms" }}
        >
          Abhishek
        </span>
      </span>
      <span className="hero-name-mask mt-1">
        <span
          className="hero-name-fill hero-name-gold text-[clamp(2.55rem,12.5vw,4.6rem)] italic sm:text-[11.5vw] lg:text-[7.4rem] xl:text-[8.2rem]"
          style={{ animationDelay: "320ms" }}
        >
          Jaiswal
        </span>
      </span>
    </h1>
  );
}
