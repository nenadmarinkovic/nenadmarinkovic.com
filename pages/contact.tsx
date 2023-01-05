import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import { Introduction } from "../styles/components/introduction";
import { HeightContent } from "../styles/pages/contact";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Qr from "../components/Qr";
import Footer from "../components/Footer";

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
              You can contact me through the form or at:
              nenadmarinkovic@protonmail.com
            </Introduction>

            {theme === "dark" ? (
              <Qr image="/qr/contact-black.svg" />
            ) : (
              <Qr image="/qr/contact-white.svg" />
            )}
          </Flex>
          <HeightContent />
        </Container>
        <Footer spotifyData={spotifyData} />
      </ThemeLayout>
    </>
  );
};

export default ContactPage;
