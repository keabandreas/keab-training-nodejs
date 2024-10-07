/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:lang(en|sv)',
        destination: '/?lang=:lang',
      },
    ]
  },
}

module.exports = nextConfig
