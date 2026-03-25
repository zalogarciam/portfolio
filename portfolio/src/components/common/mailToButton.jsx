import React from "react";
import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";

const MailToButton = ({ mailTo }) => {
  return (
    <div className="group">
      <Link
        className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm font-mono"
        href="#"
        onClick={(e) => {
          window.location.href = "mailto:" + mailTo;
          e.preventDefault();
        }}
      >
        <BsEnvelope className="text-accent group-hover:scale-110 transition-transform" />
        {mailTo}
      </Link>
    </div>
  );
};

export default MailToButton;
