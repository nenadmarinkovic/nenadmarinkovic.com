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
  padding: 80px;
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

  a {
    margin: 0 auto;
  }

  @media (max-width: 35rem) {
    padding: 50px 20px;
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
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: auto;
  text-align: center;
  background: ${({ theme }) => theme.grayButton};
  color: #000;
  padding: 7.5px 30px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 700;
  transition: .5s;


  span {
    display: block;
  }

  svg {
    margin-left: 5px;
    transition: .3s;
  }

  :hover {
    transform: scale(1.08);

    svg {
      transform: translateX(10px);
    }
  }
`;
