import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
  
  .body-open {
    overflow: hidden !important;
  }
  
  .overlay {
    overflow-y: scroll;
    inset: 0;
    position: fixed;
    backdrop-filter: saturate(70%) blur(5px);
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
