import React from "react";
import { FooterContainer, Wave } from "../styles/components/Footer";
import ContactForm from "./ContactForm";

import {
  PortfolioIntro,
  PortfolioIntroMain,
  PortfolioIntroSecond,
} from "../styles/components/Portfolio";

function Footer() {
  return (
    <>
      <Wave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fillOpacity="1"
            d="M0,0L80,10.7C160,21,320,43,480,58.7C640,75,800,85,960,85.3C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </Wave>
      <FooterContainer>
        <div className="container">
          <PortfolioIntro>
            <PortfolioIntroMain id="contact">Contact</PortfolioIntroMain>
            <PortfolioIntroSecond>
              Portfolio websites, small to medium size company websites, content
              management systems, e-commerce platforms, and more.
            </PortfolioIntroSecond>
          </PortfolioIntro>
        </div>
        <div className="container">
          <ContactForm />
        </div>
      </FooterContainer>
    </>
  );
}

export default Footer;
