"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center h-10 w-10 rounded-full dark:border-white/10 light:border-gray-300/20 border dark:bg-white/5 light:bg-black/5 dark:text-white/80 light:text-gray-700 dark:hover:text-white light:hover:text-gray-900 dark:hover:bg-white/10 light:hover:bg-black/10 dark:hover:border-white/30 light:hover:border-gray-400/50 transition-all duration-300 group"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5">
        <BsSun
          size={18}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0"
              : "opacity-0 -rotate-90"
          }`}
        />
        <BsMoon
          size={18}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0"
              : "opacity-0 rotate-90"
          }`}
        />
      </div>
      
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#16f2b3]/0 to-[#6a5af9]/0 group-hover:from-[#16f2b3]/10 group-hover:to-[#6a5af9]/10 transition-all duration-300" />
    </button>
  );
}
