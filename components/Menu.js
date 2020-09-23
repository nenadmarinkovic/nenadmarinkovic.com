import React, { useEffect, useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import {
  StyledMenu,
  HeaderLink,
  Button,
  MenuLinks,
} from "../styles/components/Menu";

import ScrollIntoView from "react-scroll-into-view";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Fade>
        <MenuLinks>
          <HeaderLink>
            <ScrollIntoView selector="#work">
              {" "}
              <Fade right delay={100}>
                <Button onClick={() => setOpen(!open)}>Work</Button>
              </Fade>
            </ScrollIntoView>
          </HeaderLink>
          <HeaderLink>
            <ScrollIntoView selector="#technology">
              {" "}
              <Fade right delay={300}>
                <Button onClick={() => setOpen(!open)}>Technology </Button>
              </Fade>
            </ScrollIntoView>
          </HeaderLink>
          <HeaderLink>
            <ScrollIntoView selector="#contact">
              {" "}
              <Fade right delay={500}>
                <Button onClick={() => setOpen(!open)}>Contact </Button>
              </Fade>
            </ScrollIntoView>
          </HeaderLink>
        </MenuLinks>
      </Fade>
    </StyledMenu>
  );
};

export default Menu;
