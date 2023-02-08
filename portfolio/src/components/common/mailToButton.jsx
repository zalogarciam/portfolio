import React from "react";
import { Link } from "react-router-dom";

const MailToButton = ({ mailTo }) => {
  return (
    <div>
      <Link
        className="link__xs"
        to="#"
        onClick={(e) => {
          window.location.href = "mailto:" + mailTo;
          e.preventDefault();
        }}
      >
        {mailTo}
      </Link>
    </div>
  );
};

export default MailToButton;
