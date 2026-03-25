import MailToButton from "../common/mailToButton";
import { BsPhone } from "react-icons/bs";

const ContactInformation = ({ email, email2, phone }) => {
  return (
    <div className="flex flex-col items-center md:items-start space-y-3">
      <div className="flex flex-col space-y-1">
        <MailToButton mailTo={email} />
        <MailToButton mailTo={email2} />
      </div>
      <a 
        href={"tel:" + phone}
        className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm font-mono"
      >
        <BsPhone className="text-accent" />
        {phone}
      </a>
    </div>
  );
};

export default ContactInformation;
