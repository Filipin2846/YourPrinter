/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  // Remover a configuração experimental que está causando erro
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
