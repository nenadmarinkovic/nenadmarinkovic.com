import { PostType, SpotifyType, ThemeType } from "../lib/types";
import { website } from "../lib/website";
import type { NextPage } from "next";
import { useState } from "react";
import { Introduction } from "../styles/components/introduction";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { MainSection } from "../styles/components/layout";
import Photo from "../components/Photo";
import { photos } from "../lib/photography-text";

type PropTypes = SpotifyType & PostType & ThemeType;

const PhotographyPage: NextPage<PropTypes> = ({
  spotifyData,
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Nenad Marinković | Photography</title>
        <meta
          name="description"
          content="Experienced front-end developer specializing in creating fast and responsive websites. Proficient in all modern web development tools. Let's bring your web projects to life!"
        />
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
            <Banner name="Photography" />
            <Flex align="top" justify="space-between">
              <Introduction>
                I enjoy using photography to capture memories and share moments
                from my travels, allowing others to see the world through my
                perspective. All these photos were captured with the Sony RX100
                V, a compact camera that’s perfect for shooting on the go.
              </Introduction>
            </Flex>
            <div className="about-paragraph">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`${index > 0 && "photo-container"} `}
                >
                  <Photo
                    id={photo.id}
                    alt={`Image - ${photo.title}`}
                    title={photo.title}
                    text={photo.text}
                  />
                </div>
              ))}
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

  return { props: { spotifyData }, revalidate: 10 };
}

export default PhotographyPage;
