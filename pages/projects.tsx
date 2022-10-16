import type { NextPage } from "next";
import { useTheme } from "../hooks/useTheme";
import Head from "next/head";
import fs from "fs";
import { ThemeLayout } from "../styles/components/layout";
import matter from "gray-matter";
import path from "path";
import Header from "../components/Header";
import { postFilePaths, POSTS_PATH } from "../utils/mdx";
import Footer from "../components/Footer";
import {
  PostsWrap,
  Post,
  Title,
  Date,
  Description,
} from "../styles/pages/blog";
import Link from "next/link";

import Banner from "../components/Banner";
import { Container } from "../styles/components/layout";

const ProjectsPage: NextPage = ({
  spotifyData,
  posts,
  theme,
  toggleTheme,
}: any) => {
  const [componentMounted] = useTheme();

  if (!componentMounted) {
    return <div />;
  }
  return (
    <>
      <Head>
        <title>Nenad Marinković | Projects</title>
        <meta name="description" content="Web development and design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeLayout>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Container>
          <Banner
            name="Projects"
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

export default ProjectsPage;
