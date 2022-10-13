import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { ThemeLayout } from "../styles/components/layout";
import fs from "fs";
import { lightTheme, darkTheme } from "../styles/theme";
import matter from "gray-matter";
import path from "path";
import Header from "../components/Header";
import { postFilePaths, POSTS_PATH } from "../utils/mdx";
import Footer from "../components/Footer";
import BlogContainer from "../containers/blog-container";
import { GlobalStyle } from "../styles/global";

const BlogPage: NextPage = ({ posts }: any, { spotifyData }: any) => {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <Head>
        <title>Nenad Marinković | Blog</title>
        <meta name="description" content="Web development and design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={themeMode}>
        <ThemeLayout>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} theme={theme} />
          <BlogContainer posts={posts} />
          <Footer spotifyData={spotifyData} />
        </ThemeLayout>
      </ThemeProvider>
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

export default BlogPage;
