import styled from "styled-components";

type Menu = {
  openMenu: boolean;
};

type Flex = {
  align?: string;
  justify?: string;
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

  @media (max-width: 25rem) {
    max-width: 100%;
  }
`;

export const Flex = styled.div<Flex>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};

  @media (max-width: 45rem) {
    flex-wrap: wrap;
    flex-direction: column
  }
`;
