import styled from "styled-components";

export const PortfolioWrap = styled.div`
  background-color: ${({ theme }) => theme.portfolioBackground};
  margin-top: -20px;
`;

export const FlexWrap = styled.div`
  margin-top: 30px;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const PortfolioIntro = styled.div`
  margin-top: -120px;
  padding-bottom: 60px;
  color: ${({ theme }) => theme.text};

  @media (max-width: 960px) {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const PortfolioInfo = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const PortfolioIntroMain = styled.div`
  margin-top: 95px;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text};
  padding-top: 20px;

  @media (max-width: 960px) {
    margin-top: 0;
  }
`;

export const PortfolioIntroSecond = styled.div`
  font-size: 21px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin: 0 auto;
  padding-top: 20px;
  line-height: 1.5;
  width: 50%;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 20px;
    line-height: 1.7;
  }

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export const SlideContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const SlideInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  overflow: hidden;
  justify-content: space-between;
  margin-bottom: -10px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const SlideInfoTitle = styled.h1`
  font-weight: 700;
  font-size: 2em;
  margin-bottom: 0.66em;
  color: ${({ theme }) => theme.text};
`;

export const SlideInfoDescription = styled.p`
  line-height: 1.7em;
  font-size: 17px;
  color: ${({ theme }) => theme.text};
  width: 600px;

  @media (max-width: 960px) {
   width: 100%;
  }

`;

export const SlideCountTitle = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.text};

  @media (max-width: 960px) {
    display: none;
  }
`;

export const SlideCount = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 4em;
  margin-top: 0.5em;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
`;

export const SlideDetails = styled.div`
  width: 780px;
  background: white;
  border-radius: 18px;
  color: #040428;
  padding: 30px;
  box-shadow: ${({ theme }) => theme.cardShadow};

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  text-align: end;
`;

export const SlideDetailsTitle = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 23px;
  margin: 0;
  padding-bottom: 20px;
`;

export const SlideSubtitle = styled.h3`
  color: rgb(14, 144, 219);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 13px;
  padding-bottom: 5px;
`;

export const FlexDiv = styled.h3`
  display: flex;
  justify-content: space-between;
`;

export const SlideDetailsDescription = styled.p`
  font-size: 0.8em;
  line-height: 1.3em;
  font-size: 16px;
`;

export const SlideArrows = styled.div`
  text-align: center;
  margin-top: 40px;

  @media (max-width: 960px) {
    margin-top: 0;
  }
`;

export const WebLink = styled.a`
  text-decoration: none;
  color: #040428;
`;

export const PrevArrow = styled.svg`
  fill: ${({ theme }) => theme.text};
`;

export const NextArrow = styled.svg`
  fill: ${({ theme }) => theme.text};
`;
