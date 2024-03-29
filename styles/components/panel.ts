import styled from 'styled-components';

export const PanelWrap = styled.div`
  margin: 8rem 0px 5rem;
  padding: 200px;
  border-radius: 1rem;
  position: relative;
  background: linear-gradient(
    227.71deg,
    #ff5b00 9.64%,
    #60a9fc 50.62%,
    #7ec130 89.11%
  );
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: 35rem) {
    padding: 210px 120px;
  }
`;

export const PanelInside = styled.div`
  padding: 0 50px;
  content: '';
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

export const PanelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: auto;
  text-align: center;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  padding: 8px 35px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.activeButtonColor};

  span {
    display: block;
  }

  svg {
    margin-left: 5px;
    transition: 0.3s;
    fill: ${({ theme }) => theme.buttonColor};

    path {
      fill: ${({ theme }) => theme.buttonColor};
      stroke: ${({ theme }) => theme.buttonColor};
    }
  }

  :hover {
    svg {
      transform: translateX(10px);
    }
  }
`;
