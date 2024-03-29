import styled from 'styled-components';

export const FooterWrap = styled.footer`
  border-top: ${({ theme }) => theme.headerAndMenuBorder};
  background: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.color};
  padding: 1.5rem 0;
  margin-top: 8rem;

  @media (max-width: 35rem) {
    margin-top: 0;
  }
`;

export const FooterItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  background: ${({ theme }) => theme.footerBackground};
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
  color: ${({ theme }) => theme.colorLight};
  padding-top: 1.5rem;
  font-size: 0.9rem;
  margin: 0;
`;
