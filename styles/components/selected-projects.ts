import styled from "styled-components";

export const Window = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  @media (max-width: 38rem) {
    flex-direction: column;
  }
`;

export const Nav = styled.nav``;

export const UlProjects = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

export const WindowInside = styled.div`
  width: 50%;
  color: #757575;
  font-size: 1.15rem;
  line-height: 1.9;
  margin-top: 1rem;

  @media (max-width: 38rem) {
    width: 100%;
  }
`;

export const LiProjects = styled.button`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  font-size: 1.95rem;
  line-height: 1.5;
  font-weight: 900;
  color: #eaeaea;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &.selected-project {
    color: #000;
  }

  @media (max-width: 35rem) {
    margin-top: 0
  }
`;
