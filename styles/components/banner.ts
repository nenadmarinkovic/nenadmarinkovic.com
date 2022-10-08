import styled from "styled-components";

export const BannerWrap = styled.div`
  padding-top: 1.5rem;
  background: ${({ theme }) => theme.background};
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.color};

  span {
    display: block;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 1.25rem;
  line-height: 1.9;
  width: 70%;
`;
