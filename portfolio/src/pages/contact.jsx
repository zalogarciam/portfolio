import Typewriter from "typewriter-effect";
import { AiFillMessage } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { useState } from "react";
import GoogleMapReact from "google-map-react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const MySwal = withReactContent(Swal);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Message Sent");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    MySwal.fire({
      html: (
        <p className="paragraph-text">
          Your message has been sent! You will hear from me shortly.
        </p>
      ),
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  const mapConfig = {
    center: {
      lat: -16.408672332278844,
      lng: -71.53720913891807,
    },
    zoom: 12,
  };

  return (
    <div className="container">
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
      <div>
        <p className="subtitle-text">You have an idea or project in mind? Interested in working together? Let's have a talk.</p>
      </div>
      <div className="row">
        <div className="col-md-6 col-12 d-flex d-flex--direction-column pt-5">
          <p className="regular-highlight-text pb-4 text-center">
            Drop me a message <AiFillMessage></AiFillMessage>{" "}
          </p>

          <form onSubmit={onSubmit}>
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
            <div className="d-flex d-flex--center">
              <button className="btn btn-secondary" type="submit">
                {formStatus}
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-6 col-12 d-flex d-flex--center d-flex--direction-column pt-5">
          <p className="regular-highlight-text pb-4 text-center">
            Where am I in this world <BiWorld></BiWorld>
            {"?"}
          </p>
          <div>
            <div className="google-map">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: import.meta.env.VITE_GOOGLE_API_KEY,
                }}
                defaultCenter={mapConfig.center}
                defaultZoom={mapConfig.zoom}
              ></GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
