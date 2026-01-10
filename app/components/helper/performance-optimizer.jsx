import { Analytics } from "@vercel/analytics/react";

export default function PerformanceOptimizer() {
  return (
    <>
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/_next/static/media/space-grotesk.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/_next/static/media/inter.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Preconnect to external services */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <link rel="preconnect" href="https://media.dev.to" />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      <link rel="dns-prefetch" href="https://media.dev.to" />

      {/* Analytics (optional) */}
      <Analytics />
    </>
  );
}
