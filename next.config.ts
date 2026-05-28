import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.codingthailand.com",
      },
    ],
  },

  cacheComponents: true,
};

export default nextConfig;
