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
import TagButton from "../components/TagButton";
import { TagButtonsWrap } from "../styles/components/tag";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";

import {
  PostsWrap,
  Post,
  Title,
  AdditionalInfo,
  Date,
  Description,
} from "../styles/pages/common";

const DirectoryPage: NextPage = ({
  posts,
  spotifyData,
  theme,
  toggleTheme,
}: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  const filterCategory = (category: string) => {
    const filteredPosts = posts.filter(
      (post: any) => post.data.category === category
    );

    setFilteredPosts(filteredPosts);
  };

  const uniqueCategoriesOnLoad = (posts: any) => {
    const categories = posts
      .map((post: any) => post.data.category)
      .filter((item: any, index: any, arr: any) => arr.indexOf(item) === index);

    setUniqueCategories(categories);
  };

  useEffect(() => {
    uniqueCategoriesOnLoad(posts);
  }, [posts]);

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
    
          </Flex>
          <TagButtonsWrap>
            {uniqueCategories.map((category: any, index: any) => (
              <TagButton
                key={index}
                onClick={() => filterCategory(category)}
                color="default"
                text={category}
              />
            ))}
          </TagButtonsWrap>
          <PostsWrap>
            {filteredPosts.map((post: any) => (
              <Post key={post.filePath}>
                <Link
                  as={`/dir/${post.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/dir/[slug]`}
                >
                  <Title>{post.data.title}</Title>
                </Link>
                <AdditionalInfo>
                  Updated:
                  <Date>
                    {post.data.date} {post.data.category}
                  </Date>
                </AdditionalInfo>
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

export default DirectoryPage;