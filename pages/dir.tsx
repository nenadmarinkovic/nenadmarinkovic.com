import React, { Fragment, useState, useEffect } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import type { NextPage } from 'next';
import {
  ThemeLayout,
  Container,
  Flex,
} from '../styles/components/layout';
import { Introduction } from '../styles/components/introduction';
import { postFilePaths, POSTS_PATH } from '../utils/mdx-directory';
import TagButton from '../components/TagButton';
import { PostType, ThemeType, FilteredPostType } from '../lib/types';
import { TagButtonsWrap } from '../styles/components/tag';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { MainSection } from '../styles/components/layout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PostsWrap,
  Post,
  Title,
  AdditionalInfo,
  Date,
  Description,
} from '../styles/pages/common';

type PropTypes = PostType & ThemeType;

const DirectoryPage: NextPage<PropTypes> = ({
  posts,
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [active, setActive] = useState('All');

  const sortedCategories = uniqueCategories.sort((a, b) =>
    a > b ? 1 : b > a ? -1 : 0
  );

  const filterCategory = (category: string) => {
    if (category === 'All') {
      return setFilteredPosts(posts);
    }

    const filteredPosts = posts.filter(
      (post: PropTypes) => post.data.category === category
    );

    setFilteredPosts(filteredPosts);
  };

  const uniqueCategoriesOnLoad = (posts: FilteredPostType) => {
    const categories = posts
      .map((post: FilteredPostType) => post.data.category)
      .filter(
        (
          item: FilteredPostType,
          index: FilteredPostType,
          arr: FilteredPostType
        ) => arr.indexOf(item) === index
      );

    setUniqueCategories(categories);
  };

  useEffect(() => {
    return uniqueCategoriesOnLoad(posts);
  }, [posts]);

  return (
    <>
      <NextSeo
        title="Directory | Nenad Marinković"
        canonical="https://nenadmarinkovic.com/dir"
        openGraph={{
          url: 'https://nenadmarinkovic.com/dir',
          title: 'Directory | Nenad Marinković',
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
            <Banner name="Directory" />
            <Flex align="top" justify="space-between">
              <Introduction>
                Web directory for notes, bookmarks, resources, and the
                things I’m interested in. All the content is{' '}
                <a
                  className="a-link"
                  href="https://github.com/nenadmarinkovic/nenadmarinkovic.com/tree/main/directory"
                  rel="noreferrer"
                  target="_blank"
                >
                  open-source
                </a>
                .
                <br />
                For my travel photos, check out the{' '}
                <Link className="a-link" href={'/photography'}>
                  Photography{' '}
                </Link>
                page.
              </Introduction>
            </Flex>
            <TagButtonsWrap>
              <TagButton
                onClick={() => {
                  filterCategory('All'), setActive('All');
                }}
                color="default"
                text="All"
                active={active}
              />
              {sortedCategories.map(
                (category: string, index: number) => (
                  <TagButton
                    key={index}
                    onClick={() => {
                      filterCategory(category);
                      setActive(category);
                    }}
                    color="default"
                    active={active}
                    text={category}
                  />
                )
              )}
            </TagButtonsWrap>
            <AnimatePresence mode="wait">
              <PostsWrap>
                {filteredPosts.map(
                  (post: FilteredPostType, index: number) => (
                    <Fragment key={index}>
                      <Post key={post.filePath}>
                        <motion.div
                          key={post.index}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: index * 0.15,
                            delayChildren: 0.5,
                          }}
                        >
                          <Link
                            as={`/dir/${post.filePath.replace(
                              /\.mdx?$/,
                              ''
                            )}`}
                            href={`/dir/[slug]`}
                          >
                            <Title>{post.data.title}</Title>
                          </Link>
                          <AdditionalInfo>
                            Updated:
                            <Date>{post.data.date}</Date>
                          </AdditionalInfo>
                          <Description>
                            {post.data.description}
                          </Description>
                        </motion.div>
                      </Post>
                    </Fragment>
                  )
                )}
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
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts }, revalidate: 10 };
}

export default DirectoryPage;
