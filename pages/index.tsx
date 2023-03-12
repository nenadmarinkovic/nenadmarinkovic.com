import type { NextPage } from "next";
import { useState } from "react";
import { ThemeLayout, Container } from "../styles/components/layout";
import { Introduction } from "../styles/components/introduction";
import { Cards } from "../styles/components/card";
import { Theme, Spotify, MenuType } from "../lib/types";
import Head from "next/head";
import Section from "../components/Section";
import Panel from "../components/Panel";
import Card from "../components/Card";
import { MainSection } from "../styles/components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import SelectedProjects from "../components/SelectedProjects";

type Props = Theme & Spotify & MenuType;

const Homepage: NextPage<Props> = ({
  spotifyData,
  theme,
  toggleTheme,
}: Props) => {
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
        <MainSection>
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
              in Vienna, Austria. Working mainly with JavaScript (React, Vue,
              Node) on designing and developing websites, web interfaces, and
              APIs.
            </Introduction>
            <Section title="Services I offer" />
            <Cards>
              <Card
                title="Transforming ideas into amazing digital products"
                description="Bring digital product to life through carefully considered design and technical know-how, using fast, secure, and reliable tools and technologies."
                boxColor="orange"
                boxTitle="Design"
                boxText1="Define a project strategy, scope, and information architecture."
                boxText2="Specify customer needs and motivation in using the product."
                boxText3="Create effective and compelling web interface."
                boxItemIcon="/icons/check.svg"
                reversed={false}
              />
              <Card
                title="Cutting-edge development and testing"
                description="From marketing websites and content-management systems to web applications and dashboards. Developed and tested with confidence for engagement and scale."
                boxColor="blue"
                boxTitle="Development"
                boxText1="Craft the look and functionality of the website or application."
                boxText2="Ensure that it runs on all screens and without a single error."
                boxText3="Deploy the product and make it available globally."
                boxItemIcon="/icons/check.svg"
                reversed={true}
              />
              <Card
                title="From initial idea to global reach"
                description="With continuous monitoring and maintenance, and regular updates to your website's content and features, you'll keep your audience engaged and coming back for more."
                boxColor="green"
                boxTitle="Release"
                boxText1="Deployment to a production environment."
                boxText2="Setting up analytics to track performance and user behavior."
                boxText3="Continuous monitoring and maintainence."
                boxItemIcon="/icons/check.svg"
                reversed={false}
              />
            </Cards>
            <Section title="Personal projects" />
            <SelectedProjects />
            <Panel />
          </Container>
        </MainSection>
        <Footer spotifyData={spotifyData} theme={theme} />
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
