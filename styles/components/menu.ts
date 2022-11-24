import styled from "styled-components";

type Menu = {
  open: boolean;
};

export const StyledMenu = styled.nav<Menu>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: white;
  border-left: 1px solid #eaeaea;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 120vh;
  text-align: left;
  padding: 70px;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 0;
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBurger = styled.button<Menu>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#0D0C1D")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) =>
        open ? "translateY(2.5px)" : "translateY(0)"};
    }

    :nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateY(-2.5px)" : "translateY(0)"};
    }
  }
`;
