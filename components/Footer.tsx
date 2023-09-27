import { Container, FlexContainer } from "../styles/components/layout";
import { SpotifyType, ThemeType } from "../lib/types";
import {
  FooterWrap,
  FooterItem,
  FooterItemText,
  BottomText,
} from "../styles/components/footer";

type PropTypes = SpotifyType & ThemeType;

function Footer({ spotifyData, theme }: PropTypes) {
  return (
    <FooterWrap>
      <Container>
        <FlexContainer>
          <FooterItem>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2449 0C6.82556 0 0 6.82538 0 15.2447C0 23.6645 6.82556 30.4893 15.2449 30.4893C23.6652 30.4893 30.49 23.6645 30.49 15.2447C30.49 6.82592 23.6652 0.000728172 15.2447 0.000728172L15.2449 0ZM22.2361 21.9873C22.1711 22.0939 22.0856 22.1866 21.9847 22.2601C21.8838 22.3337 21.7693 22.3866 21.6479 22.4158C21.5265 22.4451 21.4005 22.4501 21.2772 22.4306C21.1538 22.4111 21.0355 22.3675 20.9291 22.3022C17.3497 20.1159 12.8437 19.6207 7.53717 20.8331C7.29145 20.889 7.0336 20.845 6.82028 20.7109C6.60697 20.5767 6.45565 20.3634 6.39957 20.1177C6.37165 19.996 6.36799 19.8701 6.38881 19.747C6.40963 19.624 6.45451 19.5062 6.5209 19.4005C6.58729 19.2949 6.67387 19.2033 6.77569 19.1311C6.87751 19.0589 6.99257 19.0076 7.11428 18.9799C12.9215 17.6526 17.9028 18.2244 21.9212 20.6802C22.369 20.9551 22.511 21.5395 22.2361 21.9873ZM24.1021 17.8358C23.758 18.3956 23.0262 18.5721 22.4673 18.2281C18.3695 15.7088 12.123 14.9793 7.27612 16.4506C6.64752 16.6405 5.9836 16.2862 5.79282 15.6587C5.70179 15.357 5.73411 15.0315 5.88269 14.7537C6.03128 14.4758 6.284 14.2681 6.58544 14.1763C12.1219 12.4964 19.0048 13.3102 23.7107 16.2019C24.2696 16.546 24.4461 17.2776 24.1021 17.8358ZM24.2623 13.5133C19.3489 10.595 11.2425 10.3266 6.5514 11.7504C5.7981 11.9789 5.00148 11.5536 4.77319 10.8003C4.66342 10.4384 4.70188 10.0477 4.88012 9.71414C5.05835 9.38057 5.36177 9.13145 5.72364 9.02156C11.1087 7.3868 20.0607 7.70265 25.7175 11.0608C25.8788 11.1562 26.0196 11.2824 26.1319 11.4323C26.2443 11.5822 26.326 11.7528 26.3723 11.9343C26.4186 12.1158 26.4287 12.3046 26.402 12.49C26.3752 12.6754 26.3121 12.8537 26.2163 13.0147C25.8158 13.6923 24.9384 13.9156 24.263 13.5133H24.2623Z"
                fill="#1ED760"
              />
            </svg>
            <FooterItemText>
              {spotifyData?.isPlaying ? (
                <>
                  <a
                    href={`${spotifyData.songUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="spotify-link"
                  >
                    Playing: {spotifyData.artist} - {spotifyData.title}
                  </a>
                  <div className="box">
                    <div className="music one"></div>
                    <div className="music two"></div>
                    <div className="music three"></div>
                  </div>
                </>
              ) : (
                "Not playing currently"
              )}
            </FooterItemText>
          </FooterItem>
          <FooterItem>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.3277 0C6.85187 0 0 6.90238 0 15.4416C0 22.2674 4.39023 28.0453 10.4806 30.0903C11.2421 30.244 11.521 29.758 11.521 29.3492C11.521 28.9912 11.4959 27.7642 11.4959 26.4857C7.23212 27.4062 6.34423 24.6449 6.34423 24.6449C5.65901 22.8553 4.64373 22.3954 4.64373 22.3954C3.2482 21.4495 4.74538 21.4495 4.74538 21.4495C6.2934 21.5517 7.10568 23.0345 7.10568 23.0345C8.47581 25.3863 10.6836 24.7218 11.5718 24.3127C11.6986 23.3156 12.1049 22.6254 12.5363 22.242C9.13561 21.884 5.55767 20.5547 5.55767 14.6233C5.55767 12.936 6.16633 11.5555 7.13078 10.4819C6.97862 10.0985 6.44557 8.51314 7.28326 6.39129C7.28326 6.39129 8.57746 5.98217 11.4956 7.97633C12.745 7.63832 14.0334 7.46637 15.3277 7.46492C16.6219 7.46492 17.9412 7.64407 19.1594 7.97633C22.0779 5.98217 23.3721 6.39129 23.3721 6.39129C24.2098 8.51314 23.6764 10.0985 23.5242 10.4819C24.5141 11.5555 25.0977 12.936 25.0977 14.6233C25.0977 20.5547 21.5197 21.8583 18.0936 22.242C18.6521 22.7276 19.134 23.6479 19.134 25.1052C19.134 27.1759 19.1089 28.8378 19.1089 29.3489C19.1089 29.758 19.3882 30.244 20.1493 30.0906C26.2397 28.045 30.6299 22.2674 30.6299 15.4416C30.655 6.90238 23.7781 0 15.3277 0Z"
                fill={theme === "dark" ? "white" : "#24292F"}
              />
            </svg>

            <FooterItemText>
              <a
                href="https://github.com/nenadmarinkovic"
                target="_blank"
                rel="noreferrer"
              >
                GitHub profile
              </a>
            </FooterItemText>
          </FooterItem>
        </FlexContainer>
      </Container>
      <BottomText>{new Date().getFullYear()} © Nenad Marinković</BottomText>
    </FooterWrap>
  );
}

export default Footer;
