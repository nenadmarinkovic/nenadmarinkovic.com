import React from "react";
import Fade from "react-reveal/Fade";
import {
  WorkSection,
  CenterMain,
  CenterSecond,
  WorkWrap,
  WorkDetails,
  ListItem,
  WorkItem,
  ItemTitle,
} from "../styles/components/Work";

import ComputerIllustration from "./ComputerIllustration";

function Work(props) {
  return (
    <WorkSection>
      <div className="container">
        <div tabIndex={0}>
          <CenterMain id="work">Work</CenterMain>
          <CenterSecond>
            State of the art websites and web applications, small to large size
            company websites, content management systems, web shops. Designed
            and developed for the user in mind.
          </CenterSecond>
        </div>
        <div className="container">
          <WorkWrap>
            <Fade>
              <ComputerIllustration theme={props.theme} />
            </Fade>
            <WorkDetails>
              <Fade bottom delay={500} duration={500}>
                <WorkItem>
                  <ItemTitle>Fast and optimized websites</ItemTitle>
                  <ListItem>
                    Websites must establish trust by being fast and optimized.
                    Using fastest and most optimized technologies, your website
                    must build credibility and turn your visitors into
                    customers.
                  </ListItem>
                </WorkItem>
              </Fade>
              <Fade bottom delay={800} duration={500}>
                <WorkItem>
                  <ItemTitle>Clean and well organized design</ItemTitle>
                  <ListItem>
                    People appriciate well organized design, transparency, and
                    visual quality. Without them, your website can communicate
                    an overall lack of attention to detail. Don't allow that to
                    your brand.
                  </ListItem>
                </WorkItem>
              </Fade>
              <Fade bottom delay={1000} duration={500}>
                <WorkItem>
                  <ItemTitle>Enjoyable user experience</ItemTitle>
                  <ListItem>
                    Portfolio websites, small to medium size company websites,
                    content management systems, e-commerce platforms, and more.
                  </ListItem>
                </WorkItem>
              </Fade>
            </WorkDetails>
          </WorkWrap>
        </div>
      </div>
    </WorkSection>
  );
}

export default Work;
