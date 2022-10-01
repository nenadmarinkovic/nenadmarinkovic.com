import { Container } from "../styles/components/layout";
import {
  HeaderWrap,
  Top,
  Main,
  Logo,
  Links,
  Link,
} from "../styles/components/header";

function Header() {
  return (
    <>
      <HeaderWrap>
        <Top />
        <Container>
          <Main>
            <Logo>Home</Logo>
            <Links>
              <Link>Work</Link>
              <Link>Projects</Link>
              <Link>Contact</Link>
              <Link>Dark mode</Link>
            </Links>
          </Main>
        </Container>
      </HeaderWrap>
    </>
  );
}

export default Header;
