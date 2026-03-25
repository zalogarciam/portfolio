"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BsDownload, BsCpu, BsFront, BsWindow } from "react-icons/bs";
import CountUp from "react-countup";
import useExperience from "@/hooks/useExperience";
import { fetchExperienceData } from "@/redux/thunks/experienceThunk";
import LoadingContainer from "@/components/loader/loading";

const Experience = () => {
  const dispatch = useDispatch();
  const { loading, experienceData } = useExperience();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!experienceData || Object.keys(experienceData).length === 0) {
      dispatch(fetchExperienceData());
    }
  }, [dispatch, experienceData]);

  const onButtonClick = () => {
    const fileURL = "/assets/pdf/resume.pdf";
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "GONZALO_RESUME.pdf";
    alink.click();
  };

  const backEndTech = [
    { name: "C#", icon: "csharp.svg" },
    { name: "Python", icon: "python.svg" },
    { name: ".NET", icon: "net.svg" },
    { name: "Django", icon: "django.svg" },
    { name: "SQL Server", icon: "sqlserver.svg" },
    { name: "Unity", icon: "unity.svg" },
  ];

  const frontEndTech = [
    { name: "React", icon: "react.svg" },
    { name: "CSS3", icon: "css.svg" },
    { name: "HTML5", icon: "html.svg" },
    { name: "Redux", icon: "redux.svg" },
    { name: "JavaScript", icon: "js.svg" },
    { name: "Telerik", icon: "telerik.svg" },
  ];

  if (!isClient) return null;

  return (
    <div className="min-h-screen pt-32 pb-20">
      {loading && <LoadingContainer />}

      <div className="section-container">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-gradient">Professional Experience</span>
          </h1>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 animate-fade-in">
          {/* Back End Card */}
          <div className="glass p-8 rounded-3xl group transition-all duration-300 hover:bg-white/10">
            <div className="flex items-center gap-3 text-accent mb-8">
              <BsCpu className="text-3xl" />
              <h2 className="text-xl font-bold uppercase tracking-wider">Back End Systems</h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
              {backEndTech.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group/icon">
                  <div className="w-12 h-12 p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover/icon:border-accent/50 transition-all duration-300">
                    <img
                      src={`https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/${tech.icon}`}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover/icon:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Front End Card */}
          <div className="glass p-8 rounded-3xl group transition-all duration-300 hover:bg-white/10">
            <div className="flex items-center gap-3 text-accent-secondary mb-8">
              <BsFront className="text-3xl" />
              <h2 className="text-xl font-bold uppercase tracking-wider">Front End & UI</h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
              {frontEndTech.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group/icon">
                  <div className="w-12 h-12 p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover/icon:border-accent-secondary/50 transition-all duration-300">
                    <img
                      src={`https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/tech/${tech.icon}`}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover/icon:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in delay-200">
          <div className="glass p-10 rounded-3xl text-center space-y-6">
            <div className="space-y-4 text-foreground leading-relaxed text-lg">
              <p>{experienceData[0]}</p>
              <p>{experienceData[1]}</p>
              <p>{experienceData[2]}</p>
            </div>
            <div className="pt-8">
              <button 
                className="btn-primary inline-flex items-center gap-3 px-8 group" 
                onClick={onButtonClick}
              >
                Download Master Resume
                <BsDownload className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in delay-500">
          {[
            { label: "Years of Experience", value: 10, suffix: "+" },
            { label: "Projects Delivered", value: 40, suffix: "+" },
            { label: "Published Papers", value: 3, suffix: "" },
          ].map((stat, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
              <div className="text-gradient text-5xl font-black mb-2">
                <CountUp end={stat.value} duration={4} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-muted font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
