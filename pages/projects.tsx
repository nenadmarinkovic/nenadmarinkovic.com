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
                An overview of personal web projects (unrelated to the company
                I&apos;m working at), including technical details and insights.
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
                      <TagWrap>
                        <Tag color="black" text="Next.js" />
                        <Tag color="green" text="Node.js" />
                        <Tag color="blue" text="Typescript" />
                        <Tag color="orange" text="Firebase" />
                      </TagWrap>
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

export async function getStaticProps({ text }: any) {
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

  let resp = {};

  try {
    const respo = await fetch("https://api-free.deepl.com/v2/translate", {
      body: `text=${text}&target_lang=DE`,
      headers: {
        Authorization: "DeepL-Auth-Key 9357b1ac-5d82-49fb-80d6-73e26fb6d04d:fx",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    resp = await respo.json();
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
      resp,
    };
  });

  return { props: { posts, spotifyData, resp }, revalidate: 10 };
}

export default ProjectsPage;
