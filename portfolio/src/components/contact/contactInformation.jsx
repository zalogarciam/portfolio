import MailToButton from "../common/mailToButton";

const ContactInformation = ({ email, email2, phone }) => {
  return (
    <div className="text-center">
      <MailToButton mailTo={email}></MailToButton>
      <MailToButton mailTo={email2}></MailToButton>
      <a className=" link text-center" href={"tel:" + phone}>
        Phone: {phone}
      </a>
    </div>
  );
};

export default ContactInformation;
