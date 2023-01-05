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
import { Theme, Spotify, MenuType } from "../lib/types";

type Props = Theme & Spotify & MenuType;

function Header({ theme, toggleTheme, openMenu, setOpenMenu }: Props) {
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
                  href="/directory"
                  className={router.pathname === "/dir" ? "active-link" : ""}
                >
                  Directory
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
              <Menu
                theme={theme}
                toggleTheme={toggleTheme}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
            </MenuButton>
          </Main>
        </Container>
      </HeaderWrap>
    </>
  );
}

export default Header;
