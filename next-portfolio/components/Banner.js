import React from "react";
import Wave from "./Wave";
import ContactButton from "./ContactButton";
import Illustration from "./Illustration";
import Header from "./Header";
import {
  Wrapper,
  BannerContainer,
  BannerWrapper,
  Info,
  Subtitle,
  Title
} from "../styles/components/Banner";

function Banner(props) {
  return (
    <>
      <Wrapper>
        <BannerWrapper>
          <Header theme={props.theme} toggleTheme={props.toggleTheme} />
          <BannerContainer>
            <Info>
              <Title>Hi. I'm Nenad, a web developer.</Title>
              <Subtitle>
                I enjoy creating websites and web applications, exploring web
                technologies, and playing with design.
              </Subtitle>
              <ContactButton />
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
