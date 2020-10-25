import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled.div`
  padding: 10px 15px;
  border-radius: 18px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Home = styled.a`
  text-decoration: none;
  font-size: 17px;
  transition: 0.3s;
  margin-left: -15px;
  padding: 7px 15px;
  border-radius: 18px;
  color: ${({ theme }) => theme.text};

  @media (max-width: 380px) {
    margin-left: 0;
    padding: 0;
  }

  :hover {
    background: ${({ theme }) => theme.subtitleText};
    color: white;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
    border-radius: 18px;
  }
`;

export const Button = styled.button`
  background: transparent;
  color: white;
  border: none;
  padding: 7px 15px;
  border-radius: 18px;
  text-decoration: none;
  font-size: 17px;
  transition: 0.3s;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  :hover {
    background: ${({ theme }) => theme.subtitleText};
    color: white;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 204, 249, 0.4);
    border-radius: 18px;
  }
`;
