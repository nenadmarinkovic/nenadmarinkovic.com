import styled from "styled-components";

export const TagWrap = styled.div`
  padding: 7px 20px;
  color: white;
  border-radius: 30px;
  font-weight: bold;
  margin: 10px 10px 0 0;
  width: fit-content;

  &.green {
    border: 2px solid #7ec130;
    background: #7ec130;
  }

  &.blue {
    border: 2px solid #00dfd8;
    background: #00dfd8;
  }
`;
