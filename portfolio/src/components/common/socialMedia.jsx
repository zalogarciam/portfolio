import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaSteam, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = ({}) => {
  return (
    <div>
      <div className="row pt-3">
        <div className="col-3 d-flex d-flex--center">
          <Link to={"//github.com/zalogarciam"} target="_blank">
            <BsGithub className="icon icon--social-media" />
          </Link>
        </div>

        <div className="col-3 d-flex d-flex--center">
          <Link to={"//linkedin.com/in/zalogarciam"} target="_blank">
            <BsLinkedin className="icon icon--social-media" />
          </Link>
        </div>
        <div className="col-3 d-flex d-flex--center">
          <Link to={"//instagram.com/zalogarciam"} target="_blank">
            <BsInstagram className="icon icon--social-media" />
          </Link>
        </div>
        <div className="col-3 d-flex d-flex--center">
          <Link to={"//youtube.com/zalogarciam"} target="_blank">
            <BsYoutube className="icon icon--social-media" />
          </Link>
        </div>
      </div>
      <div className="row pt-3 pb-3 d-flex d--flex-center">
        <div className="col-3 d-flex d-flex--center">
          <Link to={"//twitter.com/zalogarciam"} target="_blank">
            <BsTwitter className="icon icon--social-media" />
          </Link>
        </div>
        <div className="col-3 d-flex d-flex--center">
          <Link to={"//facebook.com/zalogarciam"} target="_blank">
            <BsFacebook className="icon icon--social-media" />
          </Link>
        </div>
        <div className="col-3 d-flex d-flex--center">
          <Link to={"//tiktok.com/@zalogarciam"} target="_blank">
            <FaTiktok className="icon icon--social-media" />
          </Link>
        </div>
        <div className="col-3 d-flex d-flex--center">
          <Link to={"//steamcommunity.com/id/zalogarciam/"} target="_blank">
            <FaSteam className="icon icon--social-media" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
