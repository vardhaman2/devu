import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Tells Next.js to export static HTML
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
  // If your GitHub Pages URL looks like https://username.github.io/repository-name
  // uncomment the line below and replace 'repository-name' with your actual repo name:
  // basePath: '/repository-name', 
};

export default nextConfig;