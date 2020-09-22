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
`;

export const Wave = styled.div`
  filter: ${({ theme }) => theme.filterWave};
  height: 30px;
`;
