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

const AboutMe = () => {
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
          <p className="paragraph-text">
            Hi, I am a peruvian developer living in Arequipa, Peru.
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <p className="paragraph-text">
                I studied Software Engineering at Universidad Catolica de Santa
                Maria, Peru and a Master of Computer Science at The University
                of Melbourne, Australia.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 d-flex d-flex--center d-flex--direction-column gap-md pb-4">
              <div className="d-flex d-flex--center">
                <img
                  src={ucsm}
                  width="256"
                  className="studies-img"
                  alt="Gonzalo Garcia"
                />
              </div>
              <div className="d-flex d-flex--center">
                <img
                  src={unimelb}
                  width="256"
                  className="studies-img"
                  alt="Gonzalo Garcia"
                />
              </div>
            </div>
          </div>

          <p className="paragraph-text">
            Currently, I am working at Baires Dev, USA as a Software Engineer as
            a Web/Desktop developer.
          </p>
          <p className="paragraph-text">
            I have a strong deep problem solving knowledge in Algorithms and
            Data Structures. Furthermore, I have Research Experience focused on
            Artificial Intelligence and Human-Computer Interaction. You can find
            related projects{" "}
            <Link className="link" to="/portfolio/projects">
              here
            </Link>
            .
          </p>
          <p className="paragraph-text">
            I love programming, and I do have hobbies of my interest that I
            enjoy such as Snowboard and Crossfit
          </p>
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