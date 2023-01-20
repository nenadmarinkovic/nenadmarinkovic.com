import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: "Cera Pro";
      src: url("/fonts/CeraPro-Regular.woff2") format("woff2");
      font-weight: 400;
      font-style: normal;
      font-display: optional;
    }

    @font-face {
      font-family: "Cera Pro";
      src: url("/fonts/CeraPro-Bold.woff2") format("woff2");
      font-weight: 700;
      font-style: normal;
      font-display: optional;
    }
    
    @font-face {
      font-family: "Cera Pro";
      src: url("/fonts/CeraPro-Black.woff2") format("woff2");
      font-weight: 900;
      font-style: normal;
      font-style: normal;
      font-display: optional;
    }
    
    * {
      box-sizing: border-box;
    }

    html,
    body {
      background: ${({ theme }) => theme.background};
      padding: 0;
      margin: 0;
      font-family: "Cera Pro", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      scrollbar-gutter: stable;
      -moz-osx-font-smoothing: grayscale;
    }

    input,
    textarea,
    button {
      font-family: inherit;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }

    .a-link {
      color: ${({ theme }) => theme.activeColor};
      text-decoration: none;
      font-weight: bold;
    }

    .active-link {
      font-weight: bold;
    }
    
    ul {
      padding: 0;
      margin: 0;
    }

    li {
      line-height: 1.8
    }
    
    p {
      line-height: 1.8;
    }
    
    .body-open {
      overflow: hidden !important;
    }

    .spotify-image {
      position: absolute;
      left: 0
    }

    /* Markdown styles */

    main {
      overflow: hidden;
    }

    summary {
      cursor: pointer;
    }

    section {
      padding-top: 3.2rem;
    }

.box {
  position: relative;
  width: 40px;
  height: 40px;
  margin: 0 10px 0 0px;
  border-radius: 50%;
  transform: rotate(180deg);
  display: flex;
  margin-bottom: 30px
}

  .music {
    position: absolute;
    width: 10%;
    height: 10%;
    background: black;
    border-radius: 50px;
  }

  .one {
    left: 0;
    animation: music 1s ease infinite alternate;
  }

  .two {
    left: 10px;
    animation: music 1.3s ease infinite alternate;
  }

  .three {
    left: 20px;
    animation: music 1.6s ease infinite alternate;
  }

  @keyframes music {
    0% {
      height: 10%;
    }
    100% {
      height: 40%;
    }
  }
`;
