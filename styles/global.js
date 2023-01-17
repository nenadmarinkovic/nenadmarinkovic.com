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

    li {
      line-height: 1.8
    }
    
    p {
      line-height: 1.8;
    }
    
    .body-open {
      overflow: hidden !important;
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

    /* Map */

    .leaflet-container {
      margin-top: 2.5rem;
      z-index: 0;
      border-radius: 1.5rem;
    }

    .leaflet-control-attribution {
      display: none;
    }

    .leaflet-left .leaflet-control {
      margin-left: 20px;
    }

    .leaflet-top .leaflet-control {
      margin-top: 20px;
    }

    .leaflet-bottom {
      bottom: 5px !important;
    }

    .leaflet-right {
      right: 10px !important;
    }

    .leaflet-bar {
      border: none !important;
    }

    .leaflet-bar a {
      background: none;
      border: none;

      :hover {
        background-color: transparent !important;
      }

      :focus {
        background-color: transparent !important;
      }
    }

    .leaflet-touch .leaflet-bar a {
      width: 25px !important;
      height: 25px !important;
    }

    .leaflet-control-zoom-in {
      content: url('icons/plus.svg');
      margin-bottom: 5px;
    }

    .leaflet-control-zoom-out {
      content: url('icons/minus.svg');
      margin-bottom: 5px;
    }
`;
