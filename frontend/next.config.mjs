/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:lang',
        destination: '/?lang=:lang',
      },
    ]
  },
}

export default nextConfig;
