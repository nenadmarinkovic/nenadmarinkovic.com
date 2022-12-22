import styled from "styled-components";

type Menu = {
  openMenu?: boolean;
};

export const ThemeLayout = styled.div<Menu>`
  background: ${({ theme }) => theme.background};
  opacity: ${({ openMenu }) => (openMenu ? "0.5" : "1")};
  min-height: 100vh;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 52rem;
  width: 100%;
  padding: 0 15px;
`;
