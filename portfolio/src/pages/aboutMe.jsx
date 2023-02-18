import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
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
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/ucsm.webp"
                  width="256"
                  className="studies-img"
                  alt="Gonzalo Garcia"
                />
              </div>
              <div className="d-flex d-flex--center pt-1 pb-1">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/unimelb.webp"
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
                src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/zalo.webp"
                width="256"
                alt="Gonzalo Garcia"
                className="rotate-img"
              />
              <figure className="rotation-decorators">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/html.svg"
                  alt="html"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/css.svg"
                  alt="css"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/js.svg"
                  alt="js"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/react.svg"
                  alt="react"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/csharp.svg"
                  alt="csharp"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/python.svg"
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
