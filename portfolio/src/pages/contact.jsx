import Typewriter from "typewriter-effect";
import { AiFillMessage } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import ReCAPTCHA from "react-google-recaptcha";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import LoadingContainer from "../components/loader/loading";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const MySwal = withReactContent(Swal);
  const captchaRef = useRef(null);

  useEffect(() => {
    document.title = "Contact - Gonzalo Garcia Martinez";
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    let token = captchaRef.current.getValue();
    console.log(token);
    if (token) {
      // let valid_token = awaitverifyToken(token);

      const { name, email, message } = e.target.elements;
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      };

      setFormStatus("Message submitted");
      MySwal.fire({
        html: (
          <p className="paragraph-highlight-text">
            Your message has been sent! You will hear from me shortly.
          </p>
        ),
        icon: "success",
        confirmButtonText: "Ok",
      });
    } else {
      MySwal.fire({
        html: (
          <p className="paragraph-highlight-text">
            You must confirm you are not a robot
          </p>
        ),
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const mapConfig = {
    center: {
      lat: -16.408672332278844,
      lng: -71.53720913891807,
    },
    zoom: 12,
  };

  return (
    <div>
      <div className="container text-center title-highlight-text pb-5">
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
      <div className="container">
        <p className="subtitle-text">
          You have an idea or project in mind? Interested in working together?
          Let's have a talk.
        </p>
      </div>
      <div className="container">
        <p className="regular-highlight-text pb-4 text-center">
          Drop me a message <AiFillMessage></AiFillMessage>{" "}
        </p>

        <div className="row">
          <form
            onSubmit={onSubmit}
            className="offset-md-3 col-md-6 offset-1 col-10"
          >
            <div className="pb-4 text-start">
              <label className="label-highlight-text form-label" htmlFor="name">
                Name:
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>

            <div className="pb-4 text-start">
              <label
                className="label-highlight-text  form-label"
                htmlFor="email"
              >
                Email
              </label>

              <input
                className="form-control"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="pb-4 text-start">
              <label
                className="label-highlight-text  form-label"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={5}
                required
              />
            </div>
            <div className="d-flex d-flex--center d-flex--direction-column">
              <div className="pb-3">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY_PROD}
                  ref={captchaRef}
                />
              </div>
              <div>
                <button className="btn btn-secondary" type="submit">
                  {formStatus}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-12 col-12 pt-5">
        <p className="regular-highlight-text pb-4 text-center">
          Where am I in this world <BiWorld></BiWorld>
          {"?"}
        </p>
        <div>
          <div className="google-map">
            {
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: import.meta.env.VITE_GOOGLE_API_KEY,
                }}
                defaultCenter={mapConfig.center}
                defaultZoom={mapConfig.zoom}
              ></GoogleMapReact>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
