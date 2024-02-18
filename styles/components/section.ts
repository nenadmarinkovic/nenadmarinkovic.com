import styled from 'styled-components';

export const Title = styled.div`
  padding: 8rem 0 1.5rem 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.descColor};
  font-weight: bold;

  @media (max-width: 48rem) {
    padding: 3.5rem 0 0.5rem 0;
  }
`;
