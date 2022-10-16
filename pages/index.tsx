import type { NextPage } from "next";
import Head from "next/head";
import { ThemeLayout } from "../styles/components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "../styles/components/layout";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Tag from "../components/Tag";
import Panel from "../components/Panel";

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
        <Container>
          <Banner
            name="Nenad"
            surname="Marinković"
            text="
                Software developer at Company in Vienna,
                Austria. Working mainly with Javascript ( React, Vue, Node) on
                designing and developing web interafaces and APIs."
          />
          <Card
            title="Starting with the purpose"
            description="The design of a project is the backbone to which all other pieces are dependent. Sometimes, getting another pair of eyes on a project can spark creativity. "
            reversed={false}
            boxColor="orange"
            boxTitle="Design"
            boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <Card
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            reversed={true}
            boxColor="blue"
            boxTitle="Development"
            boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <Card
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            reversed={false}
            boxColor="green"
            boxTitle="Maintenance"
            boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <Tag color="green" text="Node.js" />
          <Tag color="blue" text="Typescript" />
          <Tag color="yellow" text="Firebase" />
          <Tag color="black" text="Next.js" />
          <Panel />
        </Container>
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
