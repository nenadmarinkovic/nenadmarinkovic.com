import React, { useState, useEffect } from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import { Introduction } from "../styles/components/introduction";
import { postFilePaths, POSTS_PATH } from "../utils/mdx-posts";
import Qr from "../components/Qr";
import Tag from "../components/Tag";
import { TagButton } from "../styles/components/tag";
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
} from "../styles/pages/directory";

const DirPage: NextPage = ({ posts, spotifyData, theme, toggleTheme }: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const filterCategory = (category: string) => {
    const filteredPosts = posts.filter(
      (post: any) => post.data.category === category
    );

    setFilteredPosts(filteredPosts);
  };

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
          <Flex align="center">
            {posts
              .map((post: any) => (
                <TagButton
                  key={post.filePath}
                  onClick={() => filterCategory(post.data.category)}
                >
                  <Tag cursor={true} color="black" text={post.data.category} />
                </TagButton>
              ))
              .filter(
                (item: any, index: any, posts: string | any[]) =>
                  posts.indexOf(item) === index // not working
              )}
          </Flex>
          <PostsWrap>
            {filteredPosts.map((post: any) => (
              <Post key={post.filePath}>
                <Link
                  as={`/directory/${post.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/directory/[slug]`}
                >
                  <Title>{post.data.title}</Title>
                </Link>
                <DateWrap>
                  Updated:{" "}
                  <Date>
                    {post.data.date} {post.data.category}
                  </Date>
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
