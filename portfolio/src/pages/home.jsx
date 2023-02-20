import React, { Component } from "react";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Typewriter from "typewriter-effect";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import LoadingContainer from "../components/loader/loading";
import { Link } from "react-router-dom";

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

      <div className="slider-contain pb-5">
        <AutoplaySlider
          animation="cubeAnimation"
          play={true}
          cancelOnInteraction={true} // should stop playing on user interaction
          interval={7000}
        >
          <div className="text-center ">
            <img
              className="banner-img"
              src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/snowboard.webp"
            />
          </div>
          <div className="text-center banner-img">
            <img
              className="banner-img"
              src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/code.webp"
            />
          </div>
        </AutoplaySlider>
      </div>
      <div className="pt-5">
        <p className="subtitle-highlight-text text-center pb-5">
          Recent Activities
        </p>
        <div className="container">
          <ul className="list-group">
            <li className="paragraph-text list-item">
              <span className="paragraph-highlight-text">December 2022: </span>{" "}
              Presentation at IV Virtual Job Fair named Higher studies abroad
              (masters and PhD){" "}
              <Link
                className="link"
                to={"https://www.unsa.edu.pe"}
                target="_blank"
              >
                Universidad Nacional de San Agustin (UNSA).
              </Link>{" "}
              Arequipa, Peru from december 12 to december 16, 2022{" "}
            </li>
            <li className="paragraph-text list-item">
              <span className="paragraph-highlight-text">November 2022: </span>{" "}
              Mentored startups that are incubated in universities. Organized
              by:{" "}
              <Link
                className="link"
                to={"http://www.koica.go.kr"}
                target="_blank"
              >
                KOICA (Korea International Cooperation Agency), Inha University.
              </Link>{" "}
              Arequipa, Peru on november, 2022{" "}
            </li>
            <li className="paragraph-text list-item">
              <span className="paragraph-highlight-text">April 2022: </span>{" "}
              Taught Software Engineering courses Web Programming with Python
              and Game Development in Unity at{" "}
              <Link
                className="link"
                to={"https://www.iestp-ppd.edu.pe"}
                target="_blank"
              >
                Instituto Pedro P. Diaz.
              </Link>{" "}
              Arequipa, Peru from march 1st to april 30, 2022{" "}
            </li>
            <li className="paragraph-text list-item">
              <span className="paragraph-highlight-text">October 2021: </span>{" "}
              Participated with startup ideas at at{" "}
              <Link
                className="link"
                to={"https://www.facebook.com/expoemprendeaqp/"}
                target="_blank"
              >
                Expo Emprende 2021.
              </Link>{" "}
              Arequipa, Peru from october 20 to october 24, 2021{" "}
            </li>
            <li className="paragraph-text list-item">
              <span className="paragraph-highlight-text">June 2021: </span> Gave
              talks at{" "}
              <Link
                className="link"
                to={"https://www.facebook.com/bpraustralia"}
                target="_blank"
              >
                BPR Australia - Education Website.
              </Link>{" "}
              Melbourne, Victoria, Australia from june to october, 2021{" "}
            </li>
            <li className="paragraph-text list-item">
              <span className="paragraph-highlight-text">May 2021: </span>{" "}
              Published a paper at{" "}
              <Link
                className="link"
                to={"https://chi2021.acm.org"}
                target="_blank"
              >
                Conference on Human Factors in Computing Systems (CHI).
              </Link>{" "}
              Yokohama, Japan from may 8 to may 13, 2021{" "}
            </li>
            <li className="paragraph-text list-item">
              <span className="paragraph-highlight-text">December 2020: </span>{" "}
              Webinar presentation: Simulation of climate change with virtual
              reality at{" "}
              <Link
                className="link"
                to={"https://www.ulasalle.edu.pe"}
                target="_blank"
              >
                Universidad La Salle.
              </Link>{" "}
              Arequipa, Peru on December 21, 2020{" "}
            </li>
            <li className="paragraph-text list-item">
              <span className="paragraph-highlight-text">December 2020: </span>{" "}
              Published a paper at{" "}
              <Link
                className="link"
                to={"http://www.ozchi.org/2020/"}
                target="_blank"
              >
                32nd Australian Conference On Human-Computer Interaction
                (OzCHI).
              </Link>{" "}
              Sydney NSW Australia from december 2 to december 4, 2020{" "}
            </li>
            <li className="paragraph-text list-item">
              <span className="paragraph-highlight-text">September 2019: </span>{" "}
              Published a paper at{" "}
              <Link
                target="_blank"
                className="link"
                to={"https://clei.org/clei2019/en/index.html"}
              >
                XLV Latin American Computing Conference (CLEI).
              </Link>{" "}
              Wyndham Panama Albrook Mall Panama City, Panama from september 30
              to october 4, 2019{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
