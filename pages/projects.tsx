import fs from "fs";
import matter from "gray-matter";
import path from "path";
import {
  PostsWrap,
  Post,
  Title,
  DateWrap,
  Date,
  Description,
} from "../styles/pages/dir";
import type { NextPage } from "next";
import { postFilePaths, PROJECTS_PATH } from "../utils/mdx-projects";
import { useState } from "react";
import { Introduction } from "../styles/components/introduction";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import Head from "next/head";
import Header from "../components/Header";
import Tag from "../components/Tag";
import Banner from "../components/Banner";
import Link from "next/link";
import Qr from "../components/Qr";
import Footer from "../components/Footer";

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
        <Container>
          <Banner name="Projects" />
          <Flex align="top" justify="space-between">
            <Introduction>
              I write mostly about web development and tech. Use the search
              below to filter by title.
            </Introduction>
            {theme === "dark" ? (
              <Qr image="/qr/projects-black.svg" />
            ) : (
              <Qr image="/qr/projects-white.svg" />
            )}
          </Flex>
          <PostsWrap>
            {posts.map((post: any) => (
              <Post key={post.filePath}>
                <Link
                  as={`/projects/${post.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/projects/[slug]`}
                >
                  <Title>{post.data.title}</Title>
                </Link>
                <DateWrap>
                  Updated: <Date>{post.data.date}</Date>
                </DateWrap>
                <Description>{post.data.description}</Description>
                <Flex>
                  <Tag color="black" text="Next.js" />
                  <Tag color="green" text="Node.js" />
                  <Tag color="blue" text="Typescript" />
                  <Tag color="orange" text="Firebase" />
                </Flex>
              </Post>
            ))}
          </PostsWrap>
        </Container>
        <Footer spotifyData={spotifyData} />
      </ThemeLayout>
    </>
  );
};

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}

export default ProjectsPage;
