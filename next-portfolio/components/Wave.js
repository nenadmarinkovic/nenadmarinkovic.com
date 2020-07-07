import React from "react";
import styled from "styled-components";

const WaveWrapper = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
`;

const WaveShape = styled.div`
  display: block;
  position: relative;
  height: 40px;
  z-index: -10;
  background: ${({ theme }) => theme.wave};

  :before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background-color: white;
    right: -25%;
    top: 20px;
  }

  :after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background: ${({ theme }) => theme.wave};
    left: -25%;
    top: -240px;
  }
`;

function Wave() {
  return (
    <WaveWrapper>
      <WaveShape/>
    </WaveWrapper>
  );
}

export default Wave;
