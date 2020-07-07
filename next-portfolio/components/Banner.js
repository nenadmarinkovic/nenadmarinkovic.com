import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import Wave from "./Wave";
import ContactButton from "./ContactButton";
import Illustration from "./Illustration";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Home = styled.a`
  text-decoration: none;
  font-size: 17px;
  font-weight: 00;
  color: ${({ theme }) => theme.text};
`;

const Info = styled.div`
  padding-top: 150px;
`;

const Subtitle = styled.h6`
  color: ${({ theme }) => theme.subtitleText};
`;

function Banner(props) {
  return (
    <>
      <Wrapper>
        <div className="container">
          <Container>
            <Link prefetch href={"/"} passHref>
              <Home>Nenad Marinković</Home>
            </Link>
            <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
          </Container>
          <BannerContainer>
            <Info>
              <h1>Migas letterpress bottle post-ironic gentrify.</h1>
              <Subtitle>
                Quinoa meggings heirloom selfies brooklyn tilde hashtag iceland
                disrupt slow-carb.{" "}
              </Subtitle>
              <ContactButton />
            </Info>
            <Illustration />
          </BannerContainer>
        </div>
      </Wrapper>
      <Wave />
    </>
  );
}

export default Banner;
