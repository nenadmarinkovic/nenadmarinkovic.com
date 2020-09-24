import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Steradian';
  src: url('../fonts/SteradianBold.woff2') format('woff2'),
      url('../fonts/SteradianBold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Steradian';
  src: url('../fonts/SteradianRegular.woff2') format('woff2'),
      url('../fonts/SteradianRegular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Steradian';
  src: url('../fonts/SteradianBlack.woff2') format('woff2'),
      url('../fonts/SteradianBlack.woff') format('woff');
  font-weight: 800;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Steradian';
  src: url('../fonts/SteradianLight.woff2') format('woff2'),
      url('../fonts/SteradianLight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Steradian';
  src: url('../fonts/SteradianMedium.woff2') format('woff2'),
      url('../fonts/SteradianMedium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: block;
}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ::selection {
    background: #d1fffd;
  }

  html {
    margin: 0;
    padding: 0;
    font-family: 'Steradian', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  body {
  
    margin: 0;
    padding: 0;
  }

  .container {
    width: 1160px;
    max-width: 100%;
    margin: 0 auto;
    padding: 20px 15px 0 15px;
  }

  .technology-icon {
    width: 60px;
    filter: invert(6%) sepia(73%) saturate(2050%) hue-rotate(227deg) brightness(90%) contrast(110%);
  }

  .slick-div {
    outline: none;
    pointer-events: none;
    border: none;
    margin-top: 20px;
    padding-bottom: 50px;
  }

  .slick-next {
    display: none !important;
  }

  .slick-prev {
    display: none !important;
  }
  
  .slick-list:before,
  .slick-list:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100px;
    top: 0;
    height: 100%;
  }

  .slick-list:after {
    left: 0;
    background: linear-gradient(to right,rgba(255,255,255,1),rgba(255,255,255,0.1))}
  }

  .slick-list:before {
    right: 0;
    background: linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0.1))
  }

.stay {
  animation: updown 2s ease infinite;
}

.launch {
  
  position: relative;
  animation: example 10s;
  opacity: 0
}

@keyframes example {
  0%   {top:0px; opacity: 1};
  10% {top: 55px; opacity: 1};
  100% {top: -7000px; opacity: 1};
}

#Fire {
  position: relative;
  animation: updown 2s ease infinite;
  
}

@keyframes updown {
  0% {
    transform: translateY(-15px);
  }

  50% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-15px);
  }
}


`;
