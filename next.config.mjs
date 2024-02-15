/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.dummyjson.com",
      "robohash.org",
      "localhost",
      "bulkee-client.vercel.app",
    ],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
