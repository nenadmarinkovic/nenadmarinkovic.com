import React, { useState, useRef } from "react";
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

const MenuComponent = ({ open, setOpen, toggleTheme, theme }: any) => {
  const router = useRouter();

  return (
    <StyledMenu open={open}>
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
          onClick={() => setOpen(!open)}
          onClickCapture={toggleTheme}
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </MenuThemeButton>
      </MenuLinks>
    </StyledMenu>
  );
};

const Burger = ({ open, setOpen }: any) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} aria-label="menu">
      <div />
      <div />
    </StyledBurger>
  );
};

function Menu({ theme, toggleTheme }: any) {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  useClickOutside(node, () => setOpen(false));

  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MenuComponent
          open={open}
          setOpen={setOpen}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}

export default Menu;
