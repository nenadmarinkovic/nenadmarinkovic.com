import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #E3F0FA;
  display: ${({ open }) => (open ? "" : "none")};
  height: 350px;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  border-bottom-left-radius: 23px;
  overflow: hidden;
  z-index: 10;
  text-align: center;
  box-shadow: ${({ theme }) => theme.menuShadow};

`;

export const HeaderLink = styled.div`
  padding: 0 15px;
  a {
    text-decoration: none;
    font-size: 19px;
    transition: 0.3s;
    color: ${({ theme }) => theme.text};
  }
`;

export const Button = styled.button`
  background: transparent;
  margin-top: 25px;
  color: white;
  border: none;
  padding: 10px 15px;
  text-decoration: none;
  font-size: 15px;
  transition: 0.3s;
  cursor: pointer;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 18px;

  :hover {
    background: #c6e1f5;
    border-radius: 18px;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
    border-radius: 18px;
  }
`;

export const MenuLinks = styled.div`
  margin-top: 40px;
`;
