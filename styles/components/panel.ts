import styled from "styled-components";

export const PanelWrap = styled.div`
  margin: 10.5rem 0;
  padding: 200px 100px;
  border-radius: 1rem;
  position: relative;
  background: linear-gradient( 227.71deg, #ff0080 9.64%, #60a9fc 50.62%, #7ec130 89.11% )
`;

export const PanelInside = styled.div`
  transition: 0.25s;
  padding: 50px 110px;
  content: "";
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  position: absolute;
  left: 15px;
  top: 15px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
`;

export const Text = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
`;
