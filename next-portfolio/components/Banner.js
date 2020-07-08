import React from "react";
import Wave from "./Wave";
import ContactButton from "./ContactButton";
import Illustration from "./Illustration";
import Header from "./Header";
import styled from "styled-components";

const Wrapper = styled.div`
  transition: 0.3s;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BannerWrapper = styled.div`
  height: 450px;
  width: 1120px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 15px 0 15px;
`;

const Info = styled.div`
  padding-top: 140px;
  width: 47%;
`;

const Subtitle = styled.h6`
  padding: 8px 0 15px;
  margin: 0;
  font-size: 19px;
  line-height: 1.6;
  transition: 0.3s;
  color: ${({ theme }) => theme.subtitleText};
`;

function Banner(props) {
  return (
    <>
      <Wrapper>
        <BannerWrapper>
          <Header theme={props.theme} toggleTheme={props.toggleTheme} />
          <BannerContainer>
            <Info>
              <h1 className="title">Hi. I'm Nenad, a web developer.</h1>
              <Subtitle>
                I enjoy creating websites and web applications, exploring web
                technologies, and playing with design.{" "}
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
