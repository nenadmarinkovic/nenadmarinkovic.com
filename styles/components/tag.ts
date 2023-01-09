import styled from "styled-components";

export const TagButton = styled.button`
  display: flex;
  background: transparent;
  color: inherit;
  padding: 0;
  border: none;
  margin-right: 10px;
`;

export const TagSpan = styled.span`
  font-family: monospace;
  padding: 5px 10px;
  color: white;
  border-radius: 30px;
  font-weight: bold;
  font-size: 0.75rem;
  font-weight: 700;

  &.green {
    background: #457e03;
  }

  &.blue {
    background: #0070f5;
  }

  &.orange {
    background: #c75216;
  }

  &.black {
    background: ${({ theme }) => theme.backgroundReverse};
    color: ${({ theme }) => theme.colorReverse};
  }
`;
