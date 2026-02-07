import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    NEXT_PUBLIC_CLOUDFLARE_SITE_KEY: process.env.SITE_KEY,
  },
};

export default nextConfig;
