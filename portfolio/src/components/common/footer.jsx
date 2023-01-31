import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import ContactInformation from "../contact/contactInformation";
import List from "./list";
import SocialMedia from "./socialMedia";

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
      window.scrollY >= scrollMaxY - 256
    );
  };

  document.addEventListener("scroll", documentScroll);

  return (
    <div className="footer" ref={footer}>
      <footer className="container ">
        <div className="row ">
          <div className="col-4 d-flex d-flex--center">
            <div className="row">
              <p>Web designed and developed by: Gonzalo Garcia Martinez</p>
            </div>
            <div className="row">
              <Link to="/portfolio/">
                <img src={logo} alt="Logo" className="footer__logo" />
              </Link>
            </div>
          </div>
          <div className="col-4 d-flex d--flex-center d-flex--direction-column text-center">
            <h5 className="text-center">Useful Links</h5>
            <List elements={elements} paths={paths}></List>
          </div>
          <div className="col-4">
            <h5 className="text-center">Social Media</h5>
            <SocialMedia />
            <ContactInformation
              email={"gegarciam95@gmail.com"}
              email2={"zalogarciam@gmail.com"}
              phone={"+51 957247055"}
            />
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
