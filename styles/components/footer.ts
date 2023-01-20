import styled from "styled-components";

export const FooterWrap = styled.div`
  border-top: ${({ theme }) => theme.headerAndMenuBorder};
  background: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.color};
  color: #fff;
  padding-top: 2.5rem;
  margin-top: 20rem;
`;

export const FooterItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  border: ${({ theme }) => theme.headerAndMenuBorder};
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
  width: fit-content;
`;

export const FooterItemText = styled.p`
  display: flex;
  align-items: center;
  font-family: monospace;
  color: ${({ theme }) => theme.color};
  line-height: 1.5;
  margin-left: 10px;
`;

export const BottomText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color};
  margin-top: 3rem;
  font-size: 0.85rem;
`;
