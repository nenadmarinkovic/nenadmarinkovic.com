import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 15px;
  margin-top: 20px;
  width: 130px;
  color: ${({ theme }) => theme.buttonColor};
  border: ${({ theme }) => theme.buttonBorder};
  background: transparent;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 18px;s
  font-family: "Steradian";

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;
