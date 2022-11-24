import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  border-bottom: ${({ theme }) => theme.headerBorder};
  background: ${({ theme }) => theme.headerBackground};
  backdrop-filter: saturate(70%) blur(3px);
  z-index: 2;

  @media (min-width: 47.95rem) {
    position: sticky;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeLink = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  transition: 0.3s;

  a {
    color: ${({ theme }) => theme.color};
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55%;

  @media (max-width: 47.95rem) {
    display: none;
  }
`;

export const HeaderLink = styled.div`
  width: 70px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color};
  transition: 0.3s;

  a {
    color: ${({ theme }) => theme.color};
  }
`;

export const ThemeButton = styled.button`
  width: 85px;
  padding: 1.5px;
  background: transparent;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color};
`;

export const Fixed = styled.div`
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalComponent = styled.div`
  display: flex;
  padding: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const MenuButton = styled.div`
  @media (min-width: 48rem) {
    display: none;
  }
`;
