"use client";

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Disable Service Worker in development to prevent HMR/WebSocket issues
    if (process.env.NODE_ENV !== 'production') {
      if ('serviceWorker' in navigator) {
        // Unregister any existing service workers
        navigator.serviceWorker
          .getRegistrations()
          .then((registrations) => {
            registrations.forEach((registration) => {
              registration.unregister().catch(() => {});
            });
          })
          .catch(() => {});

        // Clear caches created by the SW to avoid stale assets
        if (window.caches && caches.keys) {
          caches
            .keys()
            .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
            .catch(() => {});
        }
      }

      console.log('ℹ️ Skipping Service Worker in development');
      return;
    }

    // Production: register the Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(() => {
          console.log('✅ Service Worker registered successfully');
        })
        .catch((error) => {
          console.log('❌ Service Worker registration failed:', error);
        });
    }
  }, []);

  return null;
}
