import React from "react";
import Wave from "./Wave";
import Illustration from "./Illustration";
import Header from "./Header";
import Fade from "react-reveal/Fade";
import {
  Wrapper,
  BannerContainer,
  BannerWrapper,
  FlexWrap,
  Info,
  Title,
  Subtitle,
} from "../styles/components/Banner";
import ContactButton from "./ContactButton";

function Banner(props) {
  return (
    <>
      <Wrapper>
        <BannerWrapper>
          <Header theme={props.theme} toggleTheme={props.toggleTheme} />
          <BannerContainer>
            <FlexWrap>
              <Info>
                <Fade>
                  <Title>Hi. I'm Nenad, a web developer.</Title>
                  <Subtitle>
                    I create websites and web applications that are fast, clean,
                    and enjoyable.
                  </Subtitle>
                </Fade>
              </Info>
              <Fade delay={200}>
                <ContactButton />
              </Fade>
            </FlexWrap>
            <Illustration />
          </BannerContainer>
        </BannerWrapper>
      </Wrapper>
      <Wave />
    </>
  );
}

export default Banner;
