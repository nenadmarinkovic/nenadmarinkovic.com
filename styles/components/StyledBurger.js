import styled from "styled-components";

export const StyledBurger = styled.div`
  position: absolute;
  top: 16px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: .3s;
  z-index: 12;

  :hover {
    transform: scale(1.15);
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
    border-radius: 5px;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.menuColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
