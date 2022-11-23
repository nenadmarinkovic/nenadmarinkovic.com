import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";

type Nav = {
  open: boolean;
};

const StyledMenu = styled.nav<Nav>`
  display: flex;
  flex-direction: column;
  background: white;
  border-left: 1px solid #eaeaea;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 120vh;
  text-align: left;
  padding: 80px 20px;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
`;

const MenuItem = styled.div`
  color: #363636;
  margin-top: 30px;

  :hover {
    cursor: pointer;
  }
`;

const MenuComponent = ({ open, setOpen }: any) => {
  return (
    <StyledMenu open={open}>
      <MenuItem onClick={() => setOpen(!open)}>Explore the benefits</MenuItem>

      <MenuItem onClick={() => setOpen(!open)}>Get connected</MenuItem>

      <MenuItem onClick={() => setOpen(!open)}>
        <a href="https://avuteq.com" target="_blank" rel="noreferrer">
          Project by Avuteq
        </a>{" "}
      </MenuItem>
    </StyledMenu>
  );
};

const StyledBurger = styled.button<Nav>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#0D0C1D")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }: any) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
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
