import React, { Component } from "react";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="pt-5">
      <div className="container text-center subtitle-highlight-text pb-5">
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

      <div>
        <AutoplaySlider
          className="test"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={20000}
        >
          <div
            className="text-center text-highlight"
            style={{ backGroundColor: "red" }}
          >
            <p className="text-highlight">
              Software Developer with 7+ years of experience
            </p>
            <p className="text-highlight">
              Feel free to take a look at my latest projects.
            </p>
            <p className="text-highlight">
              Remotely available (GMT-5). gegarciam95@gmail.com
            </p>
          </div>
          <div>2</div>
          <div>3</div>
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Home;
