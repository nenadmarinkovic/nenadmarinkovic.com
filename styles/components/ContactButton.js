import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 15px;
  height: 40px;
  width: 130px;
  color: ${({ theme }) => theme.text};
  border: ${({ theme }) => theme.buttonBorder};
  background: transparent;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Steradian";
  border-radius: 18px;
  transition: 0.3s;

  @media (max-width: 460px) {
    width: 135px;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }

  :hover {
    background: ${({ theme }) => theme.subtitleText};
    border: 2px solid ${({ theme }) => theme.subtitleText};
    color: white;
  }
`;
