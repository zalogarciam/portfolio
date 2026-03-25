"use client";

import { useEffect, useRef, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { BiWorld, BiMailSend } from "react-icons/bi";
import GoogleMapReact from "google-map-react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LoadingContainer from "@/components/loader/loading";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("Send Message");
  const [isClient, setIsClient] = useState(false);
  const MySwal = withReactContent(Swal);
  const captchaRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const token = captchaRef.current.getValue();
    if (!token) {
      MySwal.fire({
        background: '#0f172a',
        color: '#f8fafc',
        html: <p className="text-slate-300">You must confirm you are not a robot</p>,
        icon: "error",
        confirmButtonColor: '#6366f1',
      });
      return;
    }

    setFormStatus("Sending...");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === "your_service_id") {
      setFormStatus("Send Message");
      MySwal.fire({
        background: '#0f172a',
        color: '#f8fafc',
        html: (
          <div className="text-slate-300 text-sm space-y-2">
            <p className="font-bold text-base text-white">Email Service Not Configured</p>
            <p>Please log in to Vercel and add these Environment Variables:</p>
            <ul className="list-disc list-inside text-left opacity-80">
              <li>NEXT_PUBLIC_EMAILJS_SERVICE_ID</li>
              <li>NEXT_PUBLIC_EMAILJS_TEMPLATE_ID</li>
              <li>NEXT_PUBLIC_EMAILJS_PUBLIC_KEY</li>
            </ul>
          </div>
        ),
        icon: "warning",
        confirmButtonColor: '#6366f1',
      });
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, e.target, publicKey);
      
      setFormStatus("Message Sent!");
      MySwal.fire({
        background: '#0f172a',
        color: '#f8fafc',
        html: <p className="text-slate-300">Your message has been sent! You will hear from me shortly.</p>,
        icon: "success",
        confirmButtonColor: '#6366f1',
      });
      e.target.reset();
      captchaRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus("Send Message");
      MySwal.fire({
        background: '#0f172a',
        color: '#f8fafc',
        html: <p className="text-slate-300">Something went wrong. Please try again later.</p>,
        icon: "error",
        confirmButtonColor: '#6366f1',
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

  if (!isClient) return null;

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="section-container">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-gradient">Get In Touch</span>
          </h1>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Have an idea or project in mind? Interested in working together? 
            I'm always open to discussing new opportunities and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-fade-in">
          {/* Contact Form Card */}
          <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <AiFillMessage className="text-8xl" />
            </div>
            
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground">
              <span className="p-2 bg-accent/10 rounded-lg text-accent">
                <BiMailSend className="text-2xl" />
              </span>
              Drop me a message
            </h2>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted ml-1" htmlFor="name">
                  Full Name
                </label>
                <input 
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-accent/50 transition-all" 
                  type="text" 
                  id="name" 
                  name="from_name"
                  placeholder="Your Name"
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted ml-1" htmlFor="email">
                  Email Address
                </label>
                <input 
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-accent/50 transition-all" 
                  type="email" 
                  id="email" 
                  name="reply_to"
                  placeholder="Your Email Address"
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted ml-1" htmlFor="message">
                  Your Message
                </label>
                <textarea 
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-accent/50 transition-all min-h-[150px] resize-none" 
                  id="message" 
                  name="message"
                  placeholder="Hello, I'd like to talk about..."
                  required 
                />
              </div>

              <div className="flex flex-col items-center gap-6 pt-4">
                <div className="transform scale-90 sm:scale-100 origin-center">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY_PROD}
                    ref={captchaRef}
                    theme="dark"
                  />
                </div>
                <button className="btn-primary w-full py-4 font-bold text-lg" type="submit">
                  {formStatus}
                </button>
              </div>
            </form>
          </div>

          {/* Map and Info Column */}
          <div className="space-y-8 h-full">
            <div className="glass p-8 rounded-3xl h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground">
              <span className="p-2 bg-accent/10 rounded-lg text-accent">
                <BiWorld className="text-2xl" />
              </span>
              Where am I?
            </h2>
              
              <div className="flex-1 min-h-[400px] rounded-2xl overflow-hidden border border-foreground/10 grayscale hover:grayscale-0 transition-all duration-700">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
                  }}
                  defaultCenter={mapConfig.center}
                  defaultZoom={mapConfig.zoom}
                  options={{
                    styles: [
                      {
                        "elementType": "geometry",
                        "stylers": [{ "color": "#1f2937" }]
                      },
                      {
                        "elementType": "labels.text.fill",
                        "stylers": [{ "color": "#9ca3af" }]
                      },
                      {
                        "elementType": "labels.text.stroke",
                        "stylers": [{ "color": "#111827" }]
                      }
                    ]
                  }}
                />
              </div>
              
              <div className="mt-8 p-4 bg-accent/5 rounded-2xl border border-accent/10 text-center">
                <p className="text-muted text-sm">
                  Based in <span className="text-accent font-semibold">Arequipa, Peru</span>. 
                  Available for remote work worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
