// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  
  }

  html {
    margin: 0;
    padding: 0
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .container {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 200px;
  }

  `;
