import React from "react";
import { RocketWrap } from "../styles/components/Rocket";

function Rocket(props) {
  return (
    <>
      <RocketWrap
        className={props.launch ? "launch" : "stay"}
        style={
          props.launch
            ? { marginTop: "-100px", transition: " 2s 2s" }
            : { marginTop: "40px" }
        }
      >
        <svg
          width="97px"
          height="142px"
          viewBox="0 0 217 342"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50.0004801%"
              y1="0%"
              x2="50.0004801%"
              y2="99.9614495%"
              id="linearGradient-1"
            >
              <stop stop-color="#88AEDA" offset="0%"></stop>
              <stop stop-color="#8EAED4" offset="4%"></stop>
              <stop stop-color="#CBA895" offset="50%"></stop>
              <stop stop-color="#F1A56D" offset="83%"></stop>
              <stop stop-color="#FFA45E" offset="100%"></stop>
            </linearGradient>
            <linearGradient
              x1="0.0263019463%"
              y1="50%"
              x2="100.039453%"
              y2="50%"
              id="linearGradient-2"
            >
              <stop stop-color="#88CFDA" offset="0%"></stop>
              <stop stop-color="#8ED0D4" offset="4%"></stop>
              <stop stop-color="#CBD995" offset="50%"></stop>
              <stop stop-color="#F1DF6D" offset="83%"></stop>
              <stop stop-color="#FFE15E" offset="100%"></stop>
            </linearGradient>
            <linearGradient
              x1="0.0879507476%"
              y1="50%"
              x2="100.021988%"
              y2="50%"
              id="linearGradient-3"
            >
              <stop stop-color="#A1BAFF" offset="0%"></stop>
              <stop stop-color="#B5C9FF" offset="8%"></stop>
              <stop stop-color="#D0DDFF" offset="21%"></stop>
              <stop stop-color="#E5ECFF" offset="35%"></stop>
              <stop stop-color="#F4F7FF" offset="51%"></stop>
              <stop stop-color="#FCFDFF" offset="70%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
            </linearGradient>
            <linearGradient
              x1="-43.0111124%"
              y1="12.2133372%"
              x2="128.274706%"
              y2="72.3428299%"
              id="linearGradient-4"
            >
              <stop stop-color="#3D00BA" offset="0%"></stop>
              <stop stop-color="#CE00FF" offset="75%"></stop>
            </linearGradient>
            <linearGradient
              x1="120.186215%"
              y1="31.3913098%"
              x2="-27.9779671%"
              y2="64.197525%"
              id="linearGradient-5"
            >
              <stop stop-color="#3D00BA" offset="0%"></stop>
              <stop stop-color="#CE00FF" offset="75%"></stop>
            </linearGradient>
            <linearGradient
              x1="-0.26642984%"
              y1="50%"
              x2="99.7779751%"
              y2="50%"
              id="linearGradient-6"
            >
              <stop stop-color="#3D00BA" offset="0%"></stop>
              <stop stop-color="#CE00FF" offset="75%"></stop>
            </linearGradient>
            <linearGradient
              x1="-0.000732890284%"
              y1="50.0152873%"
              x2="99.9920852%"
              y2="50.0152873%"
              id="linearGradient-7"
            >
              <stop stop-color="#A1BAFF" offset="0%"></stop>
              <stop stop-color="#A9C0FF" offset="4%"></stop>
              <stop stop-color="#E7EDFF" offset="37%"></stop>
              <stop stop-color="#FFFFFF" offset="52%"></stop>
              <stop stop-color="#CEDBFF" offset="100%"></stop>
            </linearGradient>
            <linearGradient
              x1="0.0704812159%"
              y1="49.9302133%"
              x2="99.999952%"
              y2="49.9302133%"
              id="linearGradient-8"
            >
              <stop stop-color="#7633FF" offset="0%"></stop>
              <stop stop-color="#4E53FF" offset="22%"></stop>
              <stop stop-color="#2C6DFF" offset="44%"></stop>
              <stop stop-color="#1480FF" offset="65%"></stop>
              <stop stop-color="#058CFF" offset="84%"></stop>
              <stop stop-color="#0090FF" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="start-up" fill-rule="nonzero">
              <path
                d="M131.717238,267 L85.2521741,267 C75.8174215,277.074351 71.1013227,290.199959 72.1418294,303.488049 C74.502999,301.005499 77.0885037,298.713112 79.8703623,296.635698 C80.1507516,296.43349 80.5381688,296.415214 80.839386,296.589984 C81.1406038,296.764754 81.2911001,297.095134 81.2158148,297.416345 C80.4022855,302.302622 81.2158148,317.019275 108.50035,342 C135.878755,317.019275 136.660995,302.302622 135.753596,297.416345 C135.70005,297.094238 135.860737,296.773867 136.161329,296.603424 C136.461921,296.432981 136.843807,296.4457 137.130339,296.635698 C139.904026,298.721669 142.488788,301.013397 144.858872,303.488049 C145.897767,290.195151 141.169367,277.066641 131.717238,267 L131.717238,267 Z"
                id="Fire"
                fill="url(#linearGradient-1)"
              ></path>
              <path
                d="M108.993162,251 L108.993162,251 C108.993162,251 79.7585481,272.658228 108.993162,310 L108.993162,310 C138.258548,272.658228 108.993162,251 108.993162,251 Z"
                id="Path"
                fill="url(#linearGradient-2)"
              ></path>
              <path
                d="M109.992964,264 L109.992964,264 C109.992964,264 92.008795,276.854234 109.992964,299 L109.992964,299 C128.008795,276.854234 109.992964,264 109.992964,264 Z"
                id="Path"
                fill="url(#linearGradient-3)"
              ></path>
              <path
                d="M76,257 L79.3081998,263.5 C80.7201465,266.259979 83.5162249,267.993167 86.5678603,268 L130.432139,268 C133.485715,268.000222 136.285097,266.264986 137.6918,263.5 L141,257 L76,257 Z"
                id="Path"
                stroke="#424242"
                stroke-width="3.46"
                fill="#949494"
              ></path>
              <path
                d="M67,246 L71.3215067,253.0837 C73.1657201,256.102893 76.8334446,257.99826 80.8350399,258 L138.164959,258 C142.166555,257.99826 145.83428,256.102893 147.678493,253.0837 L152,246 L67,246 Z"
                id="Path"
                stroke="#424242"
                stroke-width="3.46"
                fill="#4D4D4D"
              ></path>
              <path
                d="M139.893053,186 C139.893053,186 221.984247,208.944551 216.760903,276 C216.760903,276 147.622189,218.638623 110,231 L139.893053,186 Z"
                id="Path"
                fill="url(#linearGradient-4)"
              ></path>
              <path
                d="M67.769794,186 C67.769794,186 -4.37877471,208.944551 0.209961225,276 C0.209961225,276 60.9487,218.638623 94,231 L67.769794,186 Z"
                id="Path"
                fill="url(#linearGradient-5)"
              ></path>
              <path
                d="M144,56 C135.447178,35.7770624 123.601329,16.890796 108.875666,0 L108.875666,0 C94.2996512,16.723641 82.5408245,35.4006636 74,55.3944385 C97.052291,50.4212736 121.051687,50.6288893 144,56 L144,56 Z"
                id="Path"
                fill="url(#linearGradient-6)"
              ></path>
              <path
                d="M144.983723,58.6114234 L144.983723,58.6114234 L144.023615,56.331493 C121.173977,50.7690068 97.2023793,50.5608019 74.245441,55.725436 L73.0375631,58.6114234 L73.0375631,58.6114234 C41.1681704,135.494123 55.6317335,218.928013 60.6490723,242.477669 C61.4865304,246.272727 65.0701925,248.997258 69.2281022,249 L148.607356,249 C152.765266,248.997258 156.348928,246.272727 157.186386,242.477669 C162.389552,218.928013 176.853115,135.494123 144.983723,58.6114234 Z"
                id="Path"
                fill="url(#linearGradient-7)"
              ></path>
              <path
                d="M137,117.970273 C137.012253,129.297712 129.954529,139.516374 119.119112,143.859418 C108.283695,148.202463 95.8054875,145.814179 87.505372,137.808662 C79.2052566,129.803147 76.718606,117.757726 81.2054027,107.291395 C85.6921994,96.8250647 96.26841,90 108.000402,90 C124.004569,90 136.98321,102.517977 137,117.970273 Z"
                id="Path"
                fill="#000000"
              ></path>
              <path
                d="M125.768303,136.015226 C135.134226,127.795149 135.443239,114.185057 126.458503,105.616234 C117.473768,97.0474108 102.59762,96.7646964 93.2316973,104.984774 C83.8657748,113.204851 83.5567611,126.814943 92.5414966,135.383766 C101.526232,143.952589 116.40238,144.235304 125.768303,136.015226 Z"
                id="Oval"
                stroke="#424242"
                stroke-width="3.46"
                fill="#7C7C7C"
              ></path>
              <path
                d="M130,117.97069 C130.01253,126.466903 124.538643,134.133051 116.1321,137.392546 C107.725557,140.65204 98.0429596,138.862562 91.6016571,132.858979 C85.1603546,126.855397 83.2296768,117.820783 86.7103676,109.970173 C90.1910584,102.119564 98.3972094,97 107.500298,97 C119.91439,97 129.98281,106.384207 130,117.97069 L130,117.97069 Z"
                id="Path"
                fill="url(#linearGradient-8)"
              ></path>
              <g
                id="Group"
                opacity="0.08"
                transform="translate(85.000000, 98.000000)"
                fill="#000000"
                stroke="#424242"
                stroke-width="3.46"
              >
                <path
                  d="M24.5907905,3.96101073 C33.4529386,3.95681887 41.5330136,8.6005493 45.3749138,15.9059327 C43.089081,8.15104614 36.1915966,2.25396163 27.5791573,0.691243741 C18.966718,-0.871474153 10.1308372,2.17080807 4.78226889,8.54044064 C-0.56629951,14.9100732 -1.50128349,23.503955 2.36997674,30.712963 C1.8044704,28.8885313 1.51444382,27.0019108 1.50796242,25.1055669 C1.50795025,13.4391468 11.8373339,3.97712457 24.5907905,3.96101073 L24.5907905,3.96101073 Z"
                  id="Path"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </RocketWrap>
    </>
  );
}

export default Rocket;
