import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import {
  Container,
  HeaderLinks,
  HeaderLink,
  Home,
  Button,
} from "../styles/components/Header";
import Fade from "react-reveal/Fade";
import ScrollIntoView from "react-scroll-into-view";
import Menu from "./Menu";
import Burger from "./Burger";

function Header(props) {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <>
      <Container>
        <Fade>
          <Link prefetch href={"/"} passHref>
            <Home>Nenad Marinković</Home>
          </Link>
        </Fade>

        <Fade>
          <HeaderLinks>
            <HeaderLink>
              <ScrollIntoView selector="#work">
                {" "}
                <Button>Work </Button>
              </ScrollIntoView>
            </HeaderLink>
            <HeaderLink>
              <ScrollIntoView selector="#technology">
                {" "}
                <Button>Technology </Button>
              </ScrollIntoView>
            </HeaderLink>
            <HeaderLink>
              <ScrollIntoView selector="#contact">
                {" "}
                <Button>Contact </Button>
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
