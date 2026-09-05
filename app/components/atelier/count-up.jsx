"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ value, className = "", instant = false }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const numeric = String(value).replace(/[^\d.]/g, "");
    const suffix = String(value).replace(/[\d.]/g, "");
    const target = Number(numeric);
    if (instant || !numeric || Number.isNaN(target)) {
      setDisplay(value);
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (reduce) {
        setDisplay(value);
        return;
      }
      const start = performance.now();
      const duration = 1400;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        setDisplay(`${current}${suffix}`);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, instant]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
