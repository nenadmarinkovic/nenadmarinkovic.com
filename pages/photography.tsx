import { PostType, SpotifyType, ThemeType } from "../lib/types";
import { website } from "../lib/website";
import type { NextPage } from "next";
import { useState } from "react";
import { Introduction } from "../styles/components/introduction";
import { ThemeLayout, Container, Flex } from "../styles/components/layout";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { MainSection } from "../styles/components/layout";
import Image from "next/image";
import Link from "next/link";
import Photo from "../components/Photo";

type PropTypes = SpotifyType & PostType & ThemeType;

const PhotographyPage: NextPage<PropTypes> = ({
  spotifyData,
  theme,
  toggleTheme,
}: PropTypes) => {
  const [openMenu, setOpenMenu] = useState(false);
  const numberOfPhotos = 9; // Change this to the number of photos you have
  const photos = [];

  for (let i = 1; i <= numberOfPhotos; i++) {
    const photoNumber = i.toString().padStart(3, "00");
    const photoPath = `${photoNumber}`;
    photos.push({ src: photoPath, alt: `Photo ${i}` });
  }

  return (
    <>
      <Head>
        <title>Nenad Marinković | Photography</title>
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
            <Banner name="Photography" />
            <Flex align="top" justify="space-between">
              <Introduction>
                I enjoy using photography to capture memories and share moments
                from my travels, allowing others to see the world through my
                perspective. All these photos were captured with the Sony RX100
                V, a compact camera that’s perfect for shooting on the go.
              </Introduction>
            </Flex>
            <div className="about-paragraph">
              {photos.map((photo, index) => (
                <>
                  <div className={`${index > 0 && "photo-container"} `}>
                    {index === 0 && (
                      <div className="photo-text">
                        <h2>Tappenkarsee</h2>
                        <p>
                          A breathtaking mountain peak rises above Tappenkarsee,
                          offering a mesmerizing view of the alpine landscape
                          near the village of Hüttschlag.
                        </p>
                      </div>
                    )}
                    {index === 1 && (
                      <div>
                        <h2>Schesaplana</h2>
                        <p>
                          The hike to Schesaplana’s summit was an exhilarating
                          challenge, leaving me breathless from the climb and
                          the awe-inspiring views. It’s also a place where you
                          can cross the border with Switzerland at nearly 3000
                          meters in altitude.
                        </p>
                      </div>
                    )}

                    {index === 2 && (
                      <div>
                        <h2>Near the village of Brand</h2>
                        <p>
                          The hike near the idyllic village of Brand in Austria
                          was like stepping into a fairytale, surrounded by lush
                          landscapes and charming architecture.
                        </p>
                      </div>
                    )}

                    {index === 3 && (
                      <div>
                        <h2>Juodkrante, Lithuania</h2>
                        <p>
                          Watching cormorants by the serene shore in Juodkrante,
                          along Lithuania’s beautiful coastline, was a truly
                          enjoyable and peaceful experience.
                        </p>
                      </div>
                    )}

                    {index === 4 && (
                      <div>
                        <h2>Dragonfly at the Lake of Wolisko, Poland</h2>
                        <p>
                          The 15 minutes I spent patiently waiting for a
                          dragonfly to land on a rock by Poland’s Lake Wolisko
                          felt incredibly rewarding when I finally captured this
                          beautiful picture, turning the moment into a tranquil
                          and satisfying experience.
                        </p>
                      </div>
                    )}

                    {index === 5 && (
                      <div>
                        <h2>Klaipeda, Lithuania</h2>
                        <p>
                          The yacht in Klaipeda’s waters looked elegant against
                          the backdrop of a perfect sunset, making it an ideal
                          photo opportunity.
                        </p>
                      </div>
                    )}
                    {index === 6 && (
                      <div>
                        <h2>Pärnu Muul</h2>
                        <p>
                          Pärnu Muul in Estonia left an indelible impression.
                          The 2 km walk on stones felt like stepping into
                          another world, making it a truly unforgettable
                          experience.
                        </p>
                      </div>
                    )}
                    {index === 7 && (
                      <div>
                        <h2>Helsinki from Seurasaari</h2>
                        <p>
                          The sunset view of Helsinki from Seurasaari island was
                          undeniably breathtaking, and it made for an incredibly
                          enjoyable experience.
                        </p>
                      </div>
                    )}
                    {index === 8 && (
                      <div>
                        <h2>Passing ship on the Archipelago Sea</h2>
                        <p>
                          Capturing a photo of a passing ship from a bridge
                          connecting two islands was a delightful highlight
                          during my cycling adventure through the picturesque
                          Archipelago Sea region in southwestern Finland.
                        </p>
                      </div>
                    )}
                  </div>
                  <Photo key={index} src={photo.src} alt={photo.alt} />
                </>
              ))}
            </div>
          </Container>
        </MainSection>
        <Footer spotifyData={spotifyData} theme={theme} />
      </ThemeLayout>
    </>
  );
};

export async function getStaticProps() {
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

  return { props: { spotifyData }, revalidate: 10 };
}

export default PhotographyPage;
