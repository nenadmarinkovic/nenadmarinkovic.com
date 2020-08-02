import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 15px;
  margin-top: 10px;
  color: ${({ theme }) => theme.buttonColor};
  border: ${({ theme }) => theme.buttonBorder};
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 18px;
  font-family: "Steradian";
`;