// @flow strict
"use client";

import { useEffect, useState } from "react";

export function useNetworkInfo() {
  const [networkInfo, setNetworkInfo] = useState({
    effectiveType: "4g",
    saveData: false,
    downlink: undefined,
    rtt: undefined,
  });

  useEffect(() => {
    // Check if connection info is available
    if ("connection" in navigator) {
      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;

      if (connection) {
        const updateNetworkInfo = () => {
          setNetworkInfo({
            effectiveType: connection.effectiveType || "4g",
            saveData: connection.saveData || false,
            downlink: connection.downlink,
            rtt: connection.rtt,
          });
        };

        updateNetworkInfo();
        connection.addEventListener("change", updateNetworkInfo);

        return () => {
          connection.removeEventListener("change", updateNetworkInfo);
        };
      }
    }
  }, []);

  // Determine if user is on slow connection
  const isSlowConnection =
    networkInfo.effectiveType === "slow-2g" ||
    networkInfo.effectiveType === "2g" ||
    networkInfo.effectiveType === "3g" ||
    networkInfo.saveData;

  // Get quality setting for images based on connection
  const imageQuality = {
    "slow-2g": { width: 400, quality: 50 },
    "2g": { width: 600, quality: 60 },
    "3g": { width: 800, quality: 75 },
    "4g": { width: 1200, quality: 90 },
  };

  return {
    ...networkInfo,
    isSlowConnection,
    imageQuality: imageQuality[networkInfo.effectiveType] || imageQuality["4g"],
    shouldReduceAnimations:
      networkInfo.effectiveType !== "4g" || networkInfo.saveData,
  };
}

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}
