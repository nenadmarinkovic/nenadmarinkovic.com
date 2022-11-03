import type { NextPage } from "next";
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
  return (
    <>
      <Head>
        <title>Nenad Marinković | Projects</title>
      </Head>
      <ThemeLayout>
        <Header toggleTheme={toggleTheme} theme={theme} />
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
                  as={`/notes/${post.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/notes/[slug]`}>
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
