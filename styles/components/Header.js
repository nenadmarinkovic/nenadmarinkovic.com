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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Home = styled.a`
  text-decoration: none;
  font-size: 17px;
  transition: 0.3s;
  color: ${({ theme }) => theme.text};

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
    border-radius: 5px;
  }
`;

export const Button = styled.div`
  background: transparent;
  color: white;
  border: none;
  paddig: 5px;
  text-decoration: none;
  font-size: 17px;
  transition: 0.3s;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 204, 249, 0.4);
    border-radius: 5px;
  }
`;
