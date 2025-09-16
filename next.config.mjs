/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  basePath: '/Hackathon-Website',
  assetPrefix: '/Hackathon-Website/',
  optimizeFonts: false,
}

export default nextConfig
