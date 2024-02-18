import { PostType, ThemeType } from '../lib/types';
import type { NextPage } from 'next';
import { useState } from 'react';
import { Introduction } from '../styles/components/introduction';
import {
  ThemeLayout,
  Container,
  Flex,
} from '../styles/components/layout';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { MainSection } from '../styles/components/layout';
import Link from 'next/link';

type PropTypes = PostType & ThemeType;

const NotFoundPage: NextPage<PropTypes> = ({
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <NextSeo
        title="404 | Nenad Marinković"
        canonical="https://nenadmarinkovic.com/404"
        openGraph={{
          url: 'https://nenadmarinkovic.com/404',
          title: '404 | Nenad Marinković',
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
            <Banner name="404 — Page not found." />
            <Flex align="top" justify="space-between">
              <Introduction>
                Whoops, that page is missing! If you clicked a link
                that led you to this page, please{' '}
                <Link className="a-link" href={`/contact`}>
                  let me know
                </Link>{' '}
                so I can fix it as soon as possible. <br />
                <Link className="a-link flex-link" href={`/`}>
                  <span>Go to homepage.</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="contact-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </Introduction>
            </Flex>
          </Container>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
};

export default NotFoundPage;
