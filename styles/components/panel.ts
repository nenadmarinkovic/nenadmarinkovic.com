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

  @media (max-width: 48rem) {
    padding: 50px 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
  margin: 0;
`;

export const Text = styled.p`
  font-size: 1.15rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
`;

export const PanelButton = styled.button`
  background: ${({ theme }) => theme.activeButton};
  padding: 0.65em 1.8em;
  color: ${({ theme }) => theme.activeButtonColor};
  border: 1px solid ${({ theme }) => theme.activeButtonColor};
  border-radius: 8px;
  cursor: pointer;
  line-height: 1;
  font-size: 0.9rem;
  letter-spacing: 0.6px;
  font-weight: bold;
`;
