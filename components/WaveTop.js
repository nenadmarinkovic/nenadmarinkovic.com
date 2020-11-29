import React from "react";

function WaveTop(props) {
  return (
    <div>
      <svg
        style={{ marginTop: "-60px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={props.theme == "light" ? "#E3F0FA" : "#18346E"}
          fillOpacity="1"
          d="M0,160L80,160C160,160,320,160,480,181.3C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default WaveTop;
