/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

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

  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: securityHeaders,
  //     },
  //   ];
  // },

  async headers() {
    return [
      {
        source: "/fonts/CeraPro-Regular.woff2",
        source: "/fonts/CeraPro-Black.woff2",
        source: "/fonts/CeraPro-Bold.woff2",

        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

// const ContentSecurityPolicy = `
//     default-src 'self';
//     script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com;
//     child-src *.youtube.com *.google.com *.twitter.com;
//     style-src 'self' 'unsafe-inline' *.googleapis.com;
//     img-src * blob: data:;
//     media-src 'none';
//     connect-src *;
//     font-src 'self';
// `;

// const securityHeaders = [
//   {
//     key: "Content-Security-Policy",
//     value: ContentSecurityPolicy.replace(/\n/g, ""),
//   },

//   {
//     key: "Referrer-Policy",
//     value: "origin-when-cross-origin",
//   },

//   {
//     key: "X-Frame-Options",
//     value: "DENY",
//   },

//   {
//     key: "X-Content-Type-Options",
//     value: "nosniff",
//   },

//   {
//     key: "X-DNS-Prefetch-Control",
//     value: "on",
//   },

//   {
//     key: "Strict-Transport-Security",
//     value: "max-age=31536000; includeSubDomains; preload",
//   },

//   {
//     key: "Permissions-Policy",
//     value: "camera=(), microphone=(), geolocation=()",
//   },
// ];
