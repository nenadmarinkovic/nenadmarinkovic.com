import styled from "styled-components";

export const Introduction = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 1.25rem;
  line-height: 1.9;
  width: 76%;

  @media (max-width: 48rem) {
    margin-top: 1rem;
    width: 100%;
  }
`;
