import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const BannerWrapper = styled.div`
  height: 480px;
  width: 1160px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 15px 0 15px;

  @media (max-width: 960px) {
    height: 380px;
  }

  @media (max-width: 460px) {
    height: 430px;
  }
`;

export const Info = styled.div`
  padding-top: 140px;
  width: 90%;

  @media (max-width: 960px) {
    padding-top: 40px;
    width: 100%;
    text-align: center;
    height: unset;
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
  margin: 10px 0 10px;
`;

export const Subtitle = styled.h6`
  font-size: 21px;
  font-weight: 400;
  line-height: 1.8;
  color: ${({ theme }) => theme.subtitleText};
  margin: 10px 0 15px;
`;
