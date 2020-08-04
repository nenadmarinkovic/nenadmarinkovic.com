import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import {
  Container,
  HeaderLinks,
  HeaderLink,
  Home
} from "../styles/components/Header";
import Fade from "react-reveal/Fade";


function Header(props) {
  return (
    
    <Container>
       <Fade>
      <Link prefetch href={"/"} passHref>
        <Home>Nenad Marinković</Home>
      </Link>
      </Fade>
      <Fade>
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
      </Fade>
    </Container>
   
  );
}

export default Header;
