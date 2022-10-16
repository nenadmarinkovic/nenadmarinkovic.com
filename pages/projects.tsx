import type { NextPage } from "next";
import Head from "next/head";
import fs from "fs";
import { ThemeLayout } from "../styles/components/layout";
import matter from "gray-matter";
import path from "path";
import Header from "../components/Header";
import { postFilePaths, POSTS_PATH } from "../utils/mdx";
import Footer from "../components/Footer";
import ProjectsContainer from "../containers/projects-container";

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
        <meta name="description" content="Web development and design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeLayout>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <ProjectsContainer posts={posts} />
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
