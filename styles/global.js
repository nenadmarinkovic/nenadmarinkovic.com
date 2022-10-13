import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Cera Pro";
    src: url("../fonts/CeraPro-Regular.woff2") format("woff2"),
      url("../fonts/CeraPro-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }
  
  @font-face {
    font-family: "Cera Pro";
    src: url("../fonts/CeraPro-Black.woff2") format("woff2"),
      url("../fonts/CeraPro-Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: block;
  }
  
  @font-face {
    font-family: "Cera Pro";
    src: url("../fonts/CeraPro-Bold.woff2") format("woff2"),
      url("../fonts/CeraPro-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }
  
  @font-face {
    font-family: "Cera Pro";
    src: url("../fonts/CeraPro-Medium.woff2") format("woff2"),
      url("../fonts/CeraPro-Medium.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }
  
  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Cera Pro", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    scrollbar-gutter: stable;
  }
  
  a {
    color: #00dfd8;
    text-decoration: none;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
  
  p {
    line-height: 1.8;
  }
  
  /* Modal */
  
  .body-open {
    overflow: hidden !important;
  }
  
  .overlay {
    overflow-y: scroll;
    inset: 0;
    position: fixed;
    background: ${({ theme }) => theme.backgroundModal};
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    z-index: 9;
  }
  
  .overlay-open {
    opacity: 1;
  }
  
  .overlay-close {
    opacity: 0;
  }

`;