import React from "react";
import { FooterContainer, Wave, WaveSVG } from "../styles/components/Footer";
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
        <WaveSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,0L80,10.7C160,21,320,43,480,58.7C640,75,800,85,960,85.3C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </WaveSVG>
      </Wave>
      <FooterContainer>
        <div className="container">
          <PortfolioIntro>
            <PortfolioIntroMain id="contact">Contact</PortfolioIntroMain>
            <PortfolioIntroSecond>
              If you'd like to contact me, you can send me an email to {""}
              <a
                className="a-link"
                href="mailto:nenadmarinkovic@protonmail.com"
              >
                nenadmarinkovic@protonmail.com
              </a>
              <br />
              Or use the form below.
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
