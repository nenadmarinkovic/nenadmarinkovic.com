import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled.div`
  padding: 0 25px;
  a {
    text-decoration: none;
    font-size: 17px;
    transition: 0.3s;
    color: ${({ theme }) => theme.text};
  }
`;

export const Home = styled.a`
  text-decoration: none;
  font-size: 17px;
  transition: 0.3s;
  color: ${({ theme }) => theme.text};
`;
