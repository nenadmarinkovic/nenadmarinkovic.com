import styled from "styled-components";

export const Title = styled.h1`
  margin: 15px 0;
  font-size: 38px;
  font-weight: 700;
  line-height: 1.4;

  @media (max-width: 460px) {
    font-size: 35px;
  }
`;

export const Subtitle = styled.div`
  margin: 15px 0;
  font-size: 23px;
  font-weight: 400;
  line-height: 1.8;
  color: ${({ theme }) => theme.subtitleText};

  @media (max-width: 460px) {
    font-size: 18px;
  }
`;

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

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const Info = styled.div`
  padding-top: 130px;
  width: 90%;
  position: relative;
  line-height: 1.6;

  @media (max-width: 960px) {
    padding-top: 20px;
    width: 100%;
    text-align: center;
    height: unset;
  }

  @media (max-width: 460px) {
    padding-top: 20px;
  }
`;
