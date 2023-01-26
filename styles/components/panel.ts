import styled from "styled-components";

export const PanelWrap = styled.div`
  margin: 10.5rem 0;
  padding: 200px;
  border-radius: 1rem;
  position: relative;
  background: linear-gradient(
    227.71deg,
    #ff5b00 9.64%,
    #60a9fc 50.62%,
    #7ec130 89.11%
  );

  @media (max-width: 35rem) {
    padding: 210px 120px;
  }
`;

export const PanelInside = styled.div`
  padding: 0 50px;
  content: "";
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  position: absolute;
  left: 15px;
  top: 15px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  a {
    margin: 0 auto;
  }

  @media (max-width: 35rem) {
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
  margin: 0;
  font-weight: 900;

  @media (max-width: 35rem) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.descColor};
  font-size: 1.15rem;
  line-height: 1.9;
  margin-top: 1rem;

  @media (max-width: 35rem) {
    font-size: 1rem;
  }
`;

export const PanelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: auto;
  text-align: center;
  background: ${({ theme }) => theme.grayButton};
  color: ${({ theme }) => theme.color};
  padding: 7.5px 30px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.activeButtonColor};

  span {
    display: block;
  }

  svg {
    margin-left: 5px;
    transition: 0.3s;
    fill: ${({ theme }) => theme.color};

    path {
      fill: ${({ theme }) => theme.color};
      stroke: ${({ theme }) => theme.color};
    }
  }

  :hover {
    svg {
      transform: translateX(10px);
    }
  }
`;
