import fs from "fs";
import matter from "gray-matter";
import path from "path";
import {
  PostsWrap,
  Post,
  Title,
  AdditionalInfo,
  Description,
} from "../styles/pages/common";
import { PostType, ThemeType } from "../lib/types";
import type { NextPage } from "next";
import { postFilePaths, PROJECTS_PATH } from "../utils/mdx-projects";
import { useState } from "react";
import { Introduction } from "../styles/components/introduction";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import { TagWrap } from "../styles/components/tag";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Tag from "../components/Tag";
import Banner from "../components/Banner";
import Link from "next/link";
import Footer from "../components/Footer";
import { MainSection } from "../styles/components/layout";
import { motion, AnimatePresence } from "framer-motion";

type PropTypes = PostType & ThemeType;

const ProjectsPage: NextPage<PropTypes> = ({
  posts,
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <NextSeo
        title="Projects | Nenad Marinković"
        canonical="https://nenadmarinkovic.com/projects"
        openGraph={{
          url: "https://nenadmarinkovic.com/projects",
          title: "Projects | Nenad Marinković",
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
            <Banner name="Projects" />
            <Flex align="top" justify="space-between">
              <Introduction>
                An overview of personal web projects, including technical
                details and insights. Please note that these are ongoing
                projects and may contain errors due to limited available time
                for development.
              </Introduction>
            </Flex>
            <AnimatePresence mode="wait">
              <PostsWrap>
                {posts.map((post: PostType, index: number) => (
                  <motion.div
                    key={post.data.title}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.15,
                      delayChildren: 0.5,
                    }}
                  >
                    <Post key={post.filePath}>
                      <Link
                        as={`/projects/${post.filePath.replace(/\.mdx?$/, "")}`}
                        href={`/projects/[slug]`}
                      >
                        <Title>{post.data.title}</Title>
                      </Link>
                      <AdditionalInfo>
                        <a
                          href={`https://${post.data.link}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {post.data.link}
                        </a>
                      </AdditionalInfo>
                      <Description>{post.data.description}</Description>

                      {index === 0 && (
                        <TagWrap>
                          <Tag color="black" text="Next.js" />
                          <Tag color="orange" text="Firebase" />
                          <Tag color="velvet" text="Styled-components" />
                        </TagWrap>
                      )}

                      {index === 1 && (
                        <TagWrap>
                          <Tag color="black" text="Next.js" />
                          <Tag color="green" text="Headless CMS" />
                          <Tag color="velvet" text="Styled-components" />
                        </TagWrap>
                      )}

                      {index === 2 && (
                        <TagWrap>
                          <Tag color="black" text="Next.js" />
                          <Tag color="blue" text="Typescript" />
                          <Tag color="dark-yellow" text="MDX" />
                          <Tag color="velvet" text="Styled-components" />
                        </TagWrap>
                      )}
                    </Post>
                  </motion.div>
                ))}
              </PostsWrap>
            </AnimatePresence>
          </Container>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
};

export async function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts }, revalidate: 10 };
}

export default ProjectsPage;
