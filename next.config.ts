import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
