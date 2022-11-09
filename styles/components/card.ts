import styled from "styled-components";

export const Cards = styled.div``;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  &.row-reverse {
    flex-direction: row-reverse;
  }

  &.row {
    flex-direction: row;
  }
`;

export const Text = styled.div`
  width: 45%;
  color: ${({ theme }) => theme.color};
`;

export const Box = styled.div`
  padding: 1.5rem;
  height: 375px;
  width: 375px;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.blue {
    background: linear-gradient(270.48deg, #00dfd8 -4.99%, #0070f5 99.13%);
  }

  &.green {
    background: linear-gradient(270.48deg, #7ec130 -4.99%, #45671f 99.13%);
  }

  &.orange {
    background: linear-gradient(270.48deg, #ffa400 -4.99%, #ff5b00 99.13%);
  }
`;

export const BoxItems = styled.div`
  margin-top: 2.5rem;
`;

export const BoxItem = styled.div`
  margin-top: 2.5rem;
  display: flex;
`;

export const BoxItemIcon = styled.div``;

export const BoxItemText = styled.div`
  color: #fff;
  margin-top: -5px;
  line-height: 1.6;
  margin-left: 1rem;
`;

export const Title = styled.div`
  margin-top: 1rem;
  font-size: 1.95rem;
  line-height: 1.5;
  font-weight: 900;
  color: ${({ theme }) => theme.color};
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.descColor};
  font-size: 1.15rem;
  line-height: 1.9;
  margin-top: 1rem;
`;

export const BoxTitle = styled.div`
  font-size: 1.85rem;
  font-weight: 700;
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
  cursor: pointer;

  svg {
    transition: 0.25s;
  }

  &.opened-box {
    svg {
      transform: rotate(-45deg);
    }
  }
`;
