import styled from "styled-components";

export const Wrapper = styled.div`
  transition: 0.3s;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BannerWrapper = styled.div`
  height: 450px;
  width: 1120px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 15px 0 15px;
`;

export const Info = styled.div`
  padding-top: 140px;
  width: 47%;
`;

export const Subtitle = styled.h6`
  padding: 8px 0 15px;
  margin: 0;
  font-size: 19px;
  line-height: 1.6;
  transition: 0.3s;
  color: ${({ theme }) => theme.subtitleText};
`;

export const Title = styled.h1`
  padding: 10px 0 10px;
  margin: 0;
  font-size: 38px;
`;
