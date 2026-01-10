import { Analytics } from "@vercel/analytics/react";

export default function PerformanceOptimizer() {
  return (
    <>
      {/* Preconnect to external services */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://res.cloudinary.com" />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="https://res.cloudinary.com" />

      {/* Analytics (optional) */}
      <Analytics />
    </>
  );
}
