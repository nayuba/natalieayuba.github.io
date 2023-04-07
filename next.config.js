/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
  },
  basePath: "/nextjs-page",
  assetPrefix: "/nextjs-page",
};

module.exports = nextConfig;
