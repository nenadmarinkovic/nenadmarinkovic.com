import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import fs from "fs";
import { ThemeLayout } from "../styles/components/layout";
import matter from "gray-matter";
import path from "path";
import Header from "../components/Header";
import { postFilePaths, PROJECTS_PATH } from "../utils/mdx-projects";
import Footer from "../components/Footer";
import {
  PostsWrap,
  Post,
  Title,
  Date,
  Description,
} from "../styles/pages/notes";
import Link from "next/link";
import { Introduction } from "../styles/components/introduction";
import Banner from "../components/Banner";
import { Container } from "../styles/components/layout";

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
          <Introduction>
            I write mostly about web development and tech. Use the search below
            to filter by title.
          </Introduction>
          <PostsWrap>
            {posts.map((post: any) => (
              <Post key={post.filePath}>
                <Link
                  as={`/projects/${post.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/projects/[slug]`}
                >
                  <Title>{post.data.title}</Title>
                </Link>
                <Date>Updated: {post.data.date}</Date>
                <Description>{post.data.description}</Description>
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
