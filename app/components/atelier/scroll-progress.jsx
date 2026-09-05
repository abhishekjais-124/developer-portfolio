"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[1.5px] overflow-hidden">
      <div
        ref={ref}
        className="h-full origin-left bg-[#c9a962] transition-none"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
