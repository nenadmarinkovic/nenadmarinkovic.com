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

export const HomeLink = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.color};

  &[aria-current] {
    font-weight: bold;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

export const HeaderLink = styled.a`
  width: 85px;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color};

  &[aria-current] {
    font-weight: bold;
  }
`;

export const ContactButton = styled.button`
  padding: 8.5px 15px;
  border-radius: 7px;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: ${({ theme }) => theme.backgroundReverse};
  cursor: pointer;
  color: ${({ theme }) => theme.colorReverse};
`;
