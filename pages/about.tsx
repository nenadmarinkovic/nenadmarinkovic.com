import { PostType, SpotifyType, ThemeType } from "../lib/types";
import { website } from "../lib/website";
import type { NextPage } from "next";
import { useState } from "react";
import { Introduction } from "../styles/components/introduction";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { MainSection } from "../styles/components/layout";
import Image from "next/image";
import Link from "next/link";

type PropTypes = SpotifyType & PostType & ThemeType;

const ProjectsPage: NextPage<PropTypes> = ({
  spotifyData,
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <NextSeo
        title="About | Nenad Marinković"
        canonical="https://nenadmarinkovic.com/about"
        openGraph={{
          url: "https://nenadmarinkovic.com/about",
          title: "About | Nenad Marinković",
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
            <Banner name="About" />
            <Flex align="top" justify="space-between">
              <Introduction>
                Hi! I’m Nenad, a front-end web developer based in Vienna,
                Austria. My expertise lies in building websites and web
                interfaces using modern technologies like React and Vue. I find
                great joy in the field of web development — it’s a journey
                filled with challenges, constant learning, and the chance to
                bring a creative touch to each project.
              </Introduction>
              <Image
                className="personal-photo"
                src={"/photo.jpg"}
                height={225}
                width={225}
                alt="Personal photo"
              />
            </Flex>
            <div className="about-paragraph">
              <p>
                In my most recent role, I had the opportunity to work at DCCS
                software company. Here, I contributed to the development of a
                web application for helping residents and property owners to
                have insights into their energy consumption. During this
                project, I acquired extensive expertise in constructing
                adaptable front-end components using Vue.js, all within a
                framework of agile SCRUM methodology. This experience further
                solidified my skills in building scalable software solutions.
              </p>
              <p>
                Before that, I worked at various web agencies, where I
                specialized in crafting e-commerce websites, content management
                systems, and marketing websites. These experiences were
                invaluable in terms of collaborating closely with designers and
                clients, both in my home country of Serbia and in Austria.
              </p>

              <p>
                Outside of my work-related responsibilities, I have a genuine
                interest in contributing to{" "}
                <a
                  className="a-link"
                  href="https://github.com/nenadmarinkovic"
                  rel="noreferrer"
                  target="_blank"
                >
                  open-source software
                </a>{" "}
                whenever I can. I also take pleasure in developing my own{" "}
                <Link className="a-link" href="/projects">
                  projects
                </Link>
                , primarily using React and TypeScript. Developing them offers
                me the freedom to experiment with design, or just to test
                different approaches and technologies, which is always fun thing
                to do.
              </p>
              <p>
                Over a decade ago, I studied sociology and political sciences,
                gaining insights into human societies and political systems.
                This background shaped my understanding of societal dynamics and
                their connection to technology.
              </p>
              <p>
                Outside of work, I’m also dedicated to learning German and Go
                programming language. I also find pleasure in exploring the
                beautiful city of Vienna. Whenever the opportunity arises, I
                like to travel or go hiking, occasionally seizing moments to
                capture the beauty of my journeys through{" "}
                <Link className="a-link" href="/photography">
                  photography
                </Link>
                .
              </p>
              <p>
                If you’re in the area and up for hanging out, or want to discuss
                a project, feel free to{" "}
                <Link className="a-link" href="/contact">
                  get in touch
                </Link>
                .
              </p>
            </div>
          </Container>
        </MainSection>
        <Footer spotifyData={spotifyData} theme={theme} />
      </ThemeLayout>
    </>
  );
};

export async function getServerSideProps() {
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

  return { props: { spotifyData } };
}

export default ProjectsPage;
