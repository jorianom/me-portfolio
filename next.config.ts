import type { NextConfig } from "next";

export const basePath = process.env.NODE_ENV === 'production' ? '/me-portfolio' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
};

export default nextConfig;
