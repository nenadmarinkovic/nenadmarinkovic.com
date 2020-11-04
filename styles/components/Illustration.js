import styled, { keyframes } from "styled-components";

export const SVG = styled.svg`
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  margin-top: 50px;

  @media (max-width: 960px) {
    width: 100%;
    margin-top: -20px;
  }

  @media (max-width: 768px) {
    margin-top: -10px;
  }

  @media (max-width: 462px) {
    margin-top: -85px;
  }
  
`;

export const Moon = styled.g`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const revealLight = keyframes`
  from {
    visibility: unset;
    clip-path: inset(0 0 0 100%);
  }
  to {
      visibility: unset;
    clip-path: inset(0 0 0 0);
  }
  `;

export const revealStripes = keyframes`
from {
  visibility: unset;
  clip-path: inset(0 100% 0 0);
}
to {
    visibility: unset;
  clip-path: inset(0 0 0 0);
}
  `;

export const Light = styled.g`
  display: ${({ theme }) => theme.displaySky};
  visibility: hidden;
  animation: ${revealLight} 5s forwards 3.5s;
`;

export const animatedStars = keyframes`
  0%   { visibility: unset; opacity: 0; transform: scale(0.4); }
  100% { visibility: unset; opacity: 1; transform: scale(1); }
}
`;

export const Star = styled.g`
  display: ${({ theme }) => theme.displaySky};

  visibility: hidden;
  animation: ${animatedStars} 5s forwards 1.3s;
`;

export const opacityAnimation = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
`;

export const Night = styled.g`
  display: ${({ theme }) => theme.displaySky};
  animation: ${opacityAnimation} ease 10s;
`;

export const Cloud = styled.g`
  display: none;
`;

export const Flower = styled.g``;

export const Screen = styled.path`
  fill: ${({ theme }) => theme.screenBackground};
`;

export const Stripe1 = styled.g``;

export const Stripe2 = styled.g`
  animation: ${revealStripes} 5s 1.3s infinite;
`;

export const Stripe3 = styled.g`
  animation: ${revealStripes} 5s 2.3s infinite;
`;

export const Stripe4 = styled.g`
  animation: ${revealStripes} 5s 3.3s infinite;
`;

export const Stripe5 = styled.g`
  animation: ${revealStripes} 5s 2.3s infinite;
`;

export const Stripe6 = styled.g`
  animation: ${revealStripes} 5s 0.3s infinite;
`;

export const Stripe7 = styled.g`
  animation: ${revealStripes} 5s 6.3s infinite;
`;

export const Stripe8 = styled.g`
  animation: ${revealStripes} 5s 2.3s infinite;
  visibility: hidden;
`;

export const Stripe9 = styled.g`
  animation: ${revealStripes} 5s 5.3s infinite;
  visibility: hidden;
`;
