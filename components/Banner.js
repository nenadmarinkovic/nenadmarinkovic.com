import React from "react";
import Wave from "./Wave";
import ContactButton from "./ContactButton";
import Illustration from "./Illustration";
import Header from "./Header";
import Fade from "react-reveal/Fade";

import {
  Subtitle,
  Title,
  Wrapper,
  BannerContainer,
  BannerWrapper,
  Info,
} from "../styles/components/Banner";

function Banner(props) {
  return (
    <>
      <Wrapper>
        <BannerWrapper>
          <Header theme={props.theme} toggleTheme={props.toggleTheme} />
          <BannerContainer>
            <Fade>
              <Info>
                <Title>Hi. I'm Nenad, a web developer.</Title>
                <Subtitle>
                  I create websites and web applications that are fast, clean,
                  and enjoyable.
                </Subtitle>
              
                <ContactButton />
               
              </Info>
            
            </Fade>
            <Illustration />
          </BannerContainer>
        </BannerWrapper>
      </Wrapper>
      <Wave />
    </>
  );
}

export default Banner;
