import styled from "styled-components";

export const TagWrap = styled.div`
  display: flex;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;

export const TagSpan = styled.span`
  font-family: monospace;
  padding: 5px 10px;
  color: white;
  border-radius: 30px;
  font-weight: bold;
  margin: 0.75rem 0.75rem 0 0;
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

// Tag Button styles

export const TagCategory = styled.button`
  color: inherit;
  padding: 0;
  border: none;
  cursor: pointer;
  margin: 0.75rem 0.75rem 0 0;
  font-family: monospace;
  padding: 5px 10px;
  color: white;
  border-radius: 30px;
  font-weight: bold;
  font-size: 0.75rem;
  font-weight: 700;

  &.default {
    background: ${({ theme }) => theme.backgroundReverse};
    color: ${({ theme }) => theme.colorReverse};
  }
`;
