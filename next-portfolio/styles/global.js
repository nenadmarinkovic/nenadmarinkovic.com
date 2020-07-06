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
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .container {
    
    height: 200px;
    width: 960px;
    margin: 0 auto;
  }

  `;
