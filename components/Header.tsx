import { Container } from "../styles/components/layout";
import {
  HeaderWrap,
  Main,
  HomeLink,
  Links,
  HeaderLink,
  ThemeButton,
  MenuButton,
} from "../styles/components/header";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "./Menu";

function Header({ theme, toggleTheme }: any) {
  const router = useRouter();

  return (
    <>
      <HeaderWrap>
        <Container>
          <Main>
            <HomeLink>
              <Link
                href="/"
                className={router.pathname === "/" ? "active-link" : ""}
              >
                Home
              </Link>
            </HomeLink>
            <Links>
              <HeaderLink>
                <Link
                  href="/projects"
                  className={
                    router.pathname === "/projects" ? "active-link" : ""
                  }
                >
                  Projects
                </Link>
              </HeaderLink>
              <HeaderLink>
                <Link
                  href="/notes"
                  className={router.pathname === "/notes" ? "active-link" : ""}
                >
                  Notes
                </Link>
              </HeaderLink>
              <HeaderLink>
                <Link
                  href="/contact"
                  className={
                    router.pathname === "/contact" ? "active-link" : ""
                  }
                >
                  Contact
                </Link>
              </HeaderLink>
              <ThemeButton onClick={toggleTheme}>
                {theme === "light" ? "Dark mode" : "Light mode"}
              </ThemeButton>
            </Links>
            <MenuButton>
              <Menu />
            </MenuButton>
          </Main>
        </Container>
      </HeaderWrap>
    </>
  );
}

export default Header;
