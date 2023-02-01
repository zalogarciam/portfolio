import Typewriter from "typewriter-effect";

const AboutMe = () => {
  return (
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
          typeWriter.typeString("About Me").start();
        }}
      />
    </div>
  );
};

export default AboutMe;
