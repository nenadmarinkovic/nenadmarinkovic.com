import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeLayout } from "../styles/components/layout";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Panel from "../components/Panel";
import Footer from "../components/Footer";

const Home: NextPage = ({ data }: any) => {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <Head>
        <title>Nenad Marinković</title>
        <meta name="description" content="Web development and design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={themeMode}>
        <ThemeLayout>
          <Header toggleTheme={toggleTheme} theme={theme} />

          {/* TODO: Change */}

          <Banner
            name="Nenad"
            surname="Marinković"
            text={
              <>
                Software developer at <a href="/">Link to company</a> in Vienna,
                Austria. Working mainly with Javascript ( React, Vue, Node) on
                designing and developing web interafaces and APIs.
              </>
            }
          />
          <Card
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            reversed={false}
            boxColor="pink"
            boxTitle="Design"
            boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <Card
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            reversed={true}
            boxColor="blue"
            boxTitle="Develop"
            boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <Card
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            reversed={false}
            boxColor="green"
            boxTitle="Deploy"
            boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <Panel />

          <Footer data={data} />
        </ThemeLayout>
      </ThemeProvider>
    </>
  );
};

export async function getStaticProps() {
  let data = [];
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

    data = await res.json();
  } catch (e: any) {
    error = e.toString();
  }

  return {
    props: { data },
    revalidate: 10,
  };
}

export default Home;
