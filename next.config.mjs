/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    esmExternals: "loose", // required to make Konva & react-konva work
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "liveblocks.io",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make Konva & react-konva work
    return config;
  },
};

export default nextConfig;