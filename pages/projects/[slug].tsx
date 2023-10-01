import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { useState } from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
  SourceType,
  FrontmatterType,
  ThemeType,
  ParamType,
} from "../../lib/types";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Header from "../../components/Header";
import { MainSection, ThemeLayout } from "../../styles/components/layout";
import { postFilePaths, PROJECTS_PATH } from "../../utils/mdx-projects";
import { Container } from "../../styles/components/layout";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { Introduction } from "../../styles/components/introduction";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { Date } from "../../styles/pages/common";

type PropTypes = SourceType & FrontmatterType & ThemeType;

const components = {
  Head,
};

const ProjectsPage: NextPage<PropTypes> = ({
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
        canonical="https://nenadmarinkovic.com/projects"
        openGraph={{
          url: "https://nenadmarinkovic.com/projects",
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
            <span>Website:</span>
            <Date>
              <a
                className="a-link"
                target="_blank"
                rel="noreferrer"
                href={`https://${frontMatter.link}`}
              >
                {frontMatter.link}
              </a>
            </Date>
            <Introduction className="full-width with-margins">
              {frontMatter.description}
            </Introduction>
            <main>
              <MDXRemote
                compiledSource={""}
                scope={undefined}
                frontmatter={undefined}
                {...source}
                components={components}
              />
            </main>
          </Container>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
};

export const getStaticProps = async ({ params }: ParamType) => {
  const postFilePath = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
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

export default ProjectsPage;
