import React, { useEffect, useState } from "react";

import { StyledBurger } from "../styles/components/StyledBurger";

const Burger = ({ open, setOpen }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 40);
    });
  }, []);

  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      className={scroll ? "menu-fixed" : ""}
    >
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
