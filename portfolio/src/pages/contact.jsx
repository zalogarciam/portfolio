import Typewriter from "typewriter-effect";
import { AiFillMessage } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { useState } from "react";
import GoogleMapReact from "google-map-react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("Send");

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Message Sent");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
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
              <button className="btn btn-primary" type="submit">
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
            {" "}
            <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
