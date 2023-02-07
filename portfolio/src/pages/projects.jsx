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
import { DiGithubFull } from "react-icons/di";
import { BsGithub, BsYoutube, BsNewspaper } from "react-icons/bs";
import { FaKaggle } from "react-icons/fa";
import { Link } from "react-router-dom";

FaKaggle;
const Projects = () => {
  return (
    <div className="container">
      <div
        className="row   text-center title-highlight-text pb-5"
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
        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                Mi Portfolio
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={portfolio} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>{" "}
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>{" "}
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>{" "}
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">Last updated today</p>
            </div>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                Algorithms and Data Structures
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={algorithms} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">
                Last updated months ago
              </p>{" "}
            </div>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                AI Dinosaur
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={dinosaur} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">
                Last updated months ago
              </p>{" "}
            </div>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">COVA</h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={cova} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">
                Last updated 1 year ago
              </p>{" "}
            </div>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                Co-authorship Link Network Prediction
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={coauthor} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">
                Last updated 2 years ago
              </p>{" "}
            </div>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                Misinformation Detection{" "}
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img
                src={misinformation}
                className="card-img"
                alt="Mi Portfolio"
              />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">
                Last updated 3 years ago
              </p>{" "}
            </div>
          </div>
        </div>

        
        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                Restaurant Lens
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={restlens} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">
                Last updated 4 years ago
              </p>{" "}
            </div>
          </div>
        </div>

        
        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                Sentiment Analysis in Twitter
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={twitter} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">
                Last updated 4 years ago
              </p>{" "}
            </div>
          </div>
        </div>


        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                SW Requirements Text Analysis
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={textanalysis} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">
                Last updated 5 years ago
              </p>{" "}
            </div>
          </div>
        </div>

      
        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                UGEL
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={ugel} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">
                Last updated 6 years ago
              </p>{" "}
            </div>
          </div>
        </div>


        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                Autodema
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={autodema} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">
                Last updated 7 years ago
              </p>{" "}
            </div>
          </div>
        </div>


        <div className="col-md-12 col-sm-12 col-12 col-lg-6 d-flex d-flex--center pt-3 pb-3">
          <div className="card-container row">
            <div className="card-header d-flex d-flex--center">
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">
                Max Lenz
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={maxlenz} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-12 col-sm-12 col-12 col-lg-7">
              <div className="card-body">
                <p className="paragraph-text format-text">
                  Mobile application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision Mobile
                  application in Android that uses Computer Vision
                </p>
              </div>
            </div>
            <div className="card-tech-footer d-flex d-flex--center">
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsGithub className="icon--xl"></BsGithub>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsYoutube className="icon--xl"></BsYoutube>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <BsNewspaper className="icon--xl"></BsNewspaper>
              </Link>
              <Link
                className="link"
                to={"//github.com/zalogarciam"}
                target="_blank"
              >
                <FaKaggle className="icon--xl"></FaKaggle>
              </Link>
            </div>
            <div className="card-footer d-flex d-flex--center">
              <p className="paragraph-highlight-text">
                Last updated 8 years ago
              </p>{" "}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
