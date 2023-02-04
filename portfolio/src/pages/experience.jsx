import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Experience = () => {
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
          <div className="col-sm-12 col-md-6 format-text pb-5"> 
            
          </div>
          <div className="col-sm-12 col-md-6 format-text pb-5">
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
              <button className="btn btn-secondary">
                <Link
                  className="link-download"
                  to="/files/myfile.pdf"
                  target="_blank"
                  download
                >
                  Download Resume
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
