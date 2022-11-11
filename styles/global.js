import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
      box-sizing: border-box;
    }

    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      scrollbar-gutter: stable;
    
    }
    
    input,
    textarea,
    button {
      font-family: inherit;
    }
    
    a {
      text-decoration: none;
      transition: .3s;
    }

    .a-link {
      color: ${({ theme }) => theme.linkColor};
      text-decoration: none;
    }

    .active-link {
      font-weight: bold;
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

    .modal {
      border-radius: 1rem;
      padding: 0;
      inset: 50% auto auto 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
      position: absolute;
      background: transparent;
      overflow: auto;
      outline: none;
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
