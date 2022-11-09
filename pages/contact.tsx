import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type { NextPage } from "next";
import { ThemeLayout } from "../styles/components/layout";
import { Introduction } from "../styles/components/introduction";
import { postFilePaths, POSTS_PATH } from "../utils/mdx-posts";
import Footer from "../components/Footer";
import { Container } from "../styles/components/layout";
import Header from "../components/Header";
import Banner from "../components/Banner";

const ContactPage: NextPage = ({
  spotifyData,
  theme,
  toggleTheme,
}: any) => {
  return (
    <>
      <Head>
        <title>Nenad Marinković | Notes</title>
      </Head>
      <ThemeLayout>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Container>
          <Banner name="Contact" />
          <Introduction>
           You can contact me through the form or at: nenadmarinkovic@protonmail.com
          </Introduction>
         
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

export default ContactPage;
