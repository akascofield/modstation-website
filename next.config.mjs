/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Static export için önemli ayarlar
  distDir: 'out',
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
}

export default nextConfig
