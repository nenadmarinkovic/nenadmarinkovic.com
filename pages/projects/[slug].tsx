import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Header from "../../components/Header";
import { useState } from "react";
import { GlobalStyle } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ThemeLayout } from "../../styles/components/layout";
import { postFilePaths, PROJECTS_PATH } from "../../utils/mdx-projects";
import { Container } from "../../styles/components/layout";
import { lightTheme, darkTheme } from "../../styles/theme";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { Introduction } from "../../styles/components/introduction";

const components = {
  Head,
};

export default function PostPage({ source, frontMatter, spotifyData }: any) {

  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [openMenu, setOpenMenu] = useState(false);

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <Head>
        <title> {frontMatter.title} </title>
        <meta name="description" content="Web development and design." />
        <meta content={theme === 'dark' ? '#000' : '#fff'} name="theme-color" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Header
          toggleTheme={toggleTheme}
          theme={theme}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />

        <ThemeLayout openMenu={openMenu}>
          <Container>
          <Banner name={frontMatter.title} />
            <Introduction className="full-width">{frontMatter.description}</Introduction>
            <main>
              <MDXRemote {...source} components={components} />
            </main>
          </Container>
          <Footer spotifyData={spotifyData} />
        </ThemeLayout>
      </ThemeProvider>
    </>
  );
}

export const getStaticProps = async ({ params }: any) => {

  const postFilePath = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
