import styled from "styled-components";

type Menu = {
  openMenu: boolean;
};

type Flex = {
  align?: string;
  justify?: string;
};

export const MainSection = styled.section`
  flex: 1;
  padding-bottom: 5.5rem;
`;

export const ThemeLayout = styled.main<Menu>`
  background: ${({ theme }) => theme.background};
  opacity: ${({ openMenu }) => (openMenu ? "0.3" : "1")};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flex = styled.div<Flex>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};

  @media (max-width: 45rem) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const MDXContent = styled.div`
  h2 {
    margin: 3.5rem 0 0rem 0;
  }

  p {
    margin: 0.5rem 0 0 0;
  }

  a {
    color: ${({ theme }) => theme.color};
    font-size: 0.9rem;
    line-height: 1.9;
  }
`;
