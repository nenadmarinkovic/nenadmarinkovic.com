/**
 * @type {import('next').NextConfig}
 */

const withImages = require("next-images");

module.exports = withImages({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "mdx"],

  images: {
    domains: ["i.scdn.co"],
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
});
