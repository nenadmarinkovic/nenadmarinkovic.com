import React, { useRef } from "react";
import { useRouter } from "next/router";
import {
  StyledMenu,
  MenuLinks,
  MenuLink,
  StyledBurger,
  MenuThemeButton,
} from "../styles/components/menu";
import { ThemeType, SpotifyType, MenuType } from "../lib/types";
import Link from "next/link";
import { useClickOutside } from "../hooks/useClickOutside";

type PropTypes = ThemeType & SpotifyType & MenuType;

const MenuComponent = ({
  openMenu,
  setOpenMenu,
  toggleTheme,
  theme,
}: PropTypes) => {
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
            href="/about"
            className={router.pathname.includes("/about") ? "active-link" : ""}
          >
            About
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
          {theme === "light" ? (
            <li className="header-theme">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="header-theme-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </li>
          ) : (
            <li className="header-theme">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="header-theme-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </li>
          )}
        </MenuThemeButton>
      </MenuLinks>
    </StyledMenu>
  );
};

const Burger = ({ openMenu, setOpenMenu }: PropTypes) => {
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

function Menu({ theme, toggleTheme, openMenu, setOpenMenu }: PropTypes) {
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
