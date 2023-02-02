import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import ContactInformation from "../contact/contactInformation";
import List from "./list";
import SocialMedia from "./socialMedia";

const Footer = ({ elements, paths }) => {
  const footer = useRef();
  const copyright = useRef();
  const documentScroll = () => {
    var scrollMaxY =
      window.scrollMaxY ||
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    footer.current?.classList.toggle(
      "footer--scroll",
      window.scrollY >= scrollMaxY - 256
    );
    copyright.current?.classList.toggle(
      "footer--copyright-scroll",
      window.scrollY >= scrollMaxY - 256
    );
  };

  document.addEventListener("scroll", documentScroll);

  return (
    <footer className="footer" ref={footer}>
      <div className="container pb-3">
        <div className="row">
          <div className="col-4">
            <div className="row d-flex d-flex--center">
              <p className="paragraph-text">
                Web designed and developed by: Gonzalo Garcia Martinez
              </p>
            </div>
            <div className="row">
              <Link className="d-flex d-flex--center" to="/portfolio/">
                <img src={logo} alt="Logo" className="footer__logo" />
              </Link>
            </div>
          </div>
          <div className="col-4 d-flex d--flex-center d-flex--direction-column text-center">
            <h5 className="text-center subtitle-highlight-text">
              Useful Links
            </h5>
            <List elements={elements} paths={paths}></List>
          </div>
          <div className="col-4">
            <h5 className="text-center subtitle-highlight-text">
              Social Media
            </h5>
            <SocialMedia />
            <ContactInformation
              email={"gegarciam95@gmail.com"}
              email2={"zalogarciam@gmail.com"}
              phone={"+51 957247055"}
            />
          </div>
        </div>
      </div>

      <div ref={copyright} className="pt-4">
        <p className="text-center paragraph-highlight-text">
          I can fix the World 🌎, but they won't give me the source code 💻
        </p>
        <p className="text-center paragraph-highlight-text">
          © 2023 Gonzalo Garcia Martinez. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
