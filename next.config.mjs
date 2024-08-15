/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hamlmnbexmiwriiwkebt.supabase.co",
      },
    ],
  },
}

export default nextConfig
