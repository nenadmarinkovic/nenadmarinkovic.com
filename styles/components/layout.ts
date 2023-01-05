import styled from "styled-components";

type Menu = {
  openMenu: boolean;
};

type Flex = {
  align?: string;
  justify?: string;
  mobile?: string;
};

export const ThemeLayout = styled.div<Menu>`
  background: ${({ theme }) => theme.background};
  opacity: ${({ openMenu }) => (openMenu ? "0.3" : "1")};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 52.8rem;
  width: 100%;
  padding: 0 15px;
`;

export const Flex = styled.div<Flex>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};

  @media (max-width: 25rem) {
    flex-wrap: wrap;
  }
`;
