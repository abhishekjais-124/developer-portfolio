const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // ✅ IMPORTANT
  trailingSlash: true,       // ✅ avoids 404 on refresh
  images: {
    unoptimized: true,       // ✅ REQUIRED for static export
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
