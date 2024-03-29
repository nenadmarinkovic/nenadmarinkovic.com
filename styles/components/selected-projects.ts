import styled from 'styled-components';

export const Window = styled.div`
  overflow: hidden;
  line-height: 1.9;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  min-height: 305px;

  @media (max-width: 38rem) {
    flex-direction: column;
  }
`;

export const Nav = styled.nav``;

export const UlProjects = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  height: 100%;
`;

export const Visit = styled.div`
  margin-top: auto;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color};

  @media (max-width: 38rem) {
    margin: 1.5rem 0;
  }
`;

export const WindowInside = styled.div`
  width: 55%;
  color: #6b7786;
  font-size: 1.15rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 38rem) {
    width: 100%;
  }
`;

export const DescLink = styled.a`
  color: ${({ theme }) => theme.color};
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  margin-top: auto;
  font-size: 1rem;
  margin-left: auto;

  span {
    display: block;
  }

  svg {
    margin-left: 5px;
  }

  @media (max-width: 38rem) {
    margin-top: 1rem;
    justify-content: start;
    margin-left: unset;
  }
`;

export const LiProjects = styled.button`
  display: flex;
  width: 100%;
  font-size: 1.95rem;
  line-height: 1.5;
  font-weight: 900;
  cursor: pointer;
  color: ${({ theme }) => theme.unselectedColor};
  background: none;
  border: none;
  padding: 0;

  &:not(:first-child) {
    margin-top: 1rem;
  }

  &.selected-project {
    color: ${({ theme }) => theme.color};
  }

  @media (max-width: 35rem) {
    margin-top: 0;
  }
`;
