/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mental-health-tracking-tools',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig