"use client";

import { useEffect, useRef, useState } from "react";

const ParallaxWrapper = ({ children, offset = 0.5 }) => {
  const [translateY, setTranslateY] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const elementTop = elementRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Calculate parallax effect based on element position in viewport
      if (elementTop < windowHeight && elementTop > -windowHeight) {
        const movement = (windowHeight - elementTop) * offset * 0.1;
        setTranslateY(movement);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div
      ref={elementRef}
      style={{
        transform: `translateY(${translateY}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxWrapper;
