import styled from "styled-components";

export const BannerWrap = styled.div`
  padding-top: 4rem;
  background: ${({ theme }) => theme.background};
`;

export const Text = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.color};

  span {
    display: block;
  }
`;
