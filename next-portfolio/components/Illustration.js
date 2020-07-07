import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  margin-top: 50px;
`;

const reveal = keyframes`
  from {
    visibility: unset;
    clip-path: inset(0 0 0 100%);
  }
  to {
      visibility: unset;
    clip-path: inset(0 0 0 0);
  }
  `;

const Light = styled.g`
  display: ${({ theme }) => theme.display};
  visibility: hidden;
  animation: ${reveal} 5s forwards 1.3s;
`;

function Illustration() {
  return (
    <Wrapper>
      <svg
        width="610"
        height="400"
        viewBox="0 0 810 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="svg-main"
      >
        <g id="web-developer">
          <path
            id="Vector"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M302.975 581.499V580.641H358.458L302.975 581.499Z"
            fill="white"
          />
          <path
            id="Vector_2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M285.656 581.499L237.921 580.641H285.656V581.499Z"
            fill="white"
          />
          <g id="Group">
            <path
              id="Vector_3"
              d="M570.507 371.17H558.84V599.03H570.507V371.17Z"
              fill="#1289CC"
            />
            <path
              id="Vector_4"
              d="M564.774 371.17H553.107V599.03H564.774V371.17Z"
              fill="black"
            />
            <path
              id="Vector_5"
              d="M608.107 371.17H596.49V599.03H608.107V371.17Z"
              fill="#1289CC"
            />
            <path
              id="Vector_6"
              d="M602.374 371.17H590.758V599.03H602.374V371.17Z"
              fill="black"
            />
            <path
              id="Vector_7"
              d="M317.796 371.17H306.129V599.03H317.796V371.17Z"
              fill="black"
            />
            <path
              id="Vector_8"
              d="M361.118 371.17H349.502V599.03H361.118V371.17Z"
              fill="#1289CC"
            />
            <path
              id="Vector_9"
              d="M355.396 371.17H343.779V599.03H355.396V371.17Z"
              fill="black"
            />
            <path
              id="Vector_10"
              d="M630.635 361.716H263.451V384.288H630.635V361.716Z"
              fill="black"
            />
            <path
              id="Vector_11"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M427.412 280.502L540.413 272.615L542.216 276.538L527.396 356.655H522.187L410.496 363.443L427.412 280.502Z"
              fill="url(#paint0_linear)"
            />
            <path
              id="Vector_12"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M423.462 272.615H540.01L523.094 355.606H406.536L423.462 272.615Z"
              fill="black"
            />
            <path
              id="Vector_13"
              d="M523.437 355.457H491.448V361.706H523.437V355.457Z"
              fill="url(#paint1_linear)"
            />
            <path
              id="Vector_14"
              d="M491.448 355.457H383.706V361.706H491.448V355.457Z"
              fill="#431CA3"
            />
            <path
              id="Vector_15"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M427.412 277.427L412.44 350.744H519.084L534.056 277.427H427.412Z"
              fill="#3F2759"
            />
            <path
              id="Vector_16"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M447.038 361.716C450.645 362.155 458.251 361.017 463.662 357.553C469.022 354.079 473.273 350.784 473.273 350.784C473.273 350.784 484.95 352.292 485.696 349.646C486.018 346.112 470.563 341.929 468.417 341.68C466.211 341.43 448.096 343.956 446.242 345.793C444.388 347.62 447.038 361.716 447.038 361.716Z"
              fill="white"
            />
            <path
              id="Vector_17"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M386.658 351.643C390.265 352.092 397.872 350.954 403.232 347.48C408.592 344.006 413.7 338.944 413.7 338.944C413.7 338.944 425.366 340.032 425.115 338.944C424.812 337.906 410.194 331.846 407.987 331.606C405.831 331.357 387.666 333.893 385.812 335.73C383.958 337.546 386.658 351.643 386.658 351.643Z"
              fill="white"
            />
            <path
              id="Vector_18"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M407.836 337.656C408.985 339.094 416.299 344.505 414.899 346.581C413.498 348.718 410.143 349.606 406.486 346.981C402.829 344.355 400.532 341.27 401.529 340.232C402.537 339.194 407.836 337.656 407.836 337.656Z"
              fill="white"
            />
            <path
              id="Vector_19"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M252.187 266.166C241.075 270.628 243.724 291.863 248.782 307.097C253.789 322.332 305.706 358.292 321.08 362.265C336.455 366.189 396.078 347.729 396.078 347.729C400.129 339.543 396.633 330.858 389.268 332.744C389.268 332.744 331.145 341.769 322.43 331.806C315.418 323.809 263.955 261.453 252.187 266.166Z"
              fill="url(#paint2_linear)"
            />
            <path
              id="Vector_20"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M299.248 238.582C281.072 274.841 243.724 262.741 234.919 228.069C226.103 193.437 223.806 163.527 254.444 158.266C287.732 152.555 317.473 202.312 299.248 238.582Z"
              fill="url(#paint3_linear)"
            />
            <path
              id="Vector_21"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M242.374 239.38C245.83 250.142 244.772 279.014 244.772 279.014C244.772 279.014 293.938 293.201 292.437 286.651C286.432 260.106 283.38 236.895 277.868 232.033C273.315 228.059 262.101 241.407 242.374 239.38Z"
              fill="white"
            />
            <path
              id="Vector_22"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M342.55 566.205C342.55 566.205 353.109 578.854 366.78 584.514C380.452 590.175 386.608 592.601 384.402 596.075C382.195 599.549 364.675 597.912 351.456 598.361C338.288 598.81 329.382 599.799 328.929 595.636C328.475 591.522 330.581 568.651 330.581 568.651L342.55 566.205Z"
              fill="black"
            />
            <path
              id="Vector_23"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M323.327 467.779C323.831 481.965 328.687 588.358 328.687 588.358C332.082 592.241 354.529 584.265 356.101 578.864C356.101 578.864 365.733 460.431 361.975 459.882C358.277 459.393 323.327 467.779 323.327 467.779Z"
              fill="url(#paint4_linear)"
            />
            <path
              id="Vector_24"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M457.909 566.704C457.909 566.704 468.477 579.353 482.089 585.063C495.761 590.724 501.916 593.1 499.71 596.624C497.504 600.098 479.983 598.411 466.815 598.86C453.597 599.309 444.69 600.298 444.237 596.185C443.784 592.022 445.889 569.15 445.889 569.15L457.909 566.704Z"
              fill="black"
            />
            <path
              id="Vector_25"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M250.485 424.961C248.883 436.022 231.906 453.343 252.59 470.654C273.264 487.965 406.395 473.33 408.098 475.666C409.801 477.952 442.746 590.195 442.746 590.195C442.746 590.195 471.248 589.306 469.757 577.746C458.755 547.636 460.569 451.506 438.293 440.984C416.047 430.471 250.485 424.961 250.485 424.961Z"
              fill="url(#paint5_linear)"
            />
            <path
              id="Vector_26"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M305.051 269.041C285.979 264.029 228.975 259.986 221.338 276.139C203.606 313.646 217.721 457.766 242.405 460.142C258.273 461.679 337.039 459.293 339.689 430.971C343.154 393.713 308.355 339.833 305.051 269.041Z"
              fill="url(#paint6_linear)"
            />
            <path
              id="Vector_27"
              d="M239.14 386.645H219.816V481.696H239.14V386.645Z"
              fill="white"
            />
            <path
              id="Vector_28"
              d="M235.03 385.876H215.706V480.927H235.03V385.876Z"
              fill="black"
            />
            <path
              id="Vector_29"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M305.051 269.041C293.938 273.503 296.537 294.788 301.595 310.022C306.653 325.207 358.569 361.167 373.944 365.14C389.318 369.064 450.796 361.377 450.796 361.377C454.806 353.19 451.35 344.505 443.935 346.392C443.935 346.392 383.958 344.655 375.243 334.681C368.292 326.685 316.768 264.329 305.051 269.041Z"
              fill="url(#paint7_linear)"
            />
            <path
              id="Vector_30"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M285.727 192.838C282.171 188.376 291.883 207.024 288.931 214.861C288.981 206.475 268.458 196.352 276.367 219.124C277.324 221.9 278.513 233.77 278.513 233.77C278.312 238.662 253.064 253.437 244.732 247.746C237.176 243.384 225.206 225.823 217.549 206.126C209.842 186.429 223.353 176.805 223.353 176.805C223.353 176.805 221.499 171.793 227.604 162.369C232.36 154.931 303.258 140.196 299.449 172.632C298.643 179.341 291.54 185.151 285.727 192.838Z"
              fill="#503501"
            />
            <path
              id="Vector_31"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M202.387 309.184H275.924C281.244 309.184 285.636 315.034 285.636 322.182V376.551C285.636 383.699 281.244 389.55 275.924 389.55H202.387C197.027 389.55 192.644 383.699 192.644 376.551V322.182C192.644 315.034 197.027 309.184 202.387 309.184Z"
              fill="white"
            />
            <path
              id="Vector_32"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M195.163 309.344H268.7C274.02 309.344 278.413 315.194 278.413 322.342V376.711C278.413 383.859 274.02 389.709 268.7 389.709H195.163C189.803 389.709 185.42 383.859 185.42 376.711V322.342C185.41 315.194 189.803 309.344 195.163 309.344Z"
              fill="black"
            />
            <path
              id="Vector_33"
              d="M302.975 485.839H285.656V582.727H302.975V485.839Z"
              fill="black"
            />
            <path
              id="Vector_34"
              d="M358.348 580.641H232.531V587.439H358.348V580.641Z"
              fill="black"
            />
            <path
              id="Vector_35"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M355.698 598.251C360.806 598.251 364.906 594.178 364.906 589.176C364.906 584.115 360.806 580.052 355.698 580.052C350.64 580.052 346.54 584.115 346.54 589.176C346.53 594.188 350.64 598.251 355.698 598.251Z"
              fill="black"
            />
            <path
              id="Vector_36"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M293.203 598.052C298.311 598.052 302.411 593.978 302.411 588.977C302.411 583.915 298.301 579.852 293.203 579.852C288.145 579.852 284.044 583.915 284.044 588.977C284.034 593.978 288.145 598.052 293.203 598.052Z"
              fill="black"
            />
            <path
              id="Vector_37"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M232.934 598.251C237.992 598.251 242.143 594.178 242.143 589.176C242.143 584.115 237.992 580.052 232.934 580.052C227.876 580.052 223.725 584.115 223.725 589.176C223.725 594.188 227.876 598.251 232.934 598.251Z"
              fill="black"
            />
            <path
              id="Vector_38"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M213.086 470.654H375.495C381.651 470.654 386.658 475.616 386.658 481.666C386.658 487.766 381.651 492.727 375.495 492.727H213.086C206.981 492.727 201.974 487.766 201.974 481.666C201.974 475.616 206.981 470.654 213.086 470.654Z"
              fill="black"
            />
            <path
              id="Vector_39"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M240.782 266.246C241.034 263.071 243.301 254.136 243.301 254.136C243.301 254.136 280.145 251.65 288.911 255.723C290.281 256.362 298.794 268.791 298.794 268.791C275.561 264.618 255.683 264.419 240.782 266.246Z"
              fill="#BCD8FA"
            />
            <path
              id="Vector_40"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M427.412 277.427H534.056L533.381 280.711L426.706 280.911L427.412 277.427Z"
              fill="#1E8191"
            />
            <path
              id="Vector_41"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M518.54 288.848C518.54 289.347 518.137 289.746 517.633 289.746H433.316C432.812 289.746 432.409 289.347 432.409 288.848C432.409 288.349 432.812 287.949 433.316 287.949H517.633C518.137 287.949 518.54 288.349 518.54 288.848Z"
              fill="#1E8191"
            />
            <path
              id="Vector_42"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M501.977 293.949C501.977 294.448 501.644 294.848 501.231 294.848H432.107C431.694 294.848 431.361 294.448 431.361 293.949C431.361 293.45 431.694 293.051 432.107 293.051H501.231C501.644 293.051 501.977 293.46 501.977 293.949Z"
              fill="#1E8191"
            />
            <path
              id="Vector_43"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M500.949 300.259C500.949 300.758 500.617 301.157 500.204 301.157H431.079C430.666 301.157 430.334 300.758 430.334 300.259C430.334 299.76 430.666 299.36 431.079 299.36H500.204C500.617 299.36 500.949 299.76 500.949 300.259Z"
              fill="#1E8191"
            />
            <path
              id="Vector_44"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M515.105 305.78C515.105 306.279 514.702 306.678 514.198 306.678H429.789C429.286 306.678 428.883 306.279 428.883 305.78C428.883 305.28 429.286 304.881 429.789 304.881H514.198C514.702 304.881 515.105 305.29 515.105 305.78Z"
              fill="#1E8191"
            />
            <path
              id="Vector_45"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M511.981 318.928C511.981 319.427 511.578 319.826 511.075 319.826H426.666C426.162 319.826 425.759 319.427 425.759 318.928C425.759 318.428 426.162 318.029 426.666 318.029H511.075C511.568 318.029 511.981 318.428 511.981 318.928Z"
              fill="#1E8191"
            />
            <path
              id="Vector_46"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M481.424 312.019C481.424 312.518 481.172 312.918 480.86 312.918H428.319C428.006 312.918 427.754 312.518 427.754 312.019C427.754 311.52 428.006 311.121 428.319 311.121H480.86C481.172 311.121 481.424 311.52 481.424 312.019Z"
              fill="#1E8191"
            />
            <g id="stripe2">
              <path
                id="Vector_47"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M463.863 324.658C463.863 325.157 463.682 325.557 463.46 325.557H425.528C425.306 325.557 425.125 325.157 425.125 324.658C425.125 324.159 425.306 323.759 425.528 323.759H463.45C463.682 323.759 463.863 324.159 463.863 324.658Z"
                fill="#1E8191"
              />
            </g>
            <g id="stripe1">
              <path
                id="Vector_48"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M492.819 331.586C492.819 332.086 492.496 332.485 492.093 332.485H424.188C423.785 332.485 423.462 332.086 423.462 331.586C423.462 331.087 423.795 330.688 424.188 330.688H492.093C492.486 330.688 492.819 331.087 492.819 331.586Z"
                fill="#1E8191"
              />
            </g>
          </g>
          <g id="night">
            <g id="Group_2">
              <g id="Group_3">
                <g id="star6">
                  <path
                    id="Vector_49"
                    d="M473.053 202.429C473.053 203.221 472.419 203.86 471.633 203.86C470.848 203.86 470.203 203.221 470.203 202.429C470.203 201.638 470.837 200.998 471.633 200.998C472.429 200.998 473.053 201.627 473.053 202.429Z"
                    fill="white"
                  />
                </g>
                <g id="star5">
                  <path
                    id="Vector_50"
                    d="M324.233 124.22C324.233 125.011 323.598 125.651 322.813 125.651C322.028 125.651 321.393 125.011 321.393 124.22C321.393 123.428 322.028 122.778 322.813 122.778C323.598 122.788 324.233 123.428 324.233 124.22Z"
                    fill="white"
                  />
                </g>
                <g id="star4">
                  <path
                    id="Vector_51"
                    d="M613.312 293.569C613.312 294.36 612.677 295 611.892 295C611.107 295 610.461 294.36 610.461 293.569C610.461 292.777 611.096 292.138 611.892 292.138C612.688 292.138 613.312 292.777 613.312 293.569Z"
                    fill="white"
                  />
                </g>
                <g id="star3">
                  <path
                    id="Vector_52"
                    d="M633.915 152.089L635.432 155.19L638.82 155.678L636.368 158.095L636.949 161.5L633.915 159.895L630.882 161.5L631.452 158.095L629 155.678L632.399 155.19L633.915 152.089Z"
                    fill="white"
                  />
                </g>
                <g id="star2">
                  <path
                    id="Vector_53"
                    d="M266.602 72.078L268.495 75.9487L272.733 76.5668L269.668 79.581L270.388 83.8421L266.602 81.8254L262.805 83.8421L263.526 79.581L260.461 76.5668L264.698 75.9487L266.602 72.078Z"
                    fill="white"
                  />
                </g>
                <g id="star1">
                  <path
                    id="Vector_54"
                    d="M691.411 261.627L693.315 265.498L697.553 266.116L694.487 269.13L695.208 273.391L691.411 271.374L687.625 273.391L688.346 269.13L685.28 266.116L689.518 265.498L691.411 261.627Z"
                    fill="white"
                  />
                </g>
              </g>
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="498"
                y="56"
                width="101"
                height="102"
              >
                <g id="moon 1">
                  <g id="XMLID 1">
                    <path
                      id="XMLID 4"
                      d="M513.173 142.598C532.642 162.309 564.264 162.396 583.829 142.782C603.384 123.168 603.47 91.2801 584.012 71.5684C564.555 51.8567 532.921 51.77 513.367 71.3841C493.802 90.9982 493.716 122.886 513.173 142.598Z"
                      fill="url(#paint8_linear)"
                    />
                  </g>
                </g>
              </mask>
              <g mask="url(#mask0)">
                <path
                  id="moon 2"
                  d="M513.173 142.598C532.642 162.309 564.264 162.396 583.829 142.782C603.384 123.168 603.47 91.2801 584.012 71.5684C564.555 51.8567 532.921 51.77 513.367 71.3841C493.802 90.9982 493.716 122.886 513.173 142.598Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
          <Light>
            <path
              id="Vector_55"
              d="M84.0456 352.47L412.44 349.754L419.714 350.023L519.084 349.754L534.056 276.698L134.491 73.3975"
              fill="url(#paint9_linear)"
            />
          </Light>
          <g id="cloud">
            <path
              id="Vector_56"
              opacity="0.2"
              d="M458.369 112.048C454.611 112.048 451.095 113.066 448.093 114.844C447.377 104.461 438.653 96.2645 428.003 96.2645C425.404 96.2645 422.925 96.7537 420.648 97.6422C417.747 88.0183 408.75 81 398.091 81C385.094 81 374.545 91.4426 374.545 104.331C374.545 104.661 374.555 104.99 374.575 105.309C374.565 105.309 374.555 105.309 374.545 105.309C361.549 105.309 351 115.752 351 128.64C351 141.519 361.538 151.972 374.545 151.972C375.361 151.972 376.157 151.932 376.953 151.852H456.173C456.898 151.932 457.624 151.972 458.369 151.972C469.492 151.972 478.509 143.036 478.509 132.015C478.509 120.983 469.492 112.048 458.369 112.048Z"
              fill="url(#paint10_linear)"
            />
          </g>
          <g id="flower">
            <g id="Group_4">
              <path
                id="Path"
                d="M726 507.803C726 509.014 724.662 510 723 510C721.347 510 720 509.021 720 507.803V410.197C720 408.986 721.338 408 723 408C724.653 408 726 408.979 726 410.197V507.803Z"
                fill="url(#paint11_linear)"
              />
              <g id="list7">
                <g id="Group 1">
                  <path
                    id="Path_2"
                    d="M716.04 508.348C716.04 508.348 713.288 479.495 685.367 469.214C657.446 458.933 637 487.794 637 487.794C637 487.794 653.511 496.489 666.096 497.678C678.688 498.86 709.361 502.419 716.04 508.348Z"
                    fill="url(#paint12_linear)"
                  />
                </g>
              </g>
              <g id="list6">
                <path
                  id="Path_3"
                  d="M730 508.348C730 508.348 732.752 479.495 760.673 469.214C788.594 458.933 809.04 487.794 809.04 487.794C809.04 487.794 792.528 496.489 779.944 497.678C767.352 498.86 736.686 502.419 730 508.348Z"
                  fill="url(#paint13_linear)"
                />
              </g>
              <g id="Path_4">
                <path
                  id="Vector_57"
                  d="M684.202 529.958L695.512 593.684C695.512 593.684 706.3 599.24 724.449 599.24C747.071 599.24 754.698 593.684 754.698 593.684L767.851 530.224L684.202 529.958Z"
                  fill="url(#paint14_linear)"
                />
                <path
                  id="Vector_58"
                  d="M774.947 524.074C774.947 527.466 772.21 530.224 768.829 530.224H682.162C678.781 530.224 676.044 527.473 676.044 524.074V511.782C676.044 508.383 678.781 505.631 682.162 505.631H768.836C772.217 505.631 774.954 508.383 774.954 511.782V524.074H774.947Z"
                  fill="url(#paint15_linear)"
                />
              </g>
              <g id="list5">
                <path
                  id="Oval"
                  d="M723 407C731.284 407 738 400.284 738 392C738 383.716 731.284 377 723 377C714.716 377 708 383.716 708 392C708 400.284 714.716 407 723 407Z"
                  fill="url(#paint16_linear)"
                />
              </g>
              <g id="list4">
                <path
                  id="Path_5"
                  d="M728.475 480.292C728.475 480.292 723.623 450.349 744.857 439.382C766.099 428.416 780.867 439.458 780.867 439.458C780.867 439.458 767.305 450.082 757.51 464.021C750.52 473.974 736.185 477.914 728.475 480.292Z"
                  fill="url(#paint17_linear)"
                />
              </g>
              <g id="list3">
                <path
                  id="Path_6"
                  d="M717.755 480.292C717.755 480.292 722.607 450.349 701.373 439.382C680.131 428.416 665.363 439.458 665.363 439.458C665.363 439.458 678.925 450.082 688.72 464.021C695.702 473.974 710.045 477.914 717.755 480.292Z"
                  fill="url(#paint18_linear)"
                />
              </g>
              <g id="list2">
                <path
                  id="Path_7"
                  d="M717.975 441.059C717.975 441.059 721.47 419.476 706.171 411.573C690.858 403.67 680.221 411.634 680.221 411.634C680.221 411.634 689.993 419.293 697.051 429.338C702.085 436.501 712.418 439.344 717.975 441.059Z"
                  fill="url(#paint19_linear)"
                />
              </g>
              <g id="list1">
                <path
                  id="Path_8"
                  d="M728.065 441.889C728.065 441.889 724.336 418.882 740.65 410.46C756.972 402.032 768.313 410.521 768.313 410.521C768.313 410.521 757.897 418.684 750.369 429.391C745.009 437.035 733.986 440.06 728.065 441.889Z"
                  fill="url(#paint20_linear)"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="410.494"
            y1="318.03"
            x2="542.214"
            y2="318.03"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1BAFF" />
            <stop offset="0.4332" stop-color="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="491.449"
            y1="358.587"
            x2="523.44"
            y2="358.587"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1BAFF" />
            <stop offset="0.4332" stop-color="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="244.416"
            y1="314.356"
            x2="397.785"
            y2="314.356"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#311341" />
            <stop offset="0.2299" stop-color="#3113C2" />
            <stop offset="0.3479" stop-color="#2F18C5" />
            <stop offset="0.4931" stop-color="#2927CC" />
            <stop offset="0.6524" stop-color="#1F40D8" />
            <stop offset="0.8219" stop-color="#1263E9" />
            <stop offset="0.9978" stop-color="#008FFF" />
            <stop offset="1" stop-color="#0090FF" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="262.146"
            y1="195.833"
            x2="288.896"
            y2="267.511"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1BAFF" />
            <stop offset="0.0001" stop-color="white" />
            <stop offset="0.4332" stop-color="white" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="343.386"
            y1="474.088"
            x2="347.987"
            y2="580.902"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0414" stop-color="#100022" />
            <stop offset="1" stop-color="#090E96" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="336.651"
            y1="445.495"
            x2="460.344"
            y2="587.799"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0414" stop-color="#10003B" />
            <stop offset="1" stop-color="#090E96" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="213.403"
            y1="362.554"
            x2="339.941"
            y2="362.554"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7633FF" />
            <stop offset="0.1585" stop-color="#7137FF" />
            <stop offset="0.3535" stop-color="#6243FF" />
            <stop offset="0.5676" stop-color="#4957FF" />
            <stop offset="0.7937" stop-color="#2672FF" />
            <stop offset="1" stop-color="#0090FF" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="302.224"
            y1="303.546"
            x2="448.341"
            y2="355.464"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7633FF" />
            <stop offset="0.0967" stop-color="#7137FF" />
            <stop offset="0.2157" stop-color="#6243FF" />
            <stop offset="0.3464" stop-color="#4957FF" />
            <stop offset="0.4844" stop-color="#2672FF" />
            <stop offset="0.6103" stop-color="#0090FF" />
          </linearGradient>
          <linearGradient
            id="paint8_linear"
            x1="558.018"
            y1="59.8399"
            x2="538.011"
            y2="158.526"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4D4D4D" />
            <stop offset="0.2928" stop-color="#898989" />
            <stop offset="0.6276" stop-color="#C8C8C8" />
            <stop offset="0.8728" stop-color="#F0F0F0" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient
            id="paint9_linear"
            x1="113.63"
            y1="213.774"
            x2="631.53"
            y2="315.732"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00411293" stop-color="#7633FF" stop-opacity="0" />
            <stop offset="0.0919" stop-color="#7051FF" stop-opacity="0.0882" />
            <stop offset="0.2626" stop-color="#6685FF" stop-opacity="0.2596" />
            <stop offset="0.4302" stop-color="#5EB1FF" stop-opacity="0.4279" />
            <stop offset="0.591" stop-color="#57D3FF" stop-opacity="0.5893" />
            <stop offset="0.7432" stop-color="#53EBFF" stop-opacity="0.7421" />
            <stop offset="0.8833" stop-color="#50FAFF" stop-opacity="0.8829" />
            <stop offset="1" stop-color="#4FFFFF" />
          </linearGradient>
          <linearGradient
            id="paint10_linear"
            x1="351.004"
            y1="116.488"
            x2="478.512"
            y2="116.488"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1BAFF" />
            <stop offset="0.0888" stop-color="#ACC2FF" />
            <stop offset="0.4988" stop-color="#D9E3FF" />
            <stop offset="0.816" stop-color="#F5F7FF" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient
            id="paint11_linear"
            x1="720.01"
            y1="459.002"
            x2="726.002"
            y2="459.002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00A49A" />
            <stop offset="0.0399" stop-color="#00A198" />
            <stop offset="0.671" stop-color="#007A7B" />
            <stop offset="1" stop-color="#006B70" />
          </linearGradient>
          <linearGradient
            id="paint12_linear"
            x1="637.005"
            y1="487.672"
            x2="716.042"
            y2="487.672"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00A49A" />
            <stop offset="0.4118" stop-color="#007477" />
            <stop offset="0.799" stop-color="#004C5A" />
            <stop offset="1" stop-color="#003D4F" />
          </linearGradient>
          <linearGradient
            id="paint13_linear"
            x1="800.758"
            y1="483.705"
            x2="728.571"
            y2="510.33"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00A49A" />
            <stop offset="0.4118" stop-color="#007477" />
            <stop offset="0.799" stop-color="#004C5A" />
            <stop offset="1" stop-color="#003D4F" />
          </linearGradient>
          <linearGradient
            id="paint14_linear"
            x1="684.2"
            y1="564.598"
            x2="767.846"
            y2="564.598"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#311341" />
            <stop offset="0.2299" stop-color="#3113C2" />
            <stop offset="0.3479" stop-color="#2F18C5" />
            <stop offset="0.4931" stop-color="#2927CC" />
            <stop offset="0.6524" stop-color="#1F40D8" />
            <stop offset="0.8219" stop-color="#1263E9" />
            <stop offset="0.9978" stop-color="#008FFF" />
            <stop offset="1" stop-color="#0090FF" />
          </linearGradient>
          <linearGradient
            id="paint15_linear"
            x1="676.046"
            y1="517.926"
            x2="774.948"
            y2="517.926"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7633FF" />
            <stop offset="0.1585" stop-color="#7137FF" />
            <stop offset="0.3535" stop-color="#6243FF" />
            <stop offset="0.5676" stop-color="#4957FF" />
            <stop offset="0.7937" stop-color="#2672FF" />
            <stop offset="1" stop-color="#0090FF" />
          </linearGradient>
          <linearGradient
            id="paint16_linear"
            x1="723"
            y1="377"
            x2="723"
            y2="407"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8E00A9" />
            <stop offset="0.729167" stop-color="#8E00A9" stop-opacity="0.71" />
          </linearGradient>
          <linearGradient
            id="paint17_linear"
            x1="727.994"
            y1="457.412"
            x2="780.863"
            y2="457.412"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00A49A" />
            <stop offset="0.0399" stop-color="#00A198" />
            <stop offset="0.671" stop-color="#007A7B" />
            <stop offset="1" stop-color="#006B70" />
          </linearGradient>
          <linearGradient
            id="paint18_linear"
            x1="680.467"
            y1="440.519"
            x2="714.444"
            y2="478.875"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00A49A" />
            <stop offset="0.0399" stop-color="#00A198" />
            <stop offset="0.671" stop-color="#007A7B" />
            <stop offset="1" stop-color="#006B70" />
          </linearGradient>
          <linearGradient
            id="paint19_linear"
            x1="680.22"
            y1="424.568"
            x2="718.322"
            y2="424.568"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00A49A" />
            <stop offset="0.0399" stop-color="#00A198" />
            <stop offset="0.671" stop-color="#007A7B" />
            <stop offset="1" stop-color="#006B70" />
          </linearGradient>
          <linearGradient
            id="paint20_linear"
            x1="727.697"
            y1="424.312"
            x2="768.315"
            y2="424.312"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00A49A" />
            <stop offset="0.0399" stop-color="#00A198" />
            <stop offset="0.671" stop-color="#007A7B" />
            <stop offset="1" stop-color="#006B70" />
          </linearGradient>
        </defs>
      </svg>
    </Wrapper>
  );
}

export default Illustration;
