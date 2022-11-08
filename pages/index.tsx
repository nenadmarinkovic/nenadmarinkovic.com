import Head from "next/head";
import type { NextPage } from "next";
import { ThemeLayout } from "../styles/components/layout";
import { Container } from "../styles/components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { Introduction } from "../styles/components/introduction";
import Card from "../components/Card";
import { Cards } from "../styles/components/card";
import Tag from "../components/Tag";
import Panel from "../components/Panel";
import Section from "../components/Section"
import { useState } from "react";

const Homepage: NextPage = ({ spotifyData, theme, toggleTheme }: any) => {
  const [company] = useState("https://dccs.at");

  return (
    <>
      <Head>
        <title>Nenad Marinković | Home</title>
      </Head>
      <ThemeLayout>
        <Header toggleTheme={toggleTheme} theme={theme} />

        <Container>
          <Banner name="Nenad" surname="Marinković" />
          <Introduction>
            Software developer at
            <a
              className="a-link"
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              DCCS IT Business Solutions{" "}
            </a>{" "}
            in Vienna, Austria. Working mainly with Javascript ( React, Vue,
            Node) on designing and developing websites, web interafaces, and APIs.
          </Introduction>
          <Section title="More on what I do"/>
          <Cards>
            <Card
              title="Transforming ideas into amazing digital products"
              description="The design of a project is the backbone to which all other pieces are dependent. Sometimes, getting another pair of eyes on a project can spark creativity. "
              reversed={false}
              boxColor="orange"
              boxTitle="Design"
              boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
            <Card
              title="Coding the best possible solution"
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
          </Cards>
          <Section title="Technologies I use"/>
          <Tag color="green" text="Node.js" />
          <Tag color="blue" text="Typescript" />
          <Tag color="orange" text="Firebase" />
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
