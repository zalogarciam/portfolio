import Typewriter from "typewriter-effect";

const Experience = () => {
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
          typeWriter.typeString("Experience").start();
        }}
      />
    </div>
  );
};

export default Experience;
