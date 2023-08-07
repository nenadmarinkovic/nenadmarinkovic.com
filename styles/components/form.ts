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
  border: 1px solid #CFD5DB;
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
  border: 1px solid #CFD5DB;
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
  color: ${({ theme }) => theme.color};
  padding: 10px 35px;
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
  width: 35%;
  margin-left: auto;
  height: fit-content;

  span {
    display: block;
  }

  svg {
    margin-left: 5px;
    transition: 0.3s;
    fill: ${({ theme }) => theme.color};

    path {
      fill: ${({ theme }) => theme.color};
      stroke: ${({ theme }) => theme.color};
    }
  }

  :hover {
    svg {
      transform: translateX(10px);
    }
  }

  @media (max-width: 35rem) {
    width: 100%;
  }
`;

export const FormBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 35rem) {
    flex-direction: column-reverse;
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

export const FormText = styled.p`
  color: ${({ theme }) => theme.colorLight};
  margin-top: 1rem;
  padding: 0;
  font-size: 0.9rem;
  margin: 0 5rem 0 0;

  @media (max-width: 35rem) {
    margin-top: 1rem;
    margin: 1rem 0;
  }
`;
