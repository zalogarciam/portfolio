"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";
import { fetchAboutMeData } from "@/redux/thunks/aboutMeThunk";
import useAboutMe from "@/hooks/useAboutMe";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BsArrowRight, BsAward, BsBook, BsCodeSquare } from "react-icons/bs";

const AboutMe = () => {
  const dispatch = useDispatch();
  const { loading, aboutMeData } = useAboutMe();

  useEffect(() => {
    if (!aboutMeData || Object.keys(aboutMeData).length === 0) {
      dispatch(fetchAboutMeData());
    }
  }, [dispatch, aboutMeData]);

  const techStack = [
    { name: "React", icon: "react.svg" },
    { name: "JavaScript", icon: "js.svg" },
    { name: "Python", icon: "python.svg" },
    { name: "C#", icon: "csharp.svg" },
    { name: ".NET", icon: "net.svg" },
    { name: "Django", icon: "django.svg" },
    { name: "Redux", icon: "redux.svg" },
    { name: "SQL Server", icon: "sqlserver.svg" },
    { name: "Unity", icon: "unity.svg" },
    { name: "HTML5", icon: "html.svg" },
    { name: "CSS3", icon: "css.svg" },
    { name: "Telerik", icon: "telerik.svg" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="section-container">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-gradient">About Me</span>
          </h1>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Bio */}
          <div className="space-y-8 animate-fade-in">
            <div className="glass p-10 rounded-3xl space-y-8 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 text-accent">
                <BsBook className="text-3xl" />
                <h2 className="text-2xl font-bold uppercase tracking-wider">Bio & Background</h2>
              </div>
              
              <div className="text-foreground leading-relaxed text-lg space-y-4">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left text-justify">
                  {aboutMeData[0]} {aboutMeData[4]}
                </p>
                <p className="text-justify">
                  {aboutMeData[2]} {aboutMeData[3]} Check my {" "}
                  <Link className="text-accent hover:opacity-80 font-bold underline underline-offset-4 inline-block" href="/projects">
                    portfolio
                  </Link>
                  .
                </p>
              </div>
            </div>

            <Link 
              href="/experience" 
              className="inline-flex items-center gap-2 text-foreground font-bold hover:text-accent transition-colors group px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10"
            >
              See my work experience
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Solar System Tech Stack */}
          <div className="relative h-[600px] flex items-center justify-center animate-fade-in delay-200 lg:overflow-visible">
            {/* The Sun: Central Profile Image */}
            <div className="relative z-20 group">
              <div className="absolute -inset-6 bg-gradient-to-r from-accent to-accent-secondary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse-glow"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                <img
                  src="https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/zalo.webp"
                  alt="Gonzalo Garcia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Orbit 1: Inner Tech Stack */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] rounded-full border border-white/5 border-dashed animate-[spin_25s_linear_infinite]"></div>
              {techStack.slice(0, 6).map((tech, i) => (
                <div
                  key={tech.name}
                  className="absolute pointer-events-auto group"
                  style={{
                    "--orbit-radius": "160px",
                    animation: `orbit ${20 + i * 2}s linear infinite`,
                  }}
                >
                  <div className="w-14 h-14 p-3 bg-dark border border-white/10 rounded-2xl shadow-lg hover:border-accent/50 hover:scale-125 transition-all duration-300 cursor-help">
                    <img
                      src={`https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/${tech.icon}`}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-[10px] text-white font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Orbit 2: Outer Tech Stack */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[520px] h-[520px] rounded-full border border-white/5 border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
              {techStack.slice(6).map((tech, i) => (
                <div
                  key={tech.name}
                  className="absolute pointer-events-auto group"
                  style={{
                    "--orbit-radius": "260px",
                    animation: `orbit ${30 + i * 4}s linear infinite reverse`,
                  }}
                >
                  <div className="w-14 h-14 p-3 bg-dark border border-white/10 rounded-2xl shadow-xl hover:border-accent-secondary/50 hover:scale-125 transition-all duration-300 cursor-help">
                    <img
                      src={`https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/${tech.icon}`}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent-secondary text-[10px] text-white font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
