import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;

  &.row-reverse {
    flex-direction: row-reverse;
  }

  &.row {
    flex-direction: row;
  }
`;

export const Text = styled.div`
  margin-top: 1.5rem;
  width: 45%;
`;

export const Box = styled.div`
  padding: 1.25rem;
  height: 300px;
  width: 40%;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.pink {
    background: linear-gradient(270.48deg, #FF0080 -4.99%,  #7928CA 99.13%);
  }
  
  &.blue {
    background: linear-gradient(270.48deg, #00DFD8  -4.99%, #007CF0 99.13%);
  }
  
  &.green {
    background: linear-gradient(270.48deg, #7ec130 -4.99%, #45671F 99.13%);
  }
`;

export const Title = styled.div`
  font-size: 2.3rem;
  font-weight: 900;
`;

export const Description = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  margin-top: 1rem;
`;

export const BoxTitle = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
`;

export const BoxText = styled.div`
  color: #fff;
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.8;
`;

export const BoxIcon = styled.div`
align-self: end;
`;
