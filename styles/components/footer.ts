import styled from "styled-components";

export const FooterWrap = styled.div`
  border-top: ${({ theme }) => theme.headerAndMenuBorder};
  background: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.color};
  height: 400px;
  color: #fff;
  padding-top: 3rem;
  margin-top: 400px;

`;
