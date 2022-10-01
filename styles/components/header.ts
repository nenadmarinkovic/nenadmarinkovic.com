import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1.5rem 0 1rem;
  border-bottom: ${({ theme }) => theme.headerBorder};
  background: ${({ theme }) => theme.background};
  backdrop-filter: saturate(70%) blur(3px);
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

export const Logo = styled.a`
  color: ${({ theme }) => theme.color};
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  margin-left: 4.5rem;
  font-size: 0.95rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color};
`;
