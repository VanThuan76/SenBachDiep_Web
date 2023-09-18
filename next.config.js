/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["vjgr.com.vn", "photos.google.com"],
    path: '/_next/image',
  },
  i18n,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
}

module.exports = nextConfig
