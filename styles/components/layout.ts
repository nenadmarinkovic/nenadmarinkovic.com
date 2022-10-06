import styled from "styled-components";

export const ThemeLayout = styled.div`
  background: ${({ theme }) => theme.background};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 52rem;
  width: 100%;
`;

// Delete later

export const CustomHeight = styled.div`
  height: 3000px;
`;
