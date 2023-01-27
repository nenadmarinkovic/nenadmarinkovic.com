import React, { useRef } from "react";
import { useRouter } from "next/router";
import {
  StyledMenu,
  MenuLinks,
  MenuLink,
  StyledBurger,
  MenuThemeButton,
} from "../styles/components/menu";
import Link from "next/link";
import { useClickOutside } from "../hooks/useClickOutside";

const MenuComponent = ({ openMenu, setOpenMenu, toggleTheme, theme }: any) => {
  const router = useRouter();

  return (
    <StyledMenu openMenu={openMenu}>
      <MenuLinks>
        <MenuLink>
          <Link
            href="/projects"
            className={
              router.pathname.includes("/projects") ? "active-link" : ""
            }
          >
            Projects
          </Link>
        </MenuLink>
        <MenuLink>
          <Link
            href="/dir"
            className={router.pathname.includes("/dir") ? "active-link" : ""}
          >
            Directory
          </Link>
        </MenuLink>
        <MenuLink>
          <Link
            href="/contact"
            className={
              router.pathname.includes("/contact") ? "active-link" : ""
            }
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
      onClick={() => setOpenMenu(!openMenu)}
      openMenu={openMenu}
      aria-label="menu"
    >
      <div />
      <div />
    </StyledBurger>
  );
};

function Menu({ theme, toggleTheme, openMenu, setOpenMenu }: any) {
  const node = useRef(null);
  useClickOutside(node, () => setOpenMenu(false));

  return (
    <div>
      <div ref={node}>
        <Burger openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <MenuComponent
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}

export default Menu;
