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
              <Fade bottom delay={500}>
                <Title>Hi. I'm Nenad, a web developer.</Title>
              </Fade>
              <Fade bottom delay={1000}>
                <Subtitle>
                  I enjoy creating websites and web applications, exploring web
                  technologies, and playing with design.
                </Subtitle>
              </Fade>
              <Fade bottom delay={1500}>
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
