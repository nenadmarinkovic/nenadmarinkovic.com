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

  html {
    font-family: 'Steradian', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
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

  .contact-button {
    display: inline-block;
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

a:hover{ cursor: pointer; }

// Slick slider

.slick-list,
.slick-slider,
.slick-track {
  position: relative;
  display: block;
}
.slick-loading .slick-slide,
.slick-loading .slick-track {
  visibility: hidden;
}
.slick-slider {
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list {
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: 0;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}
.slick-slider .slick-list,
.slick-slider .slick-track {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.slick-track {
  top: 0;
  left: 0;
}
.slick-track:after,
.slick-track:before {
  display: table;
  content: "";
}
.slick-track:after {
  clear: both;
}
.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
[dir="rtl"] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}
`;
