"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const HeroCarousel = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate-fade-in delay-700">
      <div className="relative group">
        {/* Glow effect background */}
        <div className="absolute -inset-8 bg-gradient-to-r from-accent/10 to-accent-secondary/10 rounded-[2.5rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000"></div>
        
        <div className="glass rounded-[2rem] overflow-hidden shadow-2xl border border-foreground/10">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            modules={[EffectCube, Autoplay, Pagination]}
            className="mySwiper h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-[16/9] md:aspect-[21/9] w-full group/slide overflow-hidden">
                  <img
                    src={src}
                    alt={`Project slide ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/slide:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay for glass look integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-start/40 via-transparent to-transparent"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
