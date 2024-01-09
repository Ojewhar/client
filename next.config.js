/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://server-gamma-inky.vercel.app",
      },
    ];
  },
};

module.exports = nextConfig;
