// @flow strict
// Performance optimization utilities for dynamic loading and caching

/**
 * Dynamically load a component with loading and error states
 */
export const loadComponent = (importFunc) => {
  return (props) => {
    try {
      const Component = require.resolve(importFunc);
      return <Component {...props} />;
    } catch (error) {
      console.error("Failed to load component:", error);
      return null;
    }
  };
};

/**
 * Prefetch a resource to improve perceived performance
 */
export const prefetchResource = (url, type = "fetch") => {
  if (typeof document === "undefined") return;

  const link = document.createElement("link");
  link.rel = type === "font" ? "prefetch" : "prefetch";
  link.as = type === "font" ? "font" : "script";
  link.href = url;
  if (type === "font") link.crossOrigin = "anonymous";
  document.head.appendChild(link);
};

/**
 * Request idle callback with fallback for older browsers
 */
export const scheduleIdleTask = (callback) => {
  if ("requestIdleCallback" in window) {
    return window.requestIdleCallback(callback);
  } else {
    return setTimeout(callback, 1);
  }
};

/**
 * Get current network type for adaptive loading
 */
export const getNetworkType = () => {
  if ("connection" in navigator) {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    return connection?.effectiveType || "4g";
  }
  return "4g";
};

/**
 * Adjust quality based on network speed
 */
export const getImageQuality = () => {
  const networkType = getNetworkType();
  const qualityMap = {
    "slow-2g": 0.5,
    "2g": 0.6,
    "3g": 0.75,
    "4g": 1.0,
  };
  return qualityMap[networkType] || 1.0;
};
