import type { NextPage } from "next";
import { useState } from "react";
import { ThemeLayout, Container } from "../styles/components/layout";
import { Introduction } from "../styles/components/introduction";
import { Cards } from "../styles/components/card";
import { ThemeType } from "../lib/types";
import Section from "../components/Section";
import Panel from "../components/Panel";
import Card from "../components/Card";
import { MainSection } from "../styles/components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import SelectedProjects from "../components/SelectedProjects";
import { NextSeo } from "next-seo";

type PropTypes = ThemeType;

const Homepage: NextPage<PropTypes> = ({ theme, toggleTheme }: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <NextSeo
        title="Home | Nenad Marinković"
        canonical="https://nenadmarinkovic.com"
        openGraph={{
          url: "https://nenadmarinkovic.com",
          title: "Home | Nenad Marinković",
        }}
      />
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <ThemeLayout openMenu={openMenu}>
        <MainSection>
          <Container>
            <Banner name="Nenad" surname="Marinković" withWidth={true} />
            <Introduction>
              Front-end developer at
              <a
                className="a-link"
                href="https://dccs.eu"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                DCCS IT Business Solutions{" "}
              </a>{" "}
              in Vienna, Austria. Working mainly with JavaScript on designing
              and developing websites, web interfaces, and APIs.
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
                title="Cutting-edge web development"
                description="From marketing websites and content-management systems to web applications and dashboards. Developed and tested with confidence for engagement and scale."
                boxColor="blue"
                boxTitle="Development"
                boxText1="Craft the look and functionality of the website or application."
                boxText2="Ensure that it runs on all screens and without a single error."
                boxText3="Test it and make it available for shipping."
                boxItemIcon="/icons/check.svg"
                reversed={true}
              />
              <Card
                title="From initial idea to global deployment"
                description="With continuous monitoring and maintenance, and regular updates to your website's content and features, you'll keep your audience engaged and coming back for more."
                boxColor="green"
                boxTitle="Deployment"
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
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
};

export default Homepage;
