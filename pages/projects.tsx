import fs from "fs";
import matter from "gray-matter";
import path from "path";
import {
  PostsWrap,
  Post,
  Title,
  AdditionalInfo,
  Description,
} from "../styles/pages/common";
import type { NextPage } from "next";
import { postFilePaths, PROJECTS_PATH } from "../utils/mdx-projects";
import { useState } from "react";
import { Introduction } from "../styles/components/introduction";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import { TagWrap } from "../styles/components/tag";
import Head from "next/head";
import Header from "../components/Header";
import Tag from "../components/Tag";
import Banner from "../components/Banner";
import Link from "next/link";
import Footer from "../components/Footer";
import { MainSection } from "../styles/components/layout";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsPage: NextPage = ({
  spotifyData,
  posts,
  theme,
  toggleTheme,
}: any) => {
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
            <Banner name="Projects" />
            <Flex align="top" justify="space-between">
              <Introduction>
                An overview of personal web projects I currently work on,
                including technical details and insights.
              </Introduction>
            </Flex>
            <AnimatePresence mode="wait">
              <PostsWrap>
                {posts.map((post: any, index: any) => (
                  <motion.div
                    key={post.data.title}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.15,
                      delayChildren: 0.5,
                    }}
                  >
                    <Post key={post.filePath}>
                      <Link
                        as={`/projects/${post.filePath.replace(/\.mdx?$/, "")}`}
                        href={`/projects/[slug]`}
                      >
                        <Title>{post.data.title}</Title>
                      </Link>
                      <AdditionalInfo>
                        <a
                          href={`https://${post.data.link}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {post.data.link}
                        </a>
                      </AdditionalInfo>
                      <Description>{post.data.description}</Description>

                      {/* TODO: Integrate categories into .mdx files */}

                      {index === 0 && (
                        <TagWrap>
                          <Tag color="black" text="Next.js" />
                          <Tag color="orange" text="Firebase" />
                          <Tag color="velvet" text="Styled-components" />
                        </TagWrap>
                      )}

                      {index === 1 && (
                        <TagWrap>
                          <Tag color="black" text="Next.js" />
                          <Tag color="green" text="Headless CMS" />
                          <Tag color="velvet" text="Styled-components" />
                        </TagWrap>
                      )}

                      {index === 2 && (
                        <TagWrap>
                          <Tag color="black" text="Next.js" />
                          <Tag color="blue" text="Typescript" />
                          <Tag color="dark-yellow" text="MDX" />
                          <Tag color="velvet" text="Styled-components" />
                        </TagWrap>
                      )}
                    </Post>
                  </motion.div>
                ))}
              </PostsWrap>
            </AnimatePresence>
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

  const server = "http://localhost:3000/api/playing";

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
