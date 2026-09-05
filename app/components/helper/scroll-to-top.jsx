"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 240);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-12 w-12 items-center justify-center border border-[#c9a962]/40 bg-[#070707]/80 text-[#c9a962] backdrop-blur-md transition hover:bg-[#c9a962] hover:text-[#070707] sm:right-6"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <FaArrowUp size={14} />
    </button>
  );
};

export default ScrollToTop;
