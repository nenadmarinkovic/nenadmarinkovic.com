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
  width: 100%;
`;

const Home = styled.a`
  text-decoration: none;
  font-size: 17px;
  color: ${({ theme }) => theme.text};
`;

const Info = styled.div`
  padding-top: 150px;
`;

const Subtitle = styled.h6`
  padding: 10px 0 15px;
  margin: 0;
  font-size: 21px;
  line-height: 1.6;
  color: ${({ theme }) => theme.subtitleText};
`;

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLink = styled.div`
  padding: 0 25px;
  a {
    text-decoration: none;
    font-size: 17px;
    color: ${({ theme }) => theme.text};
  }
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
            <HeaderLinks>
              <HeaderLink>
                <Link prefetch href={"/work"} passHref>
                  <a>Work</a>
                </Link>
              </HeaderLink>
              <HeaderLink>
                {" "}
                <Link prefetch href={"/blog"} passHref>
                  <a>Blog</a>
                </Link>
              </HeaderLink>
              <HeaderLink>
                {" "}
                <Link prefetch href={"/contact"} passHref>
                  <a>Contact</a>
                </Link>
              </HeaderLink>
              <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
            </HeaderLinks>
          </Container>
          <BannerContainer>
            <Info>
              <h1 className="title">
                Migas letterpress bottle post-ironic gentrify.
              </h1>
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
