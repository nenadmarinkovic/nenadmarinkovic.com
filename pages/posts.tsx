import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { ThemeLayout } from "../styles/components/layout";
import fs from "fs";
import { lightTheme, darkTheme } from "../styles/theme";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { Container, CustomHeight } from "../styles/components/layout";
import Header from "../components/Header";

import { postFilePaths, POSTS_PATH } from "../utils/mdx";

export default function Posts({ posts }: any) {
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
            <CustomHeight>
              {posts.map((post: any) => (
                <span key={post.filePath}>
                  <Link
                    as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                    href={`/posts/[slug]`}
                  >
                    <a>{post.data.title}</a>
                  </Link>
                </span>
              ))}
            </CustomHeight>
          </Container>
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
