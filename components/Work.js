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
  ItemText,
  SVG
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
            and developed with the user in mind.
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
                  <ItemTitle>
                    <SVG
                      height="20px"
                      viewBox="0 0 512 512"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                        fill="#2196f3"
                      />
                      <path
                        d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0"
                        fill="#fafafa"
                      />
                    </SVG>
                    <ItemText>Fast and optimized websites</ItemText>
                  </ItemTitle>
                  <ListItem>
                    Your website builds trust and credibility by being fast,
                    optimized, and fully functional.
                  </ListItem>
                </WorkItem>
              </Fade>
              <Fade bottom delay={800} duration={500}>
                <WorkItem>
                  <ItemTitle>
                    <SVG
                      height="20px"
                      viewBox="0 0 512 512"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                        fill="#2196f3"
                      />
                      <path
                        d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0"
                        fill="#fafafa"
                      />
                    </SVG>
                    <ItemText>Clean and well organized design</ItemText>
                  </ItemTitle>
                  <ListItem>
                    Convince your visitors with well organized design, attention
                    to details, and full transparency.
                  </ListItem>
                </WorkItem>
              </Fade>
              <Fade bottom delay={1000} duration={500}>
                <WorkItem>
                  <ItemTitle>
                    <SVG
                      height="20px"
                      viewBox="0 0 512 512"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                        fill="#2196f3"
                      />
                      <path
                        d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0"
                        fill="#fafafa"
                      />
                    </SVG>
                    <ItemText>Enjoyable user experience</ItemText>
                  </ItemTitle>
                  <ListItem>
                    Subtle animations, relevant images, well-thought typos and
                    color palettes make your website pleasurable and fun to
                    use.
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
