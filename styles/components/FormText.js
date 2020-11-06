import styled from "styled-components";

export const Text = styled.main`
  width: 40%;
  font-size: 21px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  border: none;
  color: ${({ theme }) => theme.text};
  background: transparent;
  font-size: 23px;
  font-weight: 500;
  line-height: 1.5;
  padding: 0;
  cursor: pointer;
  font-family: "Steradian";

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
    border-radius: 5px;
  }

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export const RocketText = styled.div`
  padding-top: 10px;

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;
