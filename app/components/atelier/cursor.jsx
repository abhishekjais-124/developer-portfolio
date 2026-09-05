"use client";

import { useEffect, useRef } from "react";

export default function LuxuryCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.classList.add("has-luxury-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let hovering = false;
    let pressing = false;
    let frame;

    const isInteractive = (target) =>
      Boolean(target.closest("a, button, [role='button'], input, textarea, .magnetic, label"));

    const move = (event) => {
      x = event.clientX;
      y = event.clientY;
      hovering = isInteractive(event.target);
    };

    const tick = () => {
      cx += (x - cx) * 0.28;
      cy += (y - cy) * 0.28;
      const scale = pressing ? 0.7 : hovering ? 2.35 : 1;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0) scale(${scale})`;
      cursor.classList.toggle("is-hover", hovering && !pressing);
      frame = requestAnimationFrame(tick);
    };

    const down = () => { pressing = true; };
    const up = () => { pressing = false; };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-luxury-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="luxury-cursor pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3eee4] mix-blend-difference md:block"
      aria-hidden="true"
    />
  );
}
