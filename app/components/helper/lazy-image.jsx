// @flow strict
"use client";

import { useState, useEffect } from "react";

export default function LazyImage({ src, alt, className, placeholder = "blur" }) {
  const [imageSrc, setImageSrc] = useState(
    placeholder === "blur" ? null : src
  );
  const [imageRef, setImageRef] = useState(null);

  useEffect(() => {
    if (!imageRef) return;

    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "50px" }
    );

    observer.observe(imageRef);

    return () => {
      if (imageRef) observer.unobserve(imageRef);
    };
  }, [imageRef, src]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      style={{
        backgroundImage:
          !imageSrc &&
          'linear-gradient(90deg, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.1) 75%)',
        backgroundSize: "200% 100%",
        animation: !imageSrc ? "shimmer 2s infinite" : "none",
      }}
    />
  );
}
