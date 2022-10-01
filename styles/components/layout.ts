import styled from "styled-components";

export const ThemeLayout = styled.div`
  background: ${({ theme }) => theme.background};
  padding-bottom: 5rem;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 48rem;
  width: 100%;
`;
