import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 48rem;
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  &.row-reverse {
    flex-direction: row-reverse;
  }

  &.row {
    flex-direction: row;
  }
`;
