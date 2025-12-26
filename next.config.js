const path = require("path");

module.exports = {
  output: "export",            // ✅ static export
  images: {
    unoptimized: true,         // ✅ required for static hosting
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "media.dev.to" },
      { protocol: "https", hostname: "media2.dev.to" },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
