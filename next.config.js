/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

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
}

//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: securityHeaders,
//       },

//       {
//         source: "/fonts/CeraPro-Regular.woff2",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "public, max-age=31536000, immutable",
//           },
//         ],
//       },

//       {
//         source: "/fonts/CeraPro-Bold.woff2",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "public, max-age=31536000, immutable",
//           },
//         ],
//       },

//       {
//         source: "/fonts/CeraPro-Black.woff2",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "public, max-age=31536000, immutable",
//           },
//         ],
//       },
//     ];
//   },
// };

// const securityHeaders = [
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
