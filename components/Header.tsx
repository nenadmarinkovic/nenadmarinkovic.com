import { Container } from "../styles/components/layout";
import {
  HeaderWrap,
  Top,
  Main,
  Logo,
  Links,
  Link,
} from "../styles/components/header";

function Header(props: any) {
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
              <Link onClick={props.toggleTheme}>
                {props.theme === "light" ? "Dark mode" : "Light mode"}
              </Link>
            </Links>
          </Main>
        </Container>
      </HeaderWrap>
    </>
  );
}

export default Header;
