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
  transition: 0.25s;
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

`;
