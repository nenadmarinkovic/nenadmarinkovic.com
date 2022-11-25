import { useRef } from "react";
import { useRouter } from "next/router";
import { useClickOutside } from "../hooks/useClickOutside";
import {
  StyledMenu,
  MenuLinks,
  MenuLink,
  StyledBurger,
  MenuThemeButton,
} from "../styles/components/menu";
import Link from "next/link";

const MenuComponent = ({ openMenu, setOpenMenu, toggleTheme, theme }: any) => {
  const router = useRouter();

  return (
    <StyledMenu openMenu={openMenu}>
      <MenuLinks>
        <MenuLink>
          <Link
            href="/projects"
            className={router.pathname === "/projects" ? "active-link" : ""}
          >
            Projects
          </Link>
        </MenuLink>
        <MenuLink>
          <Link
            href="/notes"
            className={router.pathname === "/notes" ? "active-link" : ""}
          >
            Notes
          </Link>
        </MenuLink>
        <MenuLink>
          <Link
            href="/contact"
            className={router.pathname === "/contact" ? "active-link" : ""}
          >
            Contact
          </Link>
        </MenuLink>
        <MenuThemeButton
          onClick={() => setOpenMenu(!openMenu)}
          onClickCapture={toggleTheme}
          aria-label="theme"
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </MenuThemeButton>
      </MenuLinks>
    </StyledMenu>
  );
};

const Burger = ({ openMenu, setOpenMenu }: any) => {
  return (
    <StyledBurger
      openMenu={openMenu}
      onClick={() => setOpenMenu(!openMenu)}
      aria-label="menu"
    >
      <div />
      <div />
    </StyledBurger>
  );
};

function Menu({ theme, toggleTheme, setOpenMenu, openMenu }: any) {
  const node = useRef(null);
  useClickOutside(node, () => setOpenMenu(false));

  return (
    <div ref={node}>
      <Burger openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MenuComponent
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </div>
  );
}

export default Menu;
