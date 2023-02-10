import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import zalo from "../assets/img/zalo.webp";
import ucsm from "../assets/img/ucsm.webp";
import unimelb from "../assets/img/unimelb.webp";
import html from "../assets/img/svg/html.svg";
import css from "../assets/img/svg/css.svg";
import js from "../assets/img/svg/js.svg";
import react from "../assets/img/svg/react.svg";
import python from "../assets/img/svg/python.svg";
import csharp from "../assets/img/svg/csharp.svg";
import { fetchAboutMeData } from "../redux/thunks/aboutMeThunk";
import useAboutMe from "../hooks/useAboutMe";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AboutMe = () => {
  const dispatch = useDispatch();
  const { loading, aboutMeData } = useAboutMe();

  useEffect(() => {
    document.title = "About Me - Gonzalo Garcia Martinez";
    Object.keys(aboutMeData).length === 0 && dispatch(fetchAboutMeData());
  }, []);

  return (
    <div className="container">
      <div
        className="text-center title-highlight-text pb-5"
        style={{ height: "8rem" }}
      >
        <Typewriter
          options={{
            delay: 50,
            autoStart: true,
          }}
          onInit={(typeWriter) => {
            typeWriter.typeString("About Me").start();
          }}
        />
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 format-text pb-5">
          <p className="paragraph-text">{aboutMeData[0]}</p>
          <div className="row">
            <div className="col-sm-12 col-md-6 row-padding">
              <p className="paragraph-text">{aboutMeData[1]}</p>
            </div>
            <div className="col-sm-12 col-md-6 d-flex d-flex--center d-flex--direction-column gap-md pb-4">
              <div className="d-flex d-flex--center pt-1 pb-1">
                <img
                  src={ucsm}
                  width="256"
                  className="studies-img"
                  alt="Gonzalo Garcia"
                />
              </div>
              <div className="d-flex d-flex--center pt-1 pb-1">
                <img
                  src={unimelb}
                  width="256"
                  className="studies-img"
                  alt="Gonzalo Garcia"
                />
              </div>
            </div>
          </div>

          <p className="paragraph-text">{aboutMeData[2]}</p>
          <p className="paragraph-text">
            {aboutMeData[3]}{" "}
            <Link className="link" to="/portfolio/projects">
              here
            </Link>
            .
          </p>
          <p className="paragraph-text">{aboutMeData[4]}</p>
        </div>
        <div className="col-sm-12 col-md-6 d-flex d-flex--center pb-5">
          <div className="d-flex d-flex--center">
            <div className="rotation-container">
              <img
                src={zalo}
                width="256"
                alt="Gonzalo Garcia"
                className="rotate-img"
              />
              <figure className="rotation-decorators">
                <img
                  src={html}
                  alt="html"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src={css}
                  alt="css"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src={js}
                  alt="js"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src={react}
                  alt="react"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src={csharp}
                  alt="csharp"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src={python}
                  alt="python"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
