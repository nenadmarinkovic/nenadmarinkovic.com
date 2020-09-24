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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 380px;
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
  font-size: 2.35rem;
  font-weight: 700;
  padding: 10px 0 10px;
  margin: 0;
`;

export const Subtitle = styled.h6`
  font-size: 21px;
  font-weight: 400;
  line-height: 1.6;
  transition: 0.3s;
  color: ${({ theme }) => theme.subtitleText};
  padding: 8px 0 15px;
  margin: 0;

  @media (max-width: 960px) {
    margin-bottom: 20px;
  }
`;
