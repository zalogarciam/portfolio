import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import html from "../assets/img/svg/html.svg";
import css from "../assets/img/svg/css.svg";
import js from "../assets/img/svg/js.svg";
import react from "../assets/img/svg/react.svg";
import python from "../assets/img/svg/python.svg";
import csharp from "../assets/img/svg/csharp.svg";
import django from "../assets/img/svg/django.svg";
import net from "../assets/img/svg/net.svg";
import mysql from "../assets/img/svg/mysql.svg";
import postgresql from "../assets/img/svg/postgresql.svg";
import redux from "../assets/img/svg/redux.svg";
import sqlserver from "../assets/img/svg/sqlserver.svg";
import unity from "../assets/img/svg/unity.svg";
import vite from "../assets/img/svg/vite.svg";
import telerik from "../assets/img/svg/telerik.svg";
import resume from "../assets/pdf/resume.pdf";

import { BsDownload } from "react-icons/bs";

const Experience = () => {
  const onButtonClick = () => {
    fetch("GONZALO_RESUME.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = resume;
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "GONZALO_RESUME.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="container">
      <div
        className="container text-center title-highlight-text pb-5"
        style={{ height: "12rem" }}
      >
        <Typewriter
          options={{
            delay: 50,
            autoStart: true,
          }}
          onInit={(typeWriter) => {
            typeWriter.typeString("Experience").start();
          }}
        />
      </div>
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-12 format-text pb-5 d-flex d-flex--center d-flex--direction-column">
            <div>
              <p className="subtitle-highlight-text">Back End</p>
            </div>
            <div className="row pt-3 pb-3">
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={csharp} width="64" className="tech-img" />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={python} width="64" className="tech-img" />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={net} width="64" className="tech-img" />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={django} width="64" className="tech-img" />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={sqlserver} width="64" className="tech-img" />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={unity} width="64" className="tech-img" />
              </div>
            </div>
            <div>
              <p className="subtitle-highlight-text">Front End</p>
            </div>
            <div className="row pt-3 pb-3">
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={react} width="64" className="tech-img" />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={css} width="64" className="tech-img" />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={html} width="64" className="tech-img" />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={redux} width="64" className="tech-img" />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={js} width="64" className="tech-img" />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img src={telerik} width="64" className="tech-img" />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 format-text pb-5">
            <p className="paragraph-text">
              As a software engineer with 7 years of experience in the industry,
              I have honed my skills in developing high-quality, scalable and
              efficient software solutions. I have a strong understanding of C#,
              Python and SQL for the back end; and also with React JS, CSS, HTML
              and Javascript for the front-end.
            </p>
            <p className="paragraph-text">
              I have had the opportunity to work on a variety of projects
              including those that involved cutting-edge research in the fields
              of Artificial Intelligence and Human-Computer Interaction. I work
              collaboratively with cross-functional teams, analyze user
              requirements, and deliver effective solutions has enabled me to
              make significant contributions to the success of my past projects.
            </p>
            <p className="paragraph-text">
              You can check some of them in my resume below. I am always eager
              to learn and stay up-to-date with the latest industry trends and
              technologies.
            </p>
            <div className="d-flex d-flex--center pt-2">
              <button className="btn btn-secondary" onClick={onButtonClick}>
                Download Resume
                <BsDownload className="icon--secondary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
