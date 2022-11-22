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
      padding: 0;
      margin: 0;
      font-family: "Cera Pro", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
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


nav {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
}

button {
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
}

ul,
li {
  margin: 0;
  padding: 0;
}

ul {
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
}

li {
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.icon-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
}

.text-placeholder {
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
}

.refresh {
  padding: 10px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

`;
