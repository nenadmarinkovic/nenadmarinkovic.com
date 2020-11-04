import React from "react";
import { SVG } from "../styles/components/WaveBottom";

function WaveBottom(props) {
  return (
    <div>
      <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={props.theme == "light" ? "#E3F0FA" : "#18346E"}
          fillOpacity="1"
          d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,42.7C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </SVG>
    </div>
  );
}

export default WaveBottom;
