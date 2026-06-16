import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      
  images: {
    unoptimized: true,   
  },
  basePath: '/devu',     
  trailingSlash: true,   // CRITICAL: Changes /feed to /feed/index.html for GitHub Pages compatibility
};

export default nextConfig;
