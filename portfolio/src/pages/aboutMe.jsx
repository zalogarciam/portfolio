import Typewriter from "typewriter-effect";

const AboutMe = () => {
  return (
    <div className="container">
      <div
        className="text-center title-highlight-text pb-5"
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
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <p className="paragraph-text">hola como estas</p>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="d-flex d-flex--center">
            <div className="rotation-container">
              <img
                src="../src/assets/img/zalo.webp"
                width="256"
                alt="Gonzalo Garcia"
                className="rotate-img"
              />
              <figure className="rotation-decorators">
                <img
                  src="../src/assets/img/svg/html.svg"
                  alt="html"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src="../src/assets/img/svg/css.svg"
                  alt="css"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src="../src/assets/img/svg/js.svg"
                  alt="js"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src="../src/assets/img/svg/react.svg"
                  alt="react"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src="../src/assets/img/svg/csharp.svg"
                  alt="csharp"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
                <img
                  src="../src/assets/img/svg/python.svg"
                  alt="python"
                  width="64"
                  height="64"
                  className="rotation-decorator"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
