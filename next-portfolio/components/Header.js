import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
    transition: 0.3s;
    color: ${({ theme }) => theme.text};
  }
`;

const Home = styled.a`
  text-decoration: none;
  font-size: 17px;
  transition: 0.3s;
  color: ${({ theme }) => theme.text};
`;

function Header(props) {
  return (
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
  );
}

export default Header;
