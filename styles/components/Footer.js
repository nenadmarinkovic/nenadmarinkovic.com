import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  top: 120px;
  bottom: 0;
  background: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.text};
`;

export const Wave = styled.div`
  filter: ${({ theme }) => theme.filterWave};
  height: 30px;
`;
