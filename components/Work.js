import React from "react";
import Fade from "react-reveal/Fade";
import {
  WorkSection,
  CenterMain,
  CenterSecond,
  WorkWrap,
  WorkDetails,
  ListItem,
} from "../styles/components/Work";
import Technology from "./Technology";
import ComputerIllustration from "./ComputerIllustration";

function Work() {
  return (
    <WorkSection id="work">
      <div className="container">
        <CenterMain>Work I do</CenterMain>
        <CenterSecond>
          Portfolio websites, small to medium size company websites, content
          management systems, e-commerce platforms, and more.
        </CenterSecond>
      </div>
      <div className="container">
        <WorkWrap>
          <Fade>
            <ComputerIllustration />
          </Fade>
          <WorkDetails>
            <Fade bottom delay={500}>
              <ListItem>
                Portfolio websites, small to medium size company websites,
                content management systems, e-commerce platforms, and more.
              </ListItem>
            </Fade>
            <Fade bottom delay={1000}>
              <ListItem>
                Portfolio websites, small to medium size company websites,
                content management systems, e-commerce platforms, and more.
              </ListItem>
            </Fade>
            <Fade bottom delay={1500}>
              <ListItem>
                Portfolio websites, small to medium size company websites,
                content management systems, e-commerce platforms, and more.
              </ListItem>
            </Fade>
          </WorkDetails>
         
        </WorkWrap>
      </div>
      <Technology />
      
    </WorkSection>
  );
}

export default Work;
