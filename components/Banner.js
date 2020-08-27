import React from "react";
import Wave from "./Wave";
import ContactButton from "./ContactButton";
import Illustration from "./Illustration";
import Header from "./Header";
import Fade from "react-reveal/Fade";

import {
  Wrapper,
  BannerContainer,
  BannerWrapper,
  Info,
  Subtitle,
  Title,
} from "../styles/components/Banner";

function Banner(props) {
  return (
    <>
      <Wrapper>
        <BannerWrapper>
          <Header theme={props.theme} toggleTheme={props.toggleTheme} />
          <BannerContainer>
            <Info>
              <Fade>
                <Title>Hi. I'm Nenad, a web developer.</Title>
              </Fade>
              <Fade>
                <Subtitle>
                  I create websites and web applications that are fast, clean,
                  and enjoyable.
                </Subtitle>
              </Fade>
              <Fade>
                <ContactButton />
              </Fade>
            </Info>
            <Illustration />
          </BannerContainer>
        </BannerWrapper>
      </Wrapper>
      <Wave />
    </>
  );
}

export default Banner;
