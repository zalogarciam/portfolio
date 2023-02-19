import Typewriter from "typewriter-effect";
import resume from "../assets/pdf/resume.pdf";
import { BsDownload } from "react-icons/bs";
import useExperience from "../hooks/useExperience";
import { fetchExperienceData } from "../redux/thunks/experienceThunk";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import LoadingContainer from "../components/loader/loading";

const Experience = () => {
  const dispatch = useDispatch();
  const { loading, experienceData } = useExperience();

  useEffect(() => {
    document.title = "Experience - Gonzalo Garcia Martinez";
    Object.keys(experienceData).length === 0 && dispatch(fetchExperienceData());
  }, []);

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
      {loading && <LoadingContainer />}
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
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/csharp.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/python.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/net.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/django.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/sqlserver.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/unity.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
            </div>
            <div>
              <p className="subtitle-highlight-text">Front End</p>
            </div>
            <div className="row pt-3 pb-3">
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/react.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/css.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/html.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/redux.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/js.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
              <div className="col-md-2 col-4 d-flex d-flex--center pt-2 pb-2">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/telerik.svg"
                  width="64"
                  className="tech-img"
                />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 format-text pb-5">
            <p className="paragraph-text">{experienceData[0]}</p>
            <p className="paragraph-text">{experienceData[1]}</p>
            <p className="paragraph-text">{experienceData[2]}</p>
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
