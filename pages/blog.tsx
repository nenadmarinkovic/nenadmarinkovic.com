import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { ThemeLayout } from "../styles/components/layout";
import { PostsWrap, Post, Title, Date, Description } from "../styles/pages/blog";
import fs from "fs";
import { lightTheme, darkTheme } from "../styles/theme";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Banner from "../components/Banner";
import { Container } from "../styles/components/layout";
import Header from "../components/Header";
import { postFilePaths, POSTS_PATH } from "../utils/mdx";
import Footer from "../components/Footer";

export default function Posts({ posts }: any, { spotifyData }: any) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <Head>
        <title>Nenad Marinković | Home</title>
        <meta name="description" content="Web development and design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={themeMode}>
        <ThemeLayout>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Container>
            <Banner
              name="Blog"
              text="
              I write mostly about web development and tech. In total, I've written 51 articles on my blog. Use the search below to filter by title."
            />

            <PostsWrap>
              {posts.map((post: any) => (
                <Post key={post.filePath}>
                  <Link
                    as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
                    href={`/blog/[slug]`}
                  >
                    <Title>{post.data.title}</Title>
                  </Link>
                  <Date>{post.data.date}</Date>
                  <Description>{post.data.description}</Description>
                </Post>
              ))}
            </PostsWrap>
          </Container>
          <Footer spotifyData={spotifyData} />
        </ThemeLayout>
      </ThemeProvider>
    </>
  );
}

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
