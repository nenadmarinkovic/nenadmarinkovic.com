import {
  PortfolioWrap,
  PortfolioInfo,
  SlideContainer,
  SlideInfo,
  SlideInfoTitle,
  SlideInfoDescription,
  SlideCountTitle,
  SlideCount,
  SlideDetails,
  SlideDetailsTitle,
  SlideSubtitle,
  SlideDetailsDescription,
  SlideArrows,
  PrevArrow,
  NextArrow,
  PortfolioIntro,
  PortfolioIntroMain,
  PortfolioIntroSecond,
  ImageWrapper,
  WebLink,
  PortfolioContent
} from "../styles/components/Portfolio";
import WaveTop from "./WaveTop";
import WaveBottom from "./WaveBottom";
import Fade from "react-reveal/Fade";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      animating: false,
      animationDirection: "",
      animationDuration: 300,
      currentSlide: 0,
      slides: [
        {
          title: "Reuse",
          imageUrl: "/reuse.png",
          description:
            "Reuse is web application aimed at solving developer's need for managing code patterns. Application uses .mdx format for highlighting code, GraphQL API for quering data, Gatsby for the front-end, and Emotion for styling components. Reuse is an ongoing project, free and open-source.",
          details: {
            technology: "React, GraphQL, Gatsby, Emotion, MDX",
            provider: "Vercel",
            link: "reuse.codes",
          },
        },
        {
          title: "Diversify",
          imageUrl: "/diversify.png",
          description:
            "Diversify is a project by Avuteq company aimed at promoting better inclusion of female professionals in the IT industry, especially in the fields of Product and Engineering. Diversify is build with Gatsby, and styled with styled-components. ",
          details: {
            technology: "React, Gatsby, styled-components",
            provider: "Vercel",
            link: "diversify.team",
          },
        },
        {
          title: "Melodrom",
          imageUrl: "/melodrom.png",
          description:
            "Melodrom is a piano and solfeggio workshop from Lapovo, Serbia. The workshop wants to bring music to everyone interested, but especially children and young adults. Project is build with Next.js, React, React-Piano, Leaflet Map, and styled with styled-components.",
          details: {
            technology: "React, Next.js, styled-components",
            provider: "Vercel",
            link: "melodrom.rs",
          },
        },
        {
          title: "Flickschuh Wien",
          imageUrl: "/flickschuh.png",
          description:
            "Flickschuh Wien is a bike service from Vienna, Austria. Its a small presentational project created with Next.js, styled-components, Leaflet Map, and nice SVG illustration.",
          details: {
            technology: "React, Next.js, Leaflet, styled-components",
            provider: "Vercel",
            link: "flickschuh.wien",
          },
        },
      ],
    };

    this.changeSlide = this.changeSlide.bind(this);
  }

  fireAnims(duration) {
    this.setState({
      animating: true,
      animationDirection: "out",
    });

    setTimeout(() => {
      this.setState({
        animating: true,
        animationDirection: "in",
      });
    }, duration / 2);

    setTimeout(() => {
      this.setState({
        animating: false,
        animationDirection: "",
      });
    }, duration);
  }

  changeSlide(dir) {
    const currentSlide = this.state.currentSlide;
    const slides = this.state.slides;

    if (dir === "right") {
      if (currentSlide < slides.length - 1) {
        this.fireAnims(this.state.animationDuration * 2);
        window.setTimeout(() => {
          this.setState({
            currentSlide: currentSlide + 1,
          });
        }, this.state.animationDuration);
      }
    } else {
      if (currentSlide > 0) {
        this.fireAnims(this.state.animationDuration * 2);
        window.setTimeout(() => {
          this.setState({
            currentSlide: currentSlide - 1,
          });
        }, this.state.animationDuration);
      }
    }
  }

  determineDir(delta) {
    if (delta > 0) {
      return "right";
    } else {
      return "left";
    }
  }

  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }
  render() {
    let classes = ["slideshow"];
    if (this.state.animating) {
      classes.push(
        "slideshow--animated slideshow--" + this.state.animationDirection
      );
    } else {
      classes = ["slideshow"];
    }
    return (
      <div className={classes.join(" ")}>
        <Slide
          title={this.state.slides[this.state.currentSlide].title}
          image={this.state.slides[this.state.currentSlide].imageUrl}
          description={this.state.slides[this.state.currentSlide].description}
          details={this.state.slides[this.state.currentSlide].details}
          count={this.state.currentSlide + 1}
          changeSlide={this.changeSlide}
          slideLength={this.state.slides.length}
          theme={this.props.theme}
        />
      </div>
    );
  }
}

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <WaveTop theme={this.props.theme} />
        <PortfolioWrap>
          <div tabIndex={0}>
            <div className="container">
              <PortfolioIntro>
                <PortfolioIntroMain id="projects">Projects</PortfolioIntroMain>
                <PortfolioIntroSecond>
                  Showcase of professional and personal websites and web
                  applications.
                </PortfolioIntroSecond>
              </PortfolioIntro>
              <SlideContainer>
                <SlideInfo>
                  <div className="slide-info-text">
                    <Fade bottom delay={400} duration={400}>
                      <SlideInfoTitle>{this.props.title}</SlideInfoTitle>
                      <SlideInfoDescription>
                        {this.props.description}
                      </SlideInfoDescription>
                    </Fade>
                  </div>
                  <div >
                    <Fade bottom delay={650} duration={400}>
                      <ImageWrapper>
                        <img
                          src={`${this.props.image}`}
                          alt="Picture of the project"
                          className="slide-info-image"
                        />
                      </ImageWrapper>
                    </Fade>
                  </div>
                </SlideInfo>

                <PortfolioInfo>
                  <Fade bottom delay={900} duration={400}>
                    <div className="slide-count">
                      <SlideCountTitle>Project</SlideCountTitle>
                      <SlideCount>
                        0
                        <span className="slide-count-num">
                          {this.props.count}
                        </span>
                      </SlideCount>
                    </div>
                  </Fade>
                  <PortfolioContent>
                    <Fade bottom delay={1150} duration={400}>
                      <SlideDetails>
                        <SlideDetailsTitle>Project details</SlideDetailsTitle>

                        <div className="slide-details-block slide-one">
                          <SlideSubtitle>Technologies</SlideSubtitle>
                          <SlideDetailsDescription>
                            {this.props.details.technology}
                          </SlideDetailsDescription>
                        </div>

                        <div className="slide-details-block slide-two">
                          <SlideSubtitle> Deployed on</SlideSubtitle>
                          <SlideDetailsDescription>
                            {this.props.details.provider}
                          </SlideDetailsDescription>
                        </div>

                        <div className="slide-details-block slide-three">
                          <SlideSubtitle>Website's link</SlideSubtitle>
                          <SlideDetailsDescription>
                            <WebLink
                              target="_blank"
                              href={`https://${this.props.details.link}`}
                            >
                              {this.props.details.link}
                            </WebLink>
                          </SlideDetailsDescription>
                        </div>
                      </SlideDetails>
                    </Fade>
                  </PortfolioContent>
                </PortfolioInfo>
              </SlideContainer>
              <SlideArrows>
                <a
                  className={
                    this.props.count > 1
                      ? `slide-arrows-arrow`
                      : `slide-arrows-arrow slide-arrows-arrow--disabled`
                  }
                  onClick={(e) => this.props.changeSlide("left")}
                >
                  <PrevArrow
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 492 492"
                  >
                    <g>
                      <g>
                        <path
                          d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
                        />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </PrevArrow>
                </a>
                <a
                  className={
                    this.props.count < this.props.slideLength
                      ? `slide-arrows-arrow`
                      : `slide-arrows-arrow slide-arrows-arrow--disabled`
                  }
                  onClick={(e) => this.props.changeSlide("right")}
                >
                  <NextArrow
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 492.004 492.004"
                  >
                    <g>
                      <g>
                        <path
                          d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                        />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </NextArrow>
                </a>
              </SlideArrows>
            </div>
          </div>
        </PortfolioWrap>
        <WaveBottom theme={this.props.theme} />
      </>
    );
  }
}

export default Portfolio;
