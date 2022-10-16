import type { NextPage } from "next";
import Head from "next/head";
import { ThemeLayout } from "../styles/components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomepageContainer from "../containers/homepage-container";

const Homepage: NextPage = ({ spotifyData, theme, toggleTheme }: any) => {
  return (
    <>
      <Head>
        <title>Nenad Marinković | Home</title>
        <meta name="description" content="Web development and design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeLayout>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <HomepageContainer />
        <Footer spotifyData={spotifyData} />
      </ThemeLayout>
    </>
  );
};

export async function getStaticProps() {
  let spotifyData = [];
  let error = "";

  const server = "http://localhost:3000/api/playing";

  try {
    const res = await fetch(server, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });

    spotifyData = await res.json();
  } catch (e: any) {
    error = e.toString();
  }

  return {
    props: { spotifyData },
    revalidate: 10,
  };
}

export default Homepage;
