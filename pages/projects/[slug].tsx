import fs from "fs";
import { useState } from "react";
import matter from "gray-matter";
import Head from "next/head";
import Header from "../../components/Header";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { ThemeLayout } from "../../styles/components/layout";
import { postFilePaths, PROJECTS_PATH } from "../../utils/mdx-projects";
import { Container } from "../../styles/components/layout";
import { lightTheme, darkTheme } from "../../styles/theme";

const components = {
  Head,
};

export default function PostPage({ source, frontMatter }: any) {
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={themeMode}>
        <Header
          toggleTheme={toggleTheme}
          theme={theme}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <ThemeLayout openMenu={openMenu}>
          <Container>
            <h1>{frontMatter.title}</h1>
            {frontMatter.description && <p>{frontMatter.description}</p>}
            <main>
              <MDXRemote {...source} components={components} />
            </main>
          </Container>
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
