import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import {
  SourceType,
  SpotifyType,
  FrontmatterType,
  ThemeType,
  ParamType,
} from "../../lib/types";
import { website } from "../../lib/website";
import Header from "../../components/Header";
import { useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import {
  MainSection,
  ThemeLayout,
  MDXContent,
} from "../../styles/components/layout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdx-directory";
import { Container } from "../../styles/components/layout";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { Introduction } from "../../styles/components/introduction";
import { NextPage } from "next";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { Date } from "../../styles/pages/common";

type PropTypes = SourceType & FrontmatterType & SpotifyType & ThemeType;

const components = {
  Head,
};

const DirectoryPage: NextPage<PropTypes> = ({
  source,
  frontMatter,
  spotifyData,
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title> Directory | {frontMatter.title} </title>
        <meta name="description" content={frontMatter.title} />
        <meta content={theme === "dark" ? "#000" : "#fff"} name="theme-color" />
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
            <span>Updated:</span>
            <Date>{frontMatter.date}</Date>
            <Introduction className="full-width with-margins">
              {frontMatter.description}
            </Introduction>
            <MDXContent>
              <MDXRemote
                compiledSource={""}
                scope={undefined}
                frontmatter={undefined}
                {...source}
                components={components}
              />
            </MDXContent>
          </Container>
        </MainSection>
        <Footer spotifyData={spotifyData} theme={theme} />
      </ThemeLayout>
    </>
  );
};

export const getStaticProps = async ({ params }: ParamType) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  let spotifyData = [];
  let error = "";

  const server = website.live;

  try {
    const res = await fetch(server, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });

    spotifyData = await res.json();
  } catch (e: any) {
    error = e.toString();
  }

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight, remarkGfm],
    },
    scope: data,
  });

  return {
    props: {
      spotifyData: spotifyData,
      revalidate: 0,
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

export default DirectoryPage;
