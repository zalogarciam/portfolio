import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <div className="container">
      <div
        className="container text-center title-highlight-text pb-5"
        style={{ height: "12rem" }}
      >
        <Typewriter
          options={{
            delay: 50,
            autoStart: true,
          }}
          onInit={(typeWriter) => {
            typeWriter.typeString("Contact").start();
          }}
        />
      </div>
      <div className="row">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
