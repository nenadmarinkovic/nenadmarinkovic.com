import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Header from "../../components/Header";
import { useState } from "react";
import { NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MainSection, ThemeLayout } from "../../styles/components/layout";
import { postFilePaths, PROJECTS_PATH } from "../../utils/mdx-projects";
import { Container } from "../../styles/components/layout";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { Introduction } from "../../styles/components/introduction";

const components = {
  Head,
};

const ProjectsPage: NextPage = ({
  source,
  frontMatter,
  spotifyData,
  theme,
  toggleTheme,
}: any) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title> {frontMatter.title} </title>
        <meta name="description" content="Web development and design." />
        <meta content={theme === "dark" ? "#000" : "#fff"} name="theme-color" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      <ThemeLayout openMenu={openMenu}>
        <MainSection>
          <Container>
            <Banner name={frontMatter.title} />
            <Introduction className="full-width">
              {frontMatter.description}
            </Introduction>
            <main>
              <MDXRemote {...source} components={components} />
            </main>
          </Container>
        </MainSection>
        <Footer spotifyData={spotifyData} />
      </ThemeLayout>
    </>
  );
};

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

export default ProjectsPage;
