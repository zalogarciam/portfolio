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
                My Portfolio
              </h5>
            </div>
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={portfolio} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  The project you are looking right now! I have built this web
                  to show a little bit about myself, my work experience and
                  personal projects. I designed it with a mobile first approach
                  with used React JS and Redux for the front end and Python for
                  the back end.
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
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={algorithms} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  Interested in algorithms and data structures? I have completed
                  almost all of the problems in Cracking The Code Interview Book
                  using Python. I am really into this challenging problems and I
                  am always up to improve my problem-solving skills.
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
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={dinosaur} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  Have you ever played the Dinosaur game on your browser when
                  you did not have internet connection? I did, and I really
                  liked it. This project involves the implementation of this
                  game from scratch using Unity and C#. I am also including AI,
                  specifically Reinforcement Learning algorithms to make the
                  dinosaur smart enough to play by itself.
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
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={cova} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  Web application project presented in a startup accelerator
                  program at the Universidad Catolica de Santa Maria. In an
                  nutshell, COVA is a tinder application for students who are
                  looking for thesis projects from academics or companies. It is
                  a WIN-WIN idea that can help students who are struggling to
                  start their research.
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
                Melbourne 2100
              </h5>
            </div>
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img
                src={melbourne2100}
                className="card-img"
                alt="Mi Portfolio"
              />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  VR project I built for my postgraduate thesis using C# and
                  Unity. The app replicates flooding in Melbourne, Australia and
                  contains agents simulations and interactive tasks that the
                  user has to follow. These helped us to investigate and
                  evaluate the UX and user behaviour against Climate Change. I
                  could publish two papers for OzCHI (2020) and CHI (2020).
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
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">AI Pacman</h5>
            </div>
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={pacman} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  AI project that uses Reinforcement Learning algorithms such as
                  A* algorithm, Monte Carlo Tree Search, Approximate Q Learning,
                  and Minimax in Python. Pacman competition where the agent
                  needs to eat the food of the enemy, but also protect the food
                  of its territory
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
                Co-authorship Link Network Prediction
              </h5>
            </div>
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={coauthor} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  AI project that uses Machine Learning algorithms such as
                  Logistic Regression, K-Neighbors, Decision Trees, Naive Bayes,
                  and SVM to predict future collaborations between authors. I
                  built a Python with feature engineering using math operations
                  in a graph where each node represented an author and each node
                  a relationships between the author and of coauthorship.
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
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img
                src={misinformation}
                className="card-img"
                alt="Mi Portfolio"
              />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  NLP project that uses language models and latest transformers
                  to diffentiate fake articles about Climate Change. I performed
                  scrapping to find truthful data and used it to train an AI
                  model. Furthermore, I cleaned this data and compared several
                  algorithms to make it more accurate and get the best score.
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
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={restlens} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  Mobile application in Android and Java that uses Computer
                  Vision to recognize restaurants around the city of Melbourne,
                  Australia. This applications uses an trained model built in
                  Python that uses photo as input and displays full information
                  of the restaurant that the user plans to visit.
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
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={twitter} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  Machine Learning project that uses algorithms such as Logistic
                  Regression, K-Neighbors, Decision Trees, Random Forest, Naive
                  Bayes and SVM to predict if a tweet is negative, neutral or
                  positive. I trained the model using Python and I extracted the
                  data from a public dataset found on internet.
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
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={textanalysis} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  Web Application developed for my undergraduate thesis. Built
                  in .NET and C#. It takes as a input software documentation.
                  Then, it uses Elastic Search as a search engine to process and
                  manage this data. Performs text analysis to detect conflicts
                  and dependencies between non-functional requirements and
                  finally, shows the results using Kibana. I published a paper
                  at CLEI in 2019.
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
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">UGEL</h5>
            </div>
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={ugel} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  Desktop application built in C# and SQL Server to register
                  data at UGEL. This app replaced a manual process of return of
                  interests by teachers to the Ministry of Education.
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
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">Autodema</h5>
            </div>
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={autodema} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  Developed a web and desktop application in C# and SQL Server
                  that improved the management of the water resource. It
                  generates reports that were helpful for decision making by the
                  Head Department.
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
              <h5 className="subtitle-highlight-text pb-3 pt-3 ">Max Lenz</h5>
            </div>
            <div className="col-md-5 col-sm-12 col-12 col-lg-5 card-img-container">
              <img src={maxlenz} className="card-img" alt="Mi Portfolio" />
            </div>
            <div className="col-md-7 col-sm-12 col-12 col-lg-7">
              <div className="card-body d-flex d-flex--center">
                <p className="paragraph-text format-text">
                  Developed a desktop application in C# and SQL Server for the
                  registration of all air conditioning machines of Coke Company.
                  This app reduced drastically the loss and theft of these
                  machines.{" "}
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
