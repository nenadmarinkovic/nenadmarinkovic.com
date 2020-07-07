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

function Banner(props) {
  return (
    <>
      <Wrapper>
        <div className="container">
          <Container>
            <Link href="/">Nenad Marinkovic</Link>
            <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
          </Container>
          <BannerContainer>
            <p>Hello!</p>
            <Illustration />
          </BannerContainer>
        </div>
      </Wrapper>
      <Wave />
    </>
  );
}

export default Banner;
