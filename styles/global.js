import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: "Cera Pro";
      src: url("/fonts/CeraPro-Regular.woff2") format("woff2");
      font-weight: 400;
      font-style: normal;
      font-display: block;
    }

    @font-face {
      font-family: "Cera Pro";
      src: url("/fonts/CeraPro-Bold.woff2") format("woff2");
      font-weight: 700;
      font-style: normal;
      font-display: block;
    }
    
    @font-face {
      font-family: "Cera Pro";
      src: url("/fonts/CeraPro-Black.woff2") format("woff2");
      font-weight: 900;
      font-style: normal;
      font-style: normal;
      font-display: block;
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
      font-size: 1.1rem;
    }
    
    .body-open {
      overflow: hidden !important;
    }

    .active-button {
      color: ${({ theme }) => theme.activeTagColor} !important;
      background: ${({ theme }) => theme.activeTagBackground} !important;
      border: ${({ theme }) => theme.activeTagBorder} !important;
    }

    .spotify-image {
      position: absolute;
      left: 0
    }

    main {
      overflow: hidden;
      color: ${({ theme }) => theme.color};
    }

    summary {
      cursor: pointer;
    }

    section {
      padding-top: 2.5rem;
    }

    code {
      line-height: 1.5;
      margin: 1.5rem 0;
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
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
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
    color: ${({ theme }) => theme.mdxMainColor};
    background: ${({ theme }) => theme.mdxBackground};
    border: ${({ theme }) => theme.menuBorder};
    border-radius: 10px;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable.language_ {
    color: ${({ theme }) => theme.mdxKeyword};
  }

  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    color: ${({ theme }) => theme.mdxTitle};
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-variable {
    color: ${({ theme }) => theme.mdxAttr};
  }

  .hljs-meta .hljs-string,
  .hljs-regexp,
  .hljs-string {
    color: ${({ theme }) => theme.mdxMeta};
  }

  .hljs-built_in,
  .hljs-symbol {
    color: ${({ theme }) => theme.mdxSymbol};
  }

  .hljs-code,
  .hljs-comment,
  .hljs-formula {
    color: #6a737d;
  }

  .hljs-name,
  .hljs-quote,
  .hljs-selector-pseudo,
  .hljs-selector-tag {
    color: #22863a;
  }

  .hljs-subst {
    color: #24292e;
  }

  .hljs-section {
    font-weight: 700;
    color: ${({ theme }) => theme.mdxSection};
  }

  .hljs-bullet {
    color: #735c0f;
  }

  .hljs-emphasis {
    font-style: italic;
    color: ${({ theme }) => theme.mdxEmphasis};
  }

  .hljs-strong {
    font-weight: 700;
    color: ${({ theme }) => theme.mdxStrong};
  }

  .hljs-addition {
    background-color: #f0fff4;
    color: ${({ theme }) => theme.mdxAddition};
  }

  .hljs-deletion {
    background-color: #ffeef0;
    color: ${({ theme }) => theme.mdxDeletion};
  }


`;
