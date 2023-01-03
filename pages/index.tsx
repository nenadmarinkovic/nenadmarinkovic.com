import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import { ThemeLayout } from "../styles/components/layout";
import { Container } from "../styles/components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { Introduction } from "../styles/components/introduction";
import Card from "../components/Card";
import { Cards } from "../styles/components/card";
// import Tag from "../components/Tag";
import Panel from "../components/Panel";
import Section from "../components/Section";
import { Theme, Spotify, MenuType } from "../lib/types";

type Props = Theme & Spotify & MenuType;

const Homepage: NextPage<Props> = ({
  spotifyData,
  theme,
  toggleTheme,
}: Props) => {
  const [company] = useState("https://dccs.at");
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Nenad Marinković | Home</title>
        <meta content={theme === "dark" ? "#000" : "#fff"} name="theme-color" />
      </Head>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <ThemeLayout openMenu={openMenu}>
        <Container>
          <Banner name="Nenad" surname="Marinković" />
          <Introduction>
            Software developer at
            <a className="a-link" href="https://google.com" target="_blank" rel="noreferrer"> DCCS IT Business Solutions </a> in Vienna, Austria. Working mainly with JavaScript
            (React, Vue, Node) on designing and developing websites, web interfaces, and APIs.
          </Introduction>
          <Section title="Services I offer" />
          <Cards>
            <Card
              title="Transforming ideas into amazing digital products"
              description="Bring digital product to life through carefully considered design and technical know-how, using fast, secure, and reliable tools and technologies."
              reversed={false}
              boxColor="orange"
              boxTitle="Design"
              boxText1="The design of a project is the backbone. 1"
              boxText2="The design of a project is the backbone. 2"
              boxText3="The design of a project is the backbone. 3"
              boxItemIcon="/icons/check.svg"
            />
            <Card
              title="Cutting-edge web solutions"
              description="From marketing websites and content-management systems to web applications and dashboards. Developed with confidence for engagement and scale."
              reversed={true}
              boxColor="blue"
              boxTitle="Development"
              boxText1="The design of a project is the backbone."
              boxText2="The design of a project is the backbone."
              boxText3="The design of a project is the backbone."
              boxItemIcon="/icons/check.svg"
            />
            <Card
              title="Performance monitoring and optimization"
              description="Constant improvements in terms of speed, responsiveness, SEO, and accessibility helps your website run smootly and ensures positive user experience."
              reversed={false}
              boxColor="green"
              boxTitle="Maintenance"
              boxText1="The design of a project is the backbone."
              boxText2="The design of a project is the backbone."
              boxText3="The design of a project is the backbone."
              boxItemIcon="/icons/check.svg"
            />
          </Cards>
          <Section title="Latest personal projects" />

          {/* <Tag color="green" text="Node.js" />
          <Tag color="blue" text="Typescript" />
          <Tag color="orange" text="Firebase" />
          <Tag color="black" text="Next.js" /> */}
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
