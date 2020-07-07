import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import Wave from "./Wave";
import Illustration from "./Illustration";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Home = styled.a`
  text-decoration: none;
  font-size: 18px;
`;

function Banner(props) {
  return (
    <>
      <Wrapper>
        <div className="container">
          <Container>
            <Link href="/">
              <Home>Nenad Marinković</Home>
            </Link>
            <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
          </Container>
          <BannerContainer>
            <h1>A simpler way of making interactive map charts </h1>
            <Illustration />
          </BannerContainer>
        </div>
      </Wrapper>
      <Wave />
    </>
  );
}

export default Banner;
