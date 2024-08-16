/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
