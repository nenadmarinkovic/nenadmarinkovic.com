import styled from "styled-components";

export const TagWrap = styled.span`
  padding: 7px 20px;
  color: white;
  border-radius: 30px;
  font-weight: bold;
  margin: 10px 10px 0 0;
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 700;

  &.green {
    background: #457e03;
  }

  &.blue {
    background: #0070f5;
  }

  &.orange {
    background: #d04313;
  }

  &.black {
    background: ${({ theme }) => theme.backgroundReverse};
    color: ${({ theme }) => theme.colorReverse};
  }
`;
