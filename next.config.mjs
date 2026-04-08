/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'localhost:8080', '*.devtunnels.ms'],
    },
  },
}

export default nextConfig
