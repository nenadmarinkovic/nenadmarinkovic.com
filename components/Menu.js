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
      <MenuLinks>
        <HeaderLink>
          <ScrollIntoView selector="#work" smooth={true}>
            <Fade right delay={100}>
              <Button onClick={() => setOpen(!open)}>Work</Button>
            </Fade>
          </ScrollIntoView>
        </HeaderLink>
        <HeaderLink>
          <ScrollIntoView selector="#projects" smooth={true}>
            <Fade right delay={300}>
              <Button onClick={() => setOpen(!open)}>Projects</Button>
            </Fade>
          </ScrollIntoView>
        </HeaderLink>
        <HeaderLink>
          <ScrollIntoView selector="#aboutme" smooth={true}>
            <Fade right delay={500}>
              <Button onClick={() => setOpen(!open)}>About me</Button>
            </Fade>
          </ScrollIntoView>
        </HeaderLink>
        <HeaderLink>
          <ScrollIntoView selector="#contact" smooth={true}>
            <Fade right delay={700}>
              <Button onClick={() => setOpen(!open)}>Contact </Button>
            </Fade>
          </ScrollIntoView>
        </HeaderLink>
      </MenuLinks>
    </StyledMenu>
  );
};

export default Menu;
