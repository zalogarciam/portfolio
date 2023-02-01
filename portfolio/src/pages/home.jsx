import React, { Component } from "react";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Typewriter from "typewriter-effect";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const Home = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

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
              .typeString("Hello, my name is Gonzalo Garcia Martinez.<br/>")
              .typeString(
                "I am a Software Developer with 7+ years of experience.<br/>"
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
          animation="scaleOutAnimation"
          play={true}
          cancelOnInteraction={true} // should stop playing on user interaction
          interval={1000}
        >
          <div className="text-center ">
            <img
              className="banner-img"
              src="../src/assets/img/snowboard.webp"
            />
          </div>
          <div className="text-center banner-img">
            <img className="banner-img" src="../src/assets/img/code.webp" />
          </div>
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Home;
