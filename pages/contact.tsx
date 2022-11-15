import Head from "next/head";
import type { NextPage } from "next";
import { ThemeLayout } from "../styles/components/layout";
import { Introduction } from "../styles/components/introduction";
import Footer from "../components/Footer";
import { Container } from "../styles/components/layout";
import Header from "../components/Header";
import Banner from "../components/Banner";

const ContactPage: NextPage = ({ spotifyData, theme, toggleTheme }: any) => {
  return (
    <>
      <Head>
        <title>Nenad Marinković | Contact</title>
      </Head>
      <ThemeLayout>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Container>
          <Banner name="Contact" />
          <Introduction>
            You can contact me through the form or at:
            nenadmarinkovic@protonmail.com
          </Introduction>
        </Container>
        <Footer spotifyData={spotifyData} />
      </ThemeLayout>
    </>
  );
};

export default ContactPage;
