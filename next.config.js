const path = require("path");

module.exports = {
  output: 'export',  // <--- 1. Forces Next.js to produce static HTML files (fixes the 404)
  
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  
  images: {
    unoptimized: true, // <--- 2. Required because standard Image Optimization doesn't work with static export
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "media.dev.to" },
      { protocol: "https", hostname: "media2.dev.to" },
    ],
  },
};
