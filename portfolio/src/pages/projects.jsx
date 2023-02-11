import Typewriter from "typewriter-effect";
import restlens from "../assets/img/projects/reslens.webp";
import algorithms from "../assets/img/projects/algorithms.webp";
import autodema from "../assets/img/projects/autodema.webp";
import coauthor from "../assets/img/projects/coauthor.webp";
import cova from "../assets/img/projects/cova.webp";
import dinosaur from "../assets/img/projects/dinosaur.webp";
import maxlenz from "../assets/img/projects/maxlenz.webp";
import melbourne2100 from "../assets/img/projects/melbourne2100.webp";
import pacman from "../assets/img/projects/pacman.webp";
import textanalysis from "../assets/img/projects/textanalysis.webp";
import twitter from "../assets/img/projects/twitter.webp";
import ugel from "../assets/img/projects/ugel.webp";
import misinformation from "../assets/img/projects/misinformation.webp";
import portfolio from "../assets/img/logo.png";
import { BsGithub, BsYoutube, BsNewspaper } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

import { FaKaggle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import { fetchProjectsData } from "../redux/thunks/projectsThunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Projects = () => {
  const dispatch = useDispatch();
  const { loading, projectsData } = useProjects();

  useEffect(() => {
    document.title = "Projects - Gonzalo Garcia Martinez";
    Object.keys(projectsData).length === 0 && dispatch(fetchProjectsData());
    console.log(projectsData);
  }, []);

  return (
    <div className="container">
      <div
        className="row text-center title-highlight-text pb-5"
        style={{ height: "12rem" }}
      >
        <Typewriter
          options={{
            delay: 50,
            autoStart: true,
          }}
          onInit={(typeWriter) => {
            typeWriter.typeString("Projects").start();
          }}
        />
      </div>
      <div className="row">
        {Object.entries(projectsData).map((project) => {
          return (
            <div
              key={project[1].id}
              className="col-md-12 col-sm-12 col-12 col-lg-12 col-xl-6 d-flex d-flex--center pt-3 pb-3"
            >
              <div className="card-container row">
                <div className="card-header d-flex d-flex--center">
                  <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                    {project[1].title}
                  </h5>
                </div>
                <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
                  <img
                    src={project[1].image}
                    className="card-img"
                    alt={project[1].title}
                  />
                </div>
                <div className="col-md-7 col-sm-12 col-12 col-lg-7">
                  <div className="card-body d-flex d-flex--center">
                    <p className="paragraph-text format-text">
                      {project[1].description}
                    </p>
                  </div>
                </div>
                <div className="card-tech-footer d-flex d-flex--center">
                  <Link
                    className="link"
                    to={"//zalogarciam.github.io/portfolio/"}
                    target="_blank"
                  >
                    <TfiWorld className="icon--xl"></TfiWorld>
                  </Link>{" "}
                  <Link
                    className="link"
                    to={"//github.com/zalogarciam/portfolio"}
                    target="_blank"
                  >
                    <BsGithub className="icon--xl"></BsGithub>
                  </Link>{" "}
                </div>
                <div className="card-footer d-flex d-flex--center">
                  <p className="paragraph-highlight-text">Last updated {project[1].date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
