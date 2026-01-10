"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Enforce dark theme only
    setTheme("dark");
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const html = document.documentElement;
    html.classList.remove("light");
    html.classList.add("dark");
    try {
      localStorage.setItem("theme", "dark");
    } catch {}
  }, [isLoaded]);

  const toggleTheme = () => {
    // No-op: light theme removed
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
