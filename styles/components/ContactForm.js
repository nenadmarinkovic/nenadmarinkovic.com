import styled from "styled-components";

export const FlexContainer = styled.main`
  display: flex;
  justify-content: space-between;
`;

export const MainForm = styled.main`
  width: 50%;
  max-width: 640px;
  margin: 0;
  font-size: 21px;
  line-height: 1.65;
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
`;

export const Button = styled.button`
  padding: 0.65em 1em;
  background: #2196f3;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  color: #fff;
  border: none;
  cursor: pointer;
  line-height: 1;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
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
