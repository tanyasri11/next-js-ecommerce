import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/next-js-ecommerce",
  assetPrefix: "/next-js-ecommerce/",
};

export default nextConfig;
