import React, { Component } from "react";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Typewriter from "typewriter-effect";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import snowboard from "../assets/img/snowboard.webp";
import code from "../assets/img/code.webp";

const Home = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info("This page is reloaded");
  } else {
    console.info("This page is not reloaded");
  }

  return (
    <div className="pt-5">
      <div
        className="container text-center subtitle-highlight-text pb-5"
        style={{ height: "12rem" }}
      >
        <Typewriter
          options={{
            delay: 50,
            autoStart: true,
          }}
          onInit={(typeWriter) => {
            typeWriter
              .pauseFor(8000)
              .typeString("Hi! My name is Gonzalo Garcia Martinez.<br/>")
              .typeString(
                "I am a Full Stack Software Developer with 7+ years of experience.<br/>"
              )
              .typeString(
                "Feel free to take a look at my latest projects.<br/>"
              )
              .typeString("Remotely available (GMT-5).")
              .start();
          }}
        />
      </div>

      <div className="slider-contain">
        <AutoplaySlider
          animation="cubeAnimation"
          play={true}
          cancelOnInteraction={true} // should stop playing on user interaction
          interval={7000}
        >
          <div className="text-center ">
            <img className="banner-img" src={snowboard} />
          </div>
          <div className="text-center banner-img">
            <img className="banner-img" src={code} />
          </div>
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Home;