import styled from "styled-components";

export const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagButtonsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media (max-width: 45rem) {
    margin-top: 1.5rem;
  }
`;

export const TagSpan = styled.span`
  font-family: monospace;
  padding: 5px 15px;
  color: white;
  border-radius: 30px;
  font-weight: bold;
  margin: 0.5rem 0.5rem 0 0;
  font-size: 0.8rem;
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

  &.teal {
    background: #168dc7;
  }

  &.velvet {
    background: #842C90;
  }

  &.black {
    background: ${({ theme }) => theme.backgroundLightReverse};
    color: ${({ theme }) => theme.colorReverse};
  }
`;

export const TagCategory = styled.button`
  padding: 0;
  border: ${({ theme }) => theme.tagBorder};
  cursor: pointer;
  margin: 0.75rem 0.75rem 0 0;
  font-family: monospace;
  padding: 5px 15px;
  color: #fff;
  border-radius: 30px;
  font-weight: bold;
  font-size: 0.8rem;
  font-weight: 700;

  &.default {
    background: ${({ theme }) => theme.grayButton};
    color: ${({ theme }) => theme.color};
  }

  :hover {
    transition: 0.2s;
    transform: scale(1.08);
  }
`;
