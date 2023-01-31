import { useRef } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsTwitter,
} from "react-icons/bs";
import { FaSteam } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import List from "./list";

const Footer = ({ elements, paths }) => {
  const footer = useRef();
  const documentScroll = () => {
    var scrollMaxY =
      window.scrollMaxY ||
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    console.log(scrollMaxY, window.scrollY);
    footer.current?.classList.toggle(
      "footer--scroll",
      window.scrollY >= scrollMaxY - 80
    );
  };

  document.addEventListener("scroll", documentScroll);

  return (
    <div>
      <footer className="footer" ref={footer}>
        <div className="row ">
          <div className="col-4 d-flex d-flex--center">
            <Link to="/portfolio/">
              <img src={logo} alt="Logo" className="footer__logo" />
            </Link>
          </div>
          <div className="col-4 d-flex d--flex-center d-flex--direction-column ">
            <h5 className="title">Useful Links</h5>
            <List elements={elements} paths={paths}></List>
          </div>
          <div className="col-4">
            <h5>Social Media</h5>
            <BsGithub />
            <BsLinkedin />
            <BsInstagram />
            <BsTwitter />
            <BsFacebook />
            <FaSteam />
          </div>
        </div>
      </footer>
      <div className="row pt-3"></div>
      <p className="text-center text-highlight">
        I can fix the World 🌎, but they won't give me the source code 💻
      </p>
      <p className="text-center text-highlight">
        © 2023 Gonzalo Garcia Martinez. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
