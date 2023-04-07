/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: "/nextjs-pages",
  assetPrefix: "nextjs-pages",
};

module.exports = nextConfig;
