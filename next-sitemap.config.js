/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://nenadmarinkovic.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000,
};
