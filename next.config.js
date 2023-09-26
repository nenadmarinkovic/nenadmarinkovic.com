/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "mdx"],

  images: {
    domains: ["i.scdn.co"],
    path: "",
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
};
