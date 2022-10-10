import { Container } from "../styles/components/layout";
import {
  HeaderWrap,
  Top,
  Main,
  Logo,
  Links,
  LinkWrap,
} from "../styles/components/header";
import Link from "next/link";

function Header({ theme, toggleTheme }: any) {
  return (
    <HeaderWrap>
      <Top />
      <Container>
        <Main>
          <Link href="/">
            <Logo>Home</Logo>
          </Link>
          <Links>
            <LinkWrap>Work</LinkWrap>
            <LinkWrap>Projects</LinkWrap>
            <Link href="/blog">
              <LinkWrap>Blog</LinkWrap>
            </Link>

            <LinkWrap>Contact</LinkWrap>
            <LinkWrap onClick={toggleTheme}>
              {theme === "light" ? "Dark mode" : "Light mode"}
            </LinkWrap>
          </Links>
        </Main>
      </Container>
    </HeaderWrap>
  );
}

export default Header;
