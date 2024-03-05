import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsNewspaper } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { FaKaggle } from "react-icons/fa";

const ProjectLinks = ({ links }) => {
  const renderLinks = (link) => {
    if (link[0] === "github") {
      return (
        <Link key={link[1]} className="link" to={link[1]} target="_blank">
          <BsGithub className="icon--xl"></BsGithub>
        </Link>
      );
    } else if (link[0] === "github2") {
      return (
        <Link key={link[1]} className="link" to={link[1]} target="_blank">
          <BsGithub className="icon--xl"></BsGithub>
        </Link>
      );
    } else if (link[0] === "youtube") {
      return (
        <Link key={link[1]} className="link" to={link[1]} target="_blank">
          <BsYoutube className="icon--xl"></BsYoutube>
        </Link>
      );
    } else if (link[0] === "paper") {
      return (
        <Link key={link[1]} className="link" to={link[1]} target="_blank">
          <BsNewspaper className="icon--xl"></BsNewspaper>
        </Link>
      );
    } else if (link[0] === "paper2") {
      return (
        <Link key={link[1]} className="link" to={link[1]} target="_blank">
          <BsNewspaper className="icon--xl"></BsNewspaper>
        </Link>
      );
    } else if (link[0] === "kaggle") {
      return (
        <Link key={link[1]} className="link" to={link[1]} target="_blank">
          <FaKaggle className="icon--xl"></FaKaggle>
        </Link>
      );
    } else if (link[0] === "web") {
      return (
        <Link key={link[1]} className="link" to={link[1]} target="_blank">
          <TfiWorld className="icon--xl"></TfiWorld>
        </Link>
      );
    } else if (link[0] === "web2") {
      return (
        <Link key={link[1]} className="link" to={link[1]} target="_blank">
          <TfiWorld className="icon--xl"></TfiWorld>
        </Link>
      );
    }
  };

  return (
    <div className="d-flex">
      {links.map((link, index) => {
        return (
          <div key={index} className="d-flex">
            {Object.entries(link).map((l, index) => {
              return <div key={index}>{renderLinks(l)} </div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectLinks;
