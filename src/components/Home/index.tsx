import React from "react";
import Loadable from "@loadable/component";

import AboutMeContent from "../../content/AboutMe.json";
import IntroContent from "../../content/IntroContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import SocialContent from "../../content/SocialContent.json";
import ContactContent from "../../content/ContactContent.json";
import SlidesList from "../../content/SlidesList.json";
import SlidesContent from "../../content/SlidesContent.json";

import Slide from "../Slide";
import { Fade, Zoom } from "react-awesome-reveal";

const AboutMe = Loadable(() => import("../About"));
const FlipCard = Loadable(() => import("../FlipCard"));
const ContactFrom = Loadable(() => import("../ContactForm"));
const ContentBlock = Loadable(() => import("../ContentBlock"));
const MiddleBlock = Loadable(() => import("../MiddleBlock"));
const Container = Loadable(() => import("../../common/Container"));
const ScrollToTop = Loadable(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="employee.svg"
        id="intro"
      />

      <AboutMe
        title={AboutMeContent.title}
        subtitle={AboutMeContent.subtitle}
        content={AboutMeContent.text}
        button={AboutMeContent.button}
      />

      {/*
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}

      {/* slides */}
      <Zoom direction="right">
        <FlipCard slides={SlidesContent} />
      </Zoom>

      <Fade direction="up">
        {
          SlidesList.map(item => {
            return (
              <Slide title={item.title} src={item.src} key={item.src}/>
            );
          })
        }
      </Fade>

      {/* about */}
      {/*
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      */}

      {/* mission */}
      {/*
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      */}

      {/* social */}
      {/*
      <ContentBlock
        type="left"
        title={SocialContent.title}
        content={SocialContent.text}
        icon="social.svg"
        id="social"
      />
      */}

      {/* contact */}
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
