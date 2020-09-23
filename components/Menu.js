import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ScrollIntoView from "react-scroll-into-view";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #effffa;
  display: ${({ open }) => (open ? "" : "none")};
  height: 300px;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0px;
  right: 0px;
  transition: transform 0.3s ease-in-out;
  border-bottom-left-radius: 23px;
  overflow: hidden;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled.a`
  padding: 0 25px;
  a {
    text-decoration: none;
    font-size: 19px;
    transition: 0.3s;
    color: ${({ theme }) => theme.text};
  }
`;

export const Home = styled.a`
  text-decoration: none;
  font-size: 19px;
  transition: 0.3s;
  color: ${({ theme }) => theme.text};

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  background: transparent;
  margin-top: 20px;
  color: white;
  border: none;
  paddig: 5px;
  text-decoration: none;
  font-size: 19px;
  transition: 0.3s;
  cursor: pointer;
  color: black;

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
    border-radius: 5px;
  }
`;

export const MenuLinks = styled.div`
  margin-top: 40px;
`;

const Menu = ({ open, setOpen }) => {

  return (
    
    <StyledMenu open={open}>
      <MenuLinks>
        <HeaderLink>
          <ScrollIntoView selector="#work">
            {" "}
            <Button onClick={() => setOpen(!open)}>Work</Button>
          </ScrollIntoView>
        </HeaderLink>
        <HeaderLink>
          <ScrollIntoView selector="#technology">
            {" "}
            <Button onClick={() => setOpen(!open)}>Technology </Button>
          </ScrollIntoView>
        </HeaderLink>
        <HeaderLink>
          <ScrollIntoView selector="#contact">
            {" "}
            <Button onClick={() => setOpen(!open)}>Contact </Button>
          </ScrollIntoView>
        </HeaderLink>
      </MenuLinks>
    </StyledMenu>
    
  );
};

export default Menu;
