import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1.5rem 0 1rem;
  border-bottom: ${({ theme }) => theme.headerBorder};
  background: ${({ theme }) => theme.headerBackground};
  backdrop-filter: saturate(70%) blur(3px);
  z-index: 2;
`;

export const Top = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background: #000;
  height: 0.5rem;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeLink = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.color};

  a {
    color: ${({ theme }) => theme.color};
    &[aria-current] {
      font-weight: bold;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

export const HeaderLink = styled.div`
  width: 85px;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color};

  a {
    color: ${({ theme }) => theme.color};
    &[aria-current] {
      font-weight: bold;
    }
  }
`;

export const ThemeButton = styled.button`
  padding: 1.5px;
  background: transparent;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color};
`;

export const ContactButton = styled.button`
  padding: 8.5px 15px 10px;
  border-radius: 7px;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: #0070f5;
  cursor: pointer;
  color: #fff;
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
