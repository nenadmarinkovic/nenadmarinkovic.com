import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type { NextPage } from "next";
import { ThemeLayout } from "../styles/components/layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdx";
import Footer from "../components/Footer";
import { Container } from "../styles/components/layout";
import Header from "../components/Header";
import Banner from "../components/Banner";
import {
  PostsWrap,
  Post,
  Title,
  Date,
  Description,
} from "../styles/pages/blog";

const BlogPage: NextPage = ({
  posts,
  spotifyData,
  theme,
  toggleTheme,
}: any) => {
  return (
    <>
      <Head>
        <title>Nenad Marinković | Blog</title>
      </Head>
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
