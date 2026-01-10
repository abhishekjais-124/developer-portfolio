const path = require("path");

module.exports = {
  output: 'export',
  
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "media.dev.to" },
      { protocol: "https", hostname: "media2.dev.to" },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  compress: true,
  
  // Optimize package imports
  experimental: {
    esmExternals: true,
    // Disabling react-icons optimization to avoid HMR/WebSocket issues in dev
    optimizePackageImports: ['recharts'],
  },
};
