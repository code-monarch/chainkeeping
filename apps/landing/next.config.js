/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "purecatamphetamine.github.io",
      },
    ],
  },
};

export default nextConfig;
