import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1.5rem 0 1rem;
  border-bottom: 1px solid #eaeaea;
  background: hsla(0, 0%, 100%, 0.9);
  backdrop-filter: saturate(70%) blur(3px);
`;

export const Top = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background: #000;
  height: 0.5rem;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a``;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  margin-left: 4.5rem;
  font-size: 0.95rem;
`;
