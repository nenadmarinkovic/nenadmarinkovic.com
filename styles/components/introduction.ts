import styled from "styled-components";

export const Introduction = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 1.25rem;
  margin: 0;
  line-height: 1.9;
  width: 78.5%;

  @media (max-width: 48rem) {
    margin-top: 1rem;
    width: 100%;
  }
`;
