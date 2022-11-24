import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { StyledMenu, MenuLinks, StyledBurger } from "../styles/components/menu";
import { HeaderLink } from "../styles/components/header";
import Link from "next/link";
import { useClickOutside } from "../hooks/useClickOutside";

const MenuComponent = ({ open }: any) => {
  const router = useRouter();

  return (
    <StyledMenu open={open}>
      <MenuLinks>
        <HeaderLink>
          <Link
            href="/projects"
            className={router.pathname === "/projects" ? "active-link" : ""}
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
            className={router.pathname === "/contact" ? "active-link" : ""}
          >
            Contact
          </Link>
        </HeaderLink>
        {/* <ThemeButton onClick={toggleTheme}>
          {theme === "light" ? "Dark mode" : "Light mode"}
        </ThemeButton> */}
      </MenuLinks>
    </StyledMenu>
  );
};

const Burger = ({ open, setOpen }: any) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
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
