import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import {
  StyledMenu,
  MenuLinks,
  MenuLink,
  StyledBurger,
} from "../styles/components/menu";
import Link from "next/link";
import { useClickOutside } from "../hooks/useClickOutside";

const MenuComponent = ({ open }: any) => {
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
        {/* <ThemeButton onClick={toggleTheme}>
          {theme === "light" ? "Dark mode" : "Light mode"}
        </ThemeButton> */}
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

function Menu() {
  const [open, setOpen] = useState(false);
  const node = useRef(null);

  useClickOutside(node, () => setOpen(false));
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MenuComponent open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Menu;
