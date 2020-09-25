import styled from "styled-components";

export const Button = styled.button`
<<<<<<< HEAD
  display: inline-block;
  padding: 8px 15px;
  width: 120px;
  height: 40px;
=======
display: inline-block;
  margin-top: 10px;
  padding: 8px 15px;
  width: 130px;
>>>>>>> 021394146544ac54163f95ffafdbe85b5c113dcf
  color: ${({ theme }) => theme.buttonColor};
  border: ${({ theme }) => theme.buttonBorder};
  background: transparent;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 18px;

<<<<<<< HEAD
  @media (max-width: 460px) {
    width: 135px;
  }

=======
>>>>>>> 021394146544ac54163f95ffafdbe85b5c113dcf
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;
