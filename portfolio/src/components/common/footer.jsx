import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import List from "./list";

const Footer = ({ elements, paths }) => {
  return (
    <footer className="footer d-flex d-flex--center">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
