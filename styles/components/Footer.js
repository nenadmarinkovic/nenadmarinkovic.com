import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  top: 120px;
  bottom: 0;
  background: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.text};

  @media (max-width: 960px) {
    top: 40px;
  }

  @media (max-width: 460px) {
    top: 0px;
  }

  @media (min-width: 1480px) {
    top: 180px;
  }
`;

export const Wave = styled.div`
  height: 30px;
`;

export const WaveSVG = styled.svg`
  fill: ${({ theme }) => theme.filterWave};
`;
