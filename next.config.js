/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://server-psi-eight-67.vercel.app/",
      },
    ];
  },
};

module.exports = nextConfig;
