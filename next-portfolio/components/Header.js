import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import {
  Container,
  HeaderLinks,
  HeaderLink,
  Home,
} from "../styles/components/Header";

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
            <a>Technology</a>
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
