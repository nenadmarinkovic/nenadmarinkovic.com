import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Cera Pro';
  src: url('../fonts/CeraPro-Regular.woff2') format('woff2'),
      url('../fonts/CeraPro-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Cera Pro';
  src: url('../fonts/CeraPro-Black.woff2') format('woff2'),
      url('../fonts/CeraPro-Black.woff') format('woff');
  font-weight: 900;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Cera Pro';
  src: url('../fonts/CeraPro-Thin.woff2') format('woff2'),
      url('../fonts/CeraPro-Thin.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: block;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Cera Pro', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
  color: black
}

p {
  line-height: 1.8;
}

.flex {
  display: flex;
}

.pink {
  background: linear-gradient(270.48deg, #D82B80 -4.99%, #F43F5E 99.13%);
}

.blue {
  background: linear-gradient(270.48deg, #2286B2 -4.99%, #1D4AAC 99.13%);
}

.green {
  background: linear-gradient(270.48deg, #689F28 -4.99%, #45671F 99.13%);
}

`;
