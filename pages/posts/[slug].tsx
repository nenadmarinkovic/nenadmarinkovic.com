import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import path from "path";
import CustomLink from "../../components/CustomLink";
import { postFilePaths, POSTS_PATH } from "../../utils/mdx";
import { Container, CustomHeight } from "../../styles/components/layout";
import { lightTheme, darkTheme } from "../../styles/theme";
import Header from "../../components/Header";
import { ThemeLayout } from "../../styles/components/layout";

const components = {
  a: CustomLink,
  TestComponent: dynamic(() => import("../../components/TestComponent")),
  Head,
};

export default function PostPage({ source, frontMatter }: any) {
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
              <h1>{frontMatter.title}</h1>
              {frontMatter.description && <p>{frontMatter.description}</p>}
            </CustomHeight>
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
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
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
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
