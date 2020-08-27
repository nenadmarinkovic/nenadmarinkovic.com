import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  visibility: visible;
  opacity: 1;
}
  `;

export const fade = keyframes`
0% {
  opacity: 0;
 
}
50% {
  visibility: visible;
  opacity: 1;
  
}

100% {
  opacity: 1;
  visibility: visible;
}
  `;

export const Lay9 = styled.g`
  animation: ${fade} 5s 6.5s ease;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const Lay8 = styled.g`
  animation: ${fade} 5s 6s ease;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const Lay7 = styled.g`
  animation: ${fade} 5s 5.5s ease;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const Lay6 = styled.g`
  animation: ${fade} 5s 5s ease;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const Lay5 = styled.g`
  animation: ${fade} 5s 4.5s ease;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const Lay4 = styled.g`
  animation: ${fade} 5s 4s ease;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const Lay3 = styled.g`
  animation: ${fade} 5s 3.5s ease;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const Lay2 = styled.g`
  animation: ${fade} 5s 3s ease;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const Lay1 = styled.g`
  animation: ${fade} 5s 2.5s ease;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const LayDivs = styled.g`
  animation: ${fadeIn} 3s 1s;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const ScreenSmall = styled.g``;

export const SmallScreenLines = styled.g`
  animation: ${fadeIn} 2s 7s;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const Screen = styled.polygon`
  fill: ${({ theme }) => theme.screenBackground};
`;
