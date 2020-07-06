import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  width: 80px;
  height: 30px;
`;

const Toggle = ({ toggleTheme }) => {
  return <ToggleContainer onClick={toggleTheme}></ToggleContainer>;
};

export default Toggle;
