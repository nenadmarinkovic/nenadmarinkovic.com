import { NextSeo } from 'next-seo';
import type { NextPage } from 'next';
import { useState } from 'react';
import { ThemeType } from '../lib/types';
import {
  ThemeLayout,
  Container,
  Flex,
} from '../styles/components/layout';
import { Introduction } from '../styles/components/introduction';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ContactForm from '../components/Form';
import { MainSection } from '../styles/components/layout';

type PropTypes = ThemeType;

const ContactPage: NextPage<PropTypes> = ({
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <NextSeo
        title="Contact | Nenad Marinković"
        canonical="https://nenadmarinkovic.com/contact"
        openGraph={{
          url: 'https://nenadmarinkovic.com/contact',
          title: 'Contact | Nenad Marinković',
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
            <Banner name="Contact" />
            <Flex align="top" justify="space-between">
              <Introduction className="add-width">
                Feel free to get in touch with me through the form
                below or by sending an email. I would love to hear
                from you and discuss any inquiries, collaborations, or
                opportunities you may have.
                <br />
                <a
                  href="mailto:nenadmarinkovic@protonmail.com"
                  className="a-link"
                >
                  nenadmarinkovic@protonmail.com
                </a>
              </Introduction>
            </Flex>
            <ContactForm />
          </Container>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
};

export default ContactPage;
