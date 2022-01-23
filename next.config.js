/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'flagcdn.com',
      'upload.wikimedia.org'
    ],
  },

}

module.exports = nextConfig
