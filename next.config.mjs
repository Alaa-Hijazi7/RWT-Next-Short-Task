/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    dirs: [
      'app',
    ],
  },
};

export default nextConfig;
