import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import {
  SourceType,
  FrontmatterType,
  ThemeType,
  ParamType,
} from "../../lib/types";
import { NextSeo } from "next-seo";
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

type PropTypes = SourceType & FrontmatterType & ThemeType;

const components = {
  Head,
};

const DirectoryPage: NextPage<PropTypes> = ({
  source,
  frontMatter,
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <NextSeo
        title={`${frontMatter.title} | Nenad Marinković`}
        canonical="https://nenadmarinkovic.com/dir"
        openGraph={{
          url: "https://nenadmarinkovic.com/dir",
          title: `${frontMatter.title} | Nenad Marinković`,
        }}
      />

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
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
};

export const getStaticProps = async ({ params }: ParamType) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight, remarkGfm],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
    revalidate: 10,
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
