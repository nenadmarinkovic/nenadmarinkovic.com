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
  color: ${({ theme }) => theme.labelColor};
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
  border-radius: 8px;
  padding: 0.35rem;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 8px;
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
  background: ${({ theme }) => theme.grayButton};
  color: #000;
  padding: 0.65em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.activeButtonColor};
  border-radius: 8px;
  cursor: pointer;
  line-height: 1;
  font-size: 0.9rem;
  letter-spacing: 0.6px;
  font-weight: 700;

  span {
    display: block;
  }

  svg {
    margin-left: 5px;
    transition: .3s;
  }

  :hover {
  

    svg {
      transform: translateX(10px);
    }
  }
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
