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
    background: #589c08;
  }

  &.blue {
    background: #117abe;
  }

  &.yellow {
    background: #e45a0e;
  }

  &.black {
    background: ${({ theme }) => theme.backgroundReverse};
    color: ${({ theme }) => theme.colorReverse};
  }
`;
