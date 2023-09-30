const title = "Nenad Marinković – Web development and design.";
const description =
  "Front-end developer specializing in creating fast and responsive websites and applications. Proficient in all modern web development tools. Let’s bring your web projects to life!";

const SEO = {
  title,
  description,
  canonical: "https://nenadmarinkovic.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://nenadmarinkovic.com",
    title,
    description,
    images: [
      {
        url: "https://nenadmarinkovic.com/photo.jpg",
        alt: title,
        width: 525,
        height: 525,
      },
    ],
  },
};

export default SEO;
