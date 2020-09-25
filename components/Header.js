import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import {
  Container,
  HeaderLinks,
  HeaderLink,
  Home,
  Button,
} from "../styles/components/Header";
import ScrollIntoView from "react-scroll-into-view";
import Fade from "react-reveal/Fade";
import Menu from "./Menu";
import Burger from "./Burger";

function Header(props) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);
  return (
    <>
      <Container>
        <Fade>
          <Link href={"/"} passHref>
            <Home>Nenad Marinković</Home>
          </Link>
        </Fade>
        <Fade>
          <HeaderLinks>
            <HeaderLink>
              <ScrollIntoView selector="#work">
                <Button>Work</Button>
              </ScrollIntoView>
            </HeaderLink>
            <HeaderLink>
              <ScrollIntoView selector="#technology">
                <Button>Technology</Button>
              </ScrollIntoView>
            </HeaderLink>
            <HeaderLink>
              <ScrollIntoView selector="#contact">
                <Button>Contact</Button>
              </ScrollIntoView>
            </HeaderLink>
            <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
          </HeaderLinks>
        </Fade>
      </Container>

      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default Header;
