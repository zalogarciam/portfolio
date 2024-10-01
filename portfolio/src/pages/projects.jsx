import Typewriter from "typewriter-effect";
import useProjects from "../hooks/useProjects";
import { fetchProjectsData } from "../redux/thunks/projectsThunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProjectLinks from "../components/projects/projectLinks";
import ProjectTechs from "../components/projects/projectTechs";
import LoadingContainer from "../components/loader/loading";

const Projects = () => {
  const dispatch = useDispatch();
  const { loading, projectsData } = useProjects();

  useEffect(() => {
    document.title = "Projects - Gonzalo Garcia Martinez";
    projectsData.length === 0 && dispatch(fetchProjectsData());
    console.log(projectsData);
  }, []);

  return (
    <div className="container pb-5">
      {loading && <LoadingContainer />}
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
      <div className="row ">
        {[...projectsData]
          .sort((a, b) => a.date - b.date)
          .map((project) => {
            return (
              <div
                key={project.id}
                className="col-md-12 col-sm-12 col-12 col-lg-12 col-xl-6 d-flex d-flex--center pt-3 pb-3"
              >
                <div className="card-container row">
                  <div>
                    <div
                      className={
                        "ribbon ribbon__" + project.status + " ribbon-top-right"
                      }
                    >
                      <span className={"ribbon-span-" + project.status}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="card-header d-flex d-flex--center">
                    <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                      {project.title}
                    </h5>
                  </div>
                  <div className="col-md-5 col-sm-12 col-12 col-lg-5">
                    <img
                      src={project.image}
                      className="card-img"
                      alt={project.title}
                    />
                  </div>
                  <div className="col-md-7 col-sm-12 col-12 col-lg-7">
                    <div className="card-body d-flex d-flex--center">
                      <p className="paragraph-text format-text">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="card-tech-footer d-flex d-flex--center">
                    <ProjectLinks links={project.links}></ProjectLinks>
                  </div>
                  <div className="card-tech-footer d-flex d-flex--center">
                    <ProjectTechs techs={project.tech}></ProjectTechs>
                  </div>
                  <div className="card-footer d-flex d-flex--center">
                    <p className="paragraph-highlight-text">
                      Last updated {project.date}
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
