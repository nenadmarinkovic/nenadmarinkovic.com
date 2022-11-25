import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import { ThemeLayout } from "../styles/components/layout";
import { Introduction } from "../styles/components/introduction";
import Footer from "../components/Footer";
import { Container } from "../styles/components/layout";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { HeightContent } from "../styles/pages/contact";

const ContactPage: NextPage = ({ spotifyData, theme, toggleTheme }: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Head>
        <title>Nenad Marinković | Contact</title>
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
          <Introduction>
            You can contact me through the form or at:
            nenadmarinkovic@protonmail.com
          </Introduction>
          <HeightContent />
        </Container>
        <Footer spotifyData={spotifyData} />
      </ThemeLayout>
    </>
  );
};

export default ContactPage;
