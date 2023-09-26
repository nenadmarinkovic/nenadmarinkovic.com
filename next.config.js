/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['https://nenadmarinkovic.com'],
  },

  compiler: {
    styledComponents: true,
  },

  experimental: {
    legacyBrowsers: false,
  },

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}