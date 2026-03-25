"use client";

import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { fetchHomeData } from "@/redux/thunks/homeThunk";
import { useDispatch } from "react-redux";
import useHome from "@/hooks/useHome";
import { BsArrowRight, BsCalendar3 } from "react-icons/bs";
import HeroCarousel from "@/components/home/heroCarousel";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, homeData } = useHome();

  useEffect(() => {
    if (!homeData || Object.keys(homeData).length === 0) {
      dispatch(fetchHomeData());
    }
  }, [dispatch, homeData]);

  // Handle data structure (homeData might be an array or object depending on API)
  const data = Array.isArray(homeData) ? homeData[0] : homeData;

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="section-container pt-32 pb-16 flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-accent uppercase bg-accent/10 rounded-full border border-accent/20 animate-fade-in">
          Software Engineer
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight animate-slide-up text-foreground">
          Hi! My name is <br />
          <span className="text-gradient">Gonzalo Garcia Martinez</span>
        </h1>

        <div className="max-w-3xl mx-auto text-xl md:text-2xl text-foreground leading-relaxed min-h-[120px] animate-fade-in delay-200">
          <Typewriter
            options={{
              delay: 30,
              autoStart: true,
              cursor: "_",
            }}
            onInit={(typeWriter) => {
              typeWriter
                .pauseFor(500)
                .typeString("I am a <span style='color: rgb(var(--foreground)); font-weight: 600;'>Full Stack Software Engineer</span> with 9+ years of experience.")
                .pauseFor(1000)
                .typeString("<br/>Feel free to take a look at my latest projects.")
                .pauseFor(1000)
                .typeString("<br/><span style='color: rgb(var(--accent));'>Remotely available (GMT-5).</span>")
                .start();
            }}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in delay-500">
          <Link href="/projects" className="btn-primary flex items-center gap-2 group">
            View My Work
            <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-foreground/5 hover:bg-foreground/10 text-foreground rounded-xl transition-all border border-foreground/10">
            Let's Talk
          </Link>
        </div>
      </section>

      {/* Hero Image Carousel */}
      <HeroCarousel images={data?.images} />

      {/* Activities Section */}
      <section className="section-container mt-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-accent">Recent Activities</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-foreground/20 to-transparent"></div>
        </div>

        <div className="grid gap-6">
          {data?.activities?.map((activity, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-3xl hover:bg-foreground/10 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full">
                    <BsCalendar3 />
                    {activity.date}
                  </div>
                  <p className="text-xl text-foreground leading-relaxed font-medium">
                    {activity.introduction}{" "}
                    <Link 
                      className="text-foreground hover:text-accent transition-colors border-b-2 border-accent/30 hover:border-accent group/link" 
                      href={activity.link} 
                      target="_blank"
                    >
                      {activity.institution}
                    </Link>
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-muted group-hover:text-accent transition-colors">
                    <BsCalendar3 className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
