import styled from "styled-components";

export const FormWrap = styled.div`
  width: 100%;
  margin: 2.5rem 0;
  font-size: 21px;
  line-height: 1.65;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: grid;
  grid-row-gap: 0.75em;
`;

export const FormLabel = styled.label`
  color: #757575;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const FormInput = styled.input`
  margin: 0;
  color: ${({ theme }) => theme.color};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5em;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: ${({ theme }) => theme.color};
  padding: 0.5em;
  background: none;
  line-height: 1;
  font-size: 1rem;
  font-family: inherit;
  height: 180px;
  resize: vertical;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.activeButton};
  padding: 0.65em 1em;
  color: ${({ theme }) => theme.activeButtonColor};
  border: 1px solid ${({ theme }) => theme.activeButtonColor};
  border-radius: 10px;
  cursor: pointer;
  line-height: 1;
  font-size: 1rem;
  letter-spacing: 0.6px;
  font-weight: bold;
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.color};
  margin-top: 1rem;
  text-align: center;
  border-radius: 20px;
  padding: 8px;
  font-size: 1rem;
`;

export const Message = styled.p`
   color: ${({ theme }) => theme.color};
   font-size: 1rem;
`;
