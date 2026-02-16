/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // This allows the 3-5MB photos of IDs
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig
