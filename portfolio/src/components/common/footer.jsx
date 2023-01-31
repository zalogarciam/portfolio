import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="nav__logo" />
          </Link>
        </div>
        <div className="col-4">Useful Links</div>
        <div className="col-4">Contact</div>
      </div>
    </footer>
  );
};

export default Footer;
