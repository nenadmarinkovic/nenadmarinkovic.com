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
import Photo from '../components/Photo';
import { photos } from '../lib/photography-text';

type PropTypes = PostType & ThemeType;

const PhotographyPage: NextPage<PropTypes> = ({
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <NextSeo
        title="Photography | Nenad Marinković"
        canonical="https://nenadmarinkovic.com/photography"
        openGraph={{
          url: 'https://nenadmarinkovic.com/photography',
          title: 'Photography | Nenad Marinković',
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
            <Banner name="Photography" />
            <Flex align="top" justify="space-between">
              <Introduction className="add-width">
                I enjoy using photography to capture memories and
                share moments from my travels, allowing others to see
                the world through my perspective. All these photos
                were captured with the Sony RX100 V, a compact camera
                that’s perfect for shooting on the go.
              </Introduction>
            </Flex>
            <div className="about-paragraph">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`${index > 0 && 'photo-container'} `}
                >
                  <Photo
                    id={photo.id}
                    alt={`Image - ${photo.title}`}
                    title={photo.title}
                    text={photo.text}
                  />
                </div>
              ))}
            </div>
          </Container>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
};

export default PhotographyPage;
