import styled from "styled-components";

export const FooterWrap = styled.footer`
  border-top: ${({ theme }) => theme.headerAndMenuBorder};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  color: #fff;
  padding: 2.5rem;
  margin-top: 10.5rem;

  @media (max-width: 48rem) {
    padding: 0 0 2.5rem 0;
  }
`;

export const FooterItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  background: ${({ theme }) => theme.background};
  width: fit-content;
  min-height: 40px;

  svg {
    min-width: 31px;
    min-height: 31px;
  }
`;

export const FooterItemText = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color};
  line-height: 1.5;
  margin-left: 10px;
  font-size: 0.9rem;
`;

export const BottomText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color};
  padding-top: 2.5rem;
  font-size: 0.9rem;
  margin-bottom: 0;
`;
