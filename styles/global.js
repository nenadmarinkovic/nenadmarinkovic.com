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
    outline: none;
  }

  html {
    font-family: 'Steradian', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background: white;
  }

  body {
    margin: 0;
    padding: 0;
  }

  @media (focus:none), 
  (focus:on-demand) {
  a:focus { 
    box-shadow: none;
  }
}

  .container {
    width: 1160px;
    max-width: 100%;
    margin: 0 auto;
    padding: 10px 15px 0 15px;
  }

  .contact-button {
    display: inline-block;
  }

  .technology-icon {
    width: 60px;
    filter: invert(6%) sepia(73%) saturate(2050%) hue-rotate(227deg) brightness(90%) contrast(110%);
  }
  
  .menu-fixed {
    position: fixed;
    top: 16px;
    right: 2rem;
  
    @media (min-width: 768px) {
      display: flex;
     }
  }

  .menu-close {
    display: none;
  }

  .slick-div {
    outline: none;
    pointer-events: none;
    border: none;
    margin-top: 20px;
    padding-bottom: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
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

a:hover {
  cursor: pointer;
}

.slick-list,
.slick-slider,
.slick-track {
  position: relative;
  display: block;
  padding-top: 20px;
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
  padding-bottom: 80px;
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

.slide-info-text {
  width: 50%;
  z-index: 2;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);

  @media (max-width: 960px) {
    width: 100%;
    text-align: center;
    padding-bottom: 70px;
  }
}

.slideshow--out .slide-info-text {
  transform: translateX(-50%);
  opacity: 0;
}

.slideshow--in .slide-info-text {
  transform: translateX(50%);
  opacity: 0;
}

@media screen and (max-width: 645px) {
  .slide-info-text {
    width: 100%;
  }
}

.slide-info-image {
  width: 42%;
  right: 0;
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);

  @media (max-width: 960px) {
    width: 100%;
  }
}

.slideshow--out .slide-info-image {
  opacity: 0;
  transform: translateY(20%) scale(1.1);
}

@media screen and (max-width: 775px) {
  .slideshow--out .slide-info-image {
    transform: translateX(-25%);
  }
}

.slideshow--in .slide-info-image {
  opacity: 0;
  transform: translateY(20%) scale(1.1);
}

@media screen and (max-width: 775px) {
  .slideshow--in .slide-info-image {
    transform: translateX(25%);
  }
}


.slideshow {
  margin-top: 120px;
}

.slide-arrows-arrow {
  display: inline-block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin: 15px;
  transition: .3s;
}

.slide-arrows-arrow:hover {
  transform: scale(1.25);
}

.slide-arrows-arrow--disabled {
  cursor: default;
}

.slide-arrows-arrow--disabled:hover {
  transform: scale(1);
}

.slide-count {
  @media (max-width: 960px) {
    text-align: center;
  }
}


.slide-count-num {
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  opacity: 1;
}

.slideshow--out .slide-count-num  {
  transform: translateY(100%);
  opacity: 0;
}

.slideshow--in .slide-count-num {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-details-block {
  display: inline-block;
  width: 25%;
  opacity: 1;
  padding-right: 0.5em;
  transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

.slideshow--out .slide-details-block {
  transform: translateY(-75%);
  opacity: 0;
}

.slideshow--in .slide-details-block {
  transform: translateY(-75%);
  opacity: 0;
}

@media screen and (max-width: 775px) {
  .slide-details-block {
    width: 100%;
    margin: 0 auto 2em;
  }
}

@media screen and (max-width: 775px) {
  .slide-one {
    margin-left: 0;
  }
}

.slide-two {
  transition-delay: 0.025s;
}

.slide-three {
  transition-delay: 0.05s;
}

`;
