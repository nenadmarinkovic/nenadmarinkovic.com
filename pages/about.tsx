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
                Hi and thanks for being here! <br />
                I&apos;m Nenad, a front-end developer living and working in
                Vienna, Austria. I enjoy building nice and elegant web
                interfaces, and fast websites and applications using modern
                tools and technologies like React and Vue.
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
                Most recently, I’ve worked at the DCCS software company in
                Vienna, Austria on a web application for measuring electricity
                consumption for one of the leading companies operating in the
                DACH region. I gained huge experience in building flexible
                front-end components in Vue using SCRUM approach for building
                scalable software solutions.
              </p>
              <p>
                Previously, I’ve worked at different web agencies buidling
                e-commerce websites, content-menaging systems, and marketing
                websites where I gained invaluable experience working with
                designers and clients in both my homecountry of Serbia and in
                Austria.
              </p>

              <p>
                Besides professional work, I like contributing to{" "}
                <a className="a-link" href="https://github.com/nenadmarinkovic">
                  open-source software
                </a>{" "}
                whenever I can. I like buidling my own{" "}
                <Link className="a-link" href="/projects">
                  projects
                </Link>{" "}
                , and you can see some of them here. Mostly, the are focused on
                developers and designers, and I like the freedom to experiment
                with different technologies while building them.
              </p>
              <p>
                {" "}
                More then 10 years ago I studied sociology and political
                sciences, where I learned... Even today, I like reading
                interesting{" "}
                <Link className="a-link" href="/dir/reading">
                  books
                </Link>{" "}
                about social topics, technology, and our fast changing world.
              </p>
              <p>
                Besides work, I enjoy living in Vienna, travelling when I have
                free time and taking{" "}
                <Link className="a-link" href="/dir/photography">
                  pictures of cool places
                </Link>{" "}
                and reading and surfing the web looking for{" "}
                <Link className="a-link" href="/dir/photography">
                  interesting stuff
                </Link>{" "}
                and learning German and Go. If you are around, want to hung out,
                drop me a line, ou can find me in the beautiful 2nd district in
                Vienna and we could meet.
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
