import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'CeraPro';
  src: url('../assets/fonts/CeraPro-Regular.woff2') format('woff2'),
      url('../assets/fonts/CeraPro-Regular.woff') format('woff');
  font-weight: normal;
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

`;
