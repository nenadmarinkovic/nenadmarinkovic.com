import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import { Introduction } from "../styles/components/introduction";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ContactForm from "../components/Form";
import { MainSection } from "../styles/components/layout";

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
        <MainSection>
          <Container>
            <Banner name="Contact" />
            <Flex align="top" justify="space-between">
              <Introduction>
                Feel free to get in touch with me through the form below or by
                sending an email. I would love to hear from you and discuss any
                inquiries, collaborations, or opportunities you may have.
                <br />
                <a
                  href="mailto:nenadmarinkovic@protonmail.com"
                  className="a-link"
                >
                  nenadmarinkovic@protonmail.com
                </a>
              </Introduction>
            </Flex>
            <ContactForm />
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

  const server = "https://nenadmarinkovic.com/api/playing";

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

export default ContactPage;
