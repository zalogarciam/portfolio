import Typewriter from "typewriter-effect";

const AboutMe = () => {
  return (
    <div>
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
      <div class="hero__img">
        <img
          src="./assets/img/zalo.webp"
          width="256"
          alt="Gonzalo Garcia"
          class="hero__primary-img"
        />
        <figure class="hero__decorators">
          <img
            src="./assets/svg/html.svg"
            alt="html"
            width="64"
            height="64"
            class="hero__decorator"
          />
          <img
            src="./assets/svg/css.svg"
            alt="css"
            width="64"
            height="64"
            class="hero__decorator"
          />
          <img
            src="./assets/svg/js.svg"
            alt="js"
            width="64"
            height="64"
            class="hero__decorator"
          />
          <img
            src="./assets/svg/react.svg"
            alt="react"
            width="64"
            height="64"
            class="hero__decorator"
          />
          <img
            src="./assets/svg/csharp.svg"
            alt="csharp"
            width="64"
            height="64"
            class="section__hero-decorator"
          />
          <img
            src="./assets/svg/python.svg"
            alt="python"
            width="64"
            height="64"
            class="section__hero-decorator"
          />
        </figure>
      </div>
    </div>
  );
};

export default AboutMe;
