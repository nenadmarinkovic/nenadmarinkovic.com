import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { useState } from "react";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import { Introduction } from "../styles/components/introduction";
import { postFilePaths, POSTS_PATH } from "../utils/mdx-posts";
import Qr from "../components/Qr";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";

import {
  PostsWrap,
  Post,
  Title,
  DateWrap,
  Date,
  Description,
} from "../styles/pages/dir";

const DirPage: NextPage = ({ posts, spotifyData, theme, toggleTheme }: any) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Nenad Marinković | Directory</title>
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
          <Banner name="Directory" />
          <Flex align="top" justify="space-between">
            <Introduction>
              Personal web directory for notes, bookmarks, photos, audio, video,
              books, tools and technologies. Categories, filters. German
              dictionary with examples. Regulated complexity.
            </Introduction>
            {theme === "dark" ? (
              <Qr image="/qr/directory-black.svg" />
            ) : (
              <Qr image="/qr/directory-white.svg" />
            )}
          </Flex>
          <PostsWrap>
            {posts.map((post: any) => (
              <Post key={post.filePath}>
                <Link
                  as={`/dir/${post.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/dir/[slug]`}
                >
                  <Title>{post.data.title}</Title>
                </Link>
                <DateWrap>
                  Updated: <Date>{post.data.date}</Date>
                </DateWrap>
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
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}

export default DirPage;
