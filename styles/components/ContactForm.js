import styled from "styled-components";

export const FlexContainer = styled.main`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainForm = styled.main`
  width: 48%;
  margin: 0;
  font-size: 21px;
  line-height: 1.65;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  display: grid;
  grid-row-gap: 1em;
`;
export const FormLabel = styled.label`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const FormInput = styled.input`
  margin: 0;
  border: ${({ theme }) => theme.formBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 0.5em;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s ease;
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const TextArea = styled.textarea`
  margin: 0;
  border: ${({ theme }) => theme.formBorder};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  padding: 0.5em;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s ease;
  height: 180px;
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const Button = styled.button`
  font-family: "Steradian";
  padding: 0.65em 1em;
  color: ${({ theme }) => theme.text};
  border: ${({ theme }) => theme.buttonBorder};
  border-radius: 18px;
  cursor: pointer;
  line-height: 1;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  transition: all 0.2s ease;
  background: transparent;

  :hover {
    background: ${({ theme }) => theme.subtitleText};
    border: 2px solid ${({ theme }) => theme.subtitleText};
    color: white;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const Error = styled.div`
  background: #ee0000;
  color: #fff;
  margin-top: 16px;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 16px;
`;

export const Copyright = styled.span`
  margin-top: 75px;
  display: block;
  text-align: center;
  padding: 20px 0;
`;
