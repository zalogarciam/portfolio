import React, { useEffect } from "react";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Typewriter from "typewriter-effect";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { Link } from "react-router-dom";
import { fetchHomeData } from "../redux/thunks/homeThunk";
import { useDispatch } from "react-redux";
import useHome from "../hooks/useHome";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, homeData } = useHome();

  useEffect(() => {
    document.title = "Home - Gonzalo Garcia Martinez";
    Object.keys(homeData).length === 0 && dispatch(fetchHomeData());
    console.log(homeData);
  }, []);

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="py-5">
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
                "I am a Full Stack Software Developer with 9+ years of experience.<br/>"
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
          cancelOnInteraction={true}
          interval={7000}
        >
          {homeData[0]?.images?.map((src, index) => (
            <div className="text-center" key={index}>
              <img className="banner-img" src={src} alt={`slide-${index}`} />
            </div>
          ))}
        </AutoplaySlider>
      </div>
      <div className="pt-5">
        <p className="subtitle-highlight-text text-center pb-5">
          Recent Activities
        </p>

        <div className="px-4 container">
          {homeData[0]?.activities?.map((activity, index) => {
            return (
              <ul key={index} className="list-group format-text">
                <li
                  className="paragraph-text list-item"
                  style={{ margin: "0" }}
                >
                  <span className="paragraph-highlight-text">
                    {activity.month}:{" "}
                  </span>{" "}
                  {activity.introduction}{" "}
                  <Link className="link" to={activity.link} target="_blank">
                    {activity.institution}.
                  </Link>{" "}
                  {activity.date}.{" "}
                </li>
              </ul>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
