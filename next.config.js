/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // allow any image
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
