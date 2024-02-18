import styled from 'styled-components';

export const BannerWrap = styled.div`
  padding-top: 2.5rem;
  background: ${({ theme }) => theme.background};
  margin-bottom: 1rem;

  &.no-margin {
    margin: 0;
  }

  @media (max-width: 48rem) {
    padding-top: 0;
  }
`;

export const Text = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.color};

  &.with-width {
    max-width: 300px;

    @media (max-width: 35rem) {
      max-width: unset;
    }
  }

  @media (max-width: 48rem) {
    font-size: 2.5rem;
  }

  span {
    display: block;
  }
`;
