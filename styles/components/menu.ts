import styled from "styled-components";

type Menu = {
  openMenu?: boolean;
};

export const StyledMenu = styled.nav<Menu>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  border-left: ${({ theme }) => theme.headerAndMenuBorder};
  transform: ${({ openMenu }) =>
    openMenu ? "translateX(0)" : "translateX(100%)"};
  height: 120vh;
  text-align: left;
  padding: 55px;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 0;
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 1rem;

  a {
    color: ${({ theme }) => theme.color};
  }
`;

export const MenuThemeButton = styled.button`
  text-align: center;
  margin-top: 1.5rem;
  background: transparent;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color};
`;

export const StyledBurger = styled.button<Menu>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1.3rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;
  cursor: pointer;

  div {
    width: 1.5rem;
    height: 0.15rem;
    background: ${({ theme }) => theme.color};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ openMenu }) =>
        openMenu ? "translateY(2.5px)" : "translateY(0)"};
    }

    :nth-child(2) {
      transform: ${({ openMenu }) =>
        openMenu ? "translateY(-2.5px)" : "translateY(0)"};
    }
  }
`;
