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
      height: 100%;
      background: ${({ theme }) => theme.background};
      padding: 0;
      margin: 0;
      font-family: "Cera Pro", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      scrollbar-gutter: stable;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
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

    .spotify-link {
     margin-right: -px;
     margin-left: 5px;
    }

    main {
      overflow: hidden;
    }

    summary {
      cursor: pointer;
    }

    section {
      padding-top: 2.5rem;
    }

    code {
      border-radius: 10px;
      line-height: 1.5;
    }

    .box {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transform: rotate(180deg);
      display: flex;
      bottom: 15.5px;
      padding-right: 30px;
      right: 10px;
    }

    .music {
      position: absolute;
      width: 7.5%;
      height: 10%;
      background: ${({ theme }) => theme.color};
    }

    .one {
      left: 0;
      animation: music .3s ease infinite alternate;
    }

    .two {
      left: 7.5px;
      animation: music 1s ease infinite alternate;
    }

    .three {
      left: 15px;
      animation: music .5s ease infinite alternate;
    }

    @keyframes music {
      0% {
        height: 10%;
      }
      100% {
        height: 40%;
      }
    }

  .hljs {
  display: block;
  overflow-x: auto;
  padding: 1rem;
  color: #c9d1d9;
  background: #0d1117;
}

.hljs-comment,
.hljs-punctuation {
  color: #8b949e;
}

.hljs-attr,
.hljs-attribute,
.hljs-meta,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id {
  color: #79c0ff;
}

.hljs-variable,
.hljs-literal,
.hljs-number,
.hljs-doctag {
  color: #ffa657;
}

.hljs-params {
  color: #c9d1d9;
}

.hljs-function {
  color: #d2a8ff;
}

.hljs-class,
.hljs-tag,
.hljs-title,
.hljs-built_in {
  color: #7ee787;
}

.hljs-keyword,
.hljs-type,
.hljs-builtin-name,
.hljs-meta-keyword,
.hljs-template-tag,
.hljs-template-variable {
  color: #fc6d26;
}

.hljs-string,
.hljs-undefined {
  color: #a5d6ff;
}

.hljs-regexp {
  color: #a5d6ff;
}

.hljs-symbol {
  color: #79c0ff;
}

.hljs-bullet {
  color: #ffa657;
}

.hljs-section {
  color: #79c0ff;
  font-weight: bold;
}

.hljs-quote,
.hljs-name,
.hljs-selector-tag,
.hljs-selector-pseudo {
  color: #7ee787;
}

.hljs-emphasis {
  color: #ffa657;
  font-style: italic;
}

.hljs-strong {
  color: #ffa657;
  font-weight: bold;
}

.hljs-deletion {
  color: #ffa198;
  background-color: #490202;
}

.hljs-addition {
  color: #7ee787;
  background-color: #04260f;
}

.hljs-link {
  color: #a5d6ff;
  font-style: underline;
}
`;
