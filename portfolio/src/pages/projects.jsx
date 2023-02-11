import Typewriter from "typewriter-effect";
import useProjects from "../hooks/useProjects";
import { fetchProjectsData } from "../redux/thunks/projectsThunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProjectLinks from "../components/projects/projectLinks";

const Projects = () => {
  const dispatch = useDispatch();
  const { loading, projectsData } = useProjects();

  useEffect(() => {
    document.title = "Projects - Gonzalo Garcia Martinez";
    Object.keys(projectsData).length === 0 && dispatch(fetchProjectsData());
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
                  <ProjectLinks links={project[1].links}></ProjectLinks>
                </div>
                <div className="card-footer d-flex d-flex--center">
                  <p className="paragraph-highlight-text">
                    Last updated {project[1].date}
                  </p>
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
