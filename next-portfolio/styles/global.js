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
    height: 430px;
    width: 1124px;
    max-width: 100%;
    margin: 0 auto;
  }


  
  
  `;
