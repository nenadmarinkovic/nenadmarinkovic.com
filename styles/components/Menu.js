import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #e8f3fb;
  display: ${({ open }) => (open ? "" : "none")};
  height: 380px;
  padding: 2rem;
  position: absolute;
  top: 0px;
  right: 0px;
  border-bottom-left-radius: 23px;
  overflow: hidden;
  z-index: 10;
  text-align: center;
  box-shadow: ${({ theme }) => theme.menuShadow};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderLink = styled.div`
  padding: 0 25px;
  a {
    text-decoration: none;
    font-size: 19px;
    transition: 0.3s;
    color: ${({ theme }) => theme.text};
  }
`;

export const Button = styled.button`
  background: transparent;
  margin-top: 20px;
  color: white;
  border: none;
  padding: 10px;
  text-decoration: none;
  font-size: 17px;
  transition: 0.3s;
  cursor: pointer;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 10px;

  :hover {
    background: #c6e1f5;
    border-radius: 10px;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
    border-radius: 5px;
  }
`;

export const MenuLinks = styled.div`
  margin-top: 40px;
`;
