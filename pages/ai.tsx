import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";
import { SpotifyType, ThemeType } from "../lib/types";
import { website } from "../lib/website";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import { Introduction } from "../styles/components/introduction";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { MainSection } from "../styles/components/layout";
import Auth from "../components/Auth";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

type PropTypes = SpotifyType & ThemeType;

const ContactPage: NextPage<PropTypes> = ({
  spotifyData,
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Nenad Marinković | Personal assistant</title>
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
            <Banner name="Personal assistant" />
            <Flex align="top" justify="space-between">
              <Introduction>
                Built with Firebase and ChatGPT, Personal assistant is my daily helper in
                learning, coding, and stying focused.
              </Introduction>
            </Flex>

            <div>
              <Auth />
              <AddTodo />
              <TodoList />
            </div>
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

  const server = website.live;

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
