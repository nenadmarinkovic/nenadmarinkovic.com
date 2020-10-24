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

import ComputerIllustration from "./ComputerIllustration";

function Work(props) {
  return (
    <WorkSection>
      <div className="container">
        <div tabIndex={0}>
          <CenterMain id="work">Work</CenterMain>
          <CenterSecond>
            Portfolio websites, small to medium size company websites, content
            management systems, e-commerce platforms, and more.
          </CenterSecond>
        </div>
        <div className="container">
          <WorkWrap>
            <Fade>
              <ComputerIllustration theme={props.theme} />
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
      </div>
    </WorkSection>
  );
}

export default Work;
