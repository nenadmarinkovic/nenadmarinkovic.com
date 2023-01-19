import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import { Introduction } from "../styles/components/introduction";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ContactForm from "../components/Form";

const ContactPage: NextPage = ({ spotifyData, theme, toggleTheme }: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Head>
        <title>Nenad Marinković | Contact</title>
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
          <Banner name="Contact" />
          <Flex align="top" justify="space-between">
            <Introduction>
              I write mostly about web development and tech. Use the search
              below to filter by title. You can contact me through the form or
              at <a className="a-link">nenadmarinkovic@protonmail.com</a> 
            </Introduction>
          </Flex>
       <ContactForm/>
        </Container>
        <Footer spotifyData={spotifyData} />
      </ThemeLayout>
    </>
  );
};

export default ContactPage;
