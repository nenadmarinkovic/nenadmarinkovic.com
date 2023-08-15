import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { PostType, SpotifyType, ThemeType } from "../lib/types";
import { website } from "../lib/website";
import type { NextPage } from "next";
import { postFilePaths, PROJECTS_PATH } from "../utils/mdx-projects";
import { useState } from "react";
import { Introduction } from "../styles/components/introduction";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { MainSection } from "../styles/components/layout";
import Image from "next/image";
import Link from "next/link";

type PropTypes = SpotifyType & PostType & ThemeType;

const ProjectsPage: NextPage<PropTypes> = ({
  spotifyData,
  posts,
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Nenad Marinković | Projects</title>
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
            <Banner name="About" />
            <Flex align="top" justify="space-between">
              <Introduction>
                An overview of personal web projects, including technical
                details and insights. Please note that these are ongoing
                projects and may contain errors due to limited available time
                for development. Please note that these are ongoing projects and
                may contain errors due to limited available time for
                development.
              </Introduction>
              <Image
                className="personal-photo"
                src={"/Social.JPG"}
                height={250}
                width={250}
                alt="Personal photo"
              />
            </Flex>
            <div className="about-paragraph">
              <p>
                Dash Directory is a platform for task and event management, as
                well as bookmark organization. With its intuitive UI, it
                simplifies self-management and enhances productivity. Dash
                Directory empowers users to stay organized and focused on their
                goals. In development mode.
              </p>
              <p>
                Dash Directory is a platform for task and event management, as
                well as bookmark organization. With its intuitive UI, it
                simplifies self-management{" "}
                <a className="a-link" href="https://github.com/nenadmarinkovic">
                  open-source programming
                </a>{" "}
                and enhances productivity. Dash Directory empowers users to stay
                organized and focused on their goals. In development mode.
              </p>
              <p>
                Dash Directory is a platform for task and event management, as
                well as bookmark organization. With its intuitive UI, it
                simplifies self-management and enhances productivity. Dash
                Directory empowers users{" "}
                <Link className="a-link" href="/dir/photography">
                  photography
                </Link>{" "}
                to stay organized and focused on their goals{" "}
                <Link className="a-link" href="/dir/reading">
                  reading-list
                </Link>
                . In development mode.
              </p>
              <p>
                Dash Directory is a platform for task and event management, as
                well as bookmark organization. With its intuitive UI, it
                simplifies self-management and enhances productivity. Dash
                Directory empowers users to stay organized and focused on their
                goals. In development mode.
              </p>
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

  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts, spotifyData }, revalidate: 10 };
}

export default ProjectsPage;
