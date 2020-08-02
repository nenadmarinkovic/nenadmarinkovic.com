import React from "react";
import Fade from "react-reveal/Fade";
import { WorkSection, CenterMain, CenterSecond } from "../styles/components/Work";
import Technology from "./Technology";

function Work() {
  return (
    <WorkSection>
      <div className="container">
      <Fade bottom delay={2500}>
          <CenterMain>Work I do</CenterMain>
          <CenterSecond>
            Portfolio websites, small to medium size company websites, content
            management systems, e-commerce platforms, and more.
          </CenterSecond>
        </Fade>
      </div>
      <Technology />
    </WorkSection>
  );
}

export default Work;
