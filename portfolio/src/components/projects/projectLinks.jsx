import { Fragment } from "react";
import Link from "next/link";
import { BsGithub, BsYoutube, BsNewspaper } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { FaKaggle } from "react-icons/fa";

const ProjectLinks = ({ links }) => {
  const getIcon = (type) => {
    switch (type) {
      case "github":
      case "github2":
        return <BsGithub />;
      case "youtube":
        return <BsYoutube />;
      case "paper":
      case "paper2":
        return <BsNewspaper />;
      case "kaggle":
        return <FaKaggle />;
      case "web":
      case "web2":
        return <TfiWorld />;
      default:
        return <TfiWorld />;
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((linkObj, index) => (
        <Fragment key={index}>
          {Object.entries(linkObj).map(([type, url]) => (
            <Link
              key={url}
              href={url}
              target="_blank"
              className="p-2.5 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10 hover:-translate-y-1"
              title={type}
            >
              <span className="text-xl">{getIcon(type)}</span>
            </Link>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default ProjectLinks;
