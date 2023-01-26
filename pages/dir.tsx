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
import { MainSection } from "../styles/components/layout";
import { motion, AnimatePresence, Variants, delay } from "framer-motion";

const itemsVariants: Variants = {
  enter: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.3,
      duration: 0.3,
      delay: 0.3,
      delayChildren: 0.5,
    },
  },
  exit: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.3,
      duration: 0.3,
    },
  },
};

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
        <MainSection>
          <Container>
            <Banner name="Directory" />
            <Flex align="top" justify="space-between">
              <Introduction>
                Personal web directory for notes, bookmarks, photos, audio,
                video, books, tools and technologies. All content is{" "}
                <a className="a-link">open-source</a> and free to distribute and
                use.
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
            <AnimatePresence mode="wait">
              <motion.div
                variants={itemsVariants}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <PostsWrap>
                  {filteredPosts.map((post: any, index: any) => (
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
                    </motion.div>
                  ))}
                </PostsWrap>
              </motion.div>
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
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts, spotifyData }, revalidate: 10 };
}

export default DirectoryPage;
