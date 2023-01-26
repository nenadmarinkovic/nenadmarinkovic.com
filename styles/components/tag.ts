import styled from "styled-components";

export const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagButtonsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media (max-width: 45rem) {
    margin-top: 1.5rem;
  }
`;

export const TagSpan = styled.span`
  font-family: monospace;
  padding: 5px 10px;
  color: white;
  border-radius: 30px;
  font-weight: bold;
  margin: 0.5rem 0.5rem 0 0;
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
    background: ${({ theme }) => theme.backgroundLightReverse};
    color: ${({ theme }) => theme.colorReverse};
  }
`;

// Tag Button styles

export const TagCategory = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  margin: 0.75rem 0.75rem 0 0;
  font-family: monospace;
  padding: 5px 10px;
  color: #fff;
  border-radius: 30px;
  font-weight: bold;
  font-size: 0.75rem;
  font-weight: 700;
  transition: 0.3s;

  &.default {
    background: ${({ theme }) => theme.grayButton};
    color: #000;
  }

  :hover {
    transform: scale(1.08);
  }
`;
