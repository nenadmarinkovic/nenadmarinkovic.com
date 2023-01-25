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

    .box {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transform: rotate(180deg);
      display: flex;
      bottom: 15.5px;
      padding-right: 30px;
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

  .window {

  height: 360px;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  display: flex;
  flex-direction: column;
}

.nav-projects {
  background: #fdfdfd;
  padding: 5px 5px 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid #eeeeee;
  height: 44px;
}

.tabs {
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: nowrap;
  width: 100%;
}



.ul-projects,
.li-projects {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
}

.ul-projects {
  display: flex;
  width: 100%;
}

.li-projects {
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  padding: 10px 15px;
  position: relative;
  background: white;
  cursor: pointer;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0;
  position: relative;
  user-select: none;
}

.underline {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent);
}

li.selected {
  background: #eee;
}

.li-projects button {
  width: 20px;
  height: 20px;
  border: 0;
  background: #fff;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: #000;
  margin-left: 10px;
  cursor: pointer;
  flex-shrink: 0;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
}

.add-item {
  width: 30px;
  height: 30px;
  background: #eee;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  align-self: center;
}

.add-item:disabled {
  opacity: 0.4;
  cursor: default;
  pointer-events: none;
}

`;
