import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import Slider1l from "../assets/carousal/slider1l.jpg";
import Slider2l from "../assets/carousal/slider2l.jpg";
import Slider3l from "../assets/carousal/slider3l.jpg";
import Slider4l from "../assets/carousal/slider4l.jpg";

import Slider1m from "../assets/carousal/slider1m.jpg";
import Slider2m from "../assets/carousal/slider2m.jpg";
import Slider3m from "../assets/carousal/slider3m.jpg";
import Slider4m from "../assets/carousal/slider4m.jpg";

const Slider = [
  {
    id: "1",
    src: Slider1l,
    src2: Slider1m,
    title: "Stream Now",
  },
  {
    id: "2",
    src: Slider2l,
    src2: Slider2m,
    title: "Stream Now",
  },
  {
    id: "3",
    src: Slider3l,
    src2: Slider3m,
    title: "Stream Now",
  },
  {
    id: "4",
    src: Slider4l,
    src2: Slider4m,
    title: "Stream Now",
  },
];

const AutoCarousel = () => {

    const splideRef = useRef(null);

  useEffect(() => {
    // Initialize Splide after the component mounts
    const splide = new Splide(splideRef.current, {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      autoScroll: {
        speed: 1,
      },
    });

    splide.mount([AutoScroll]); // Mounting with the AutoScroll extension
    return () => {
        // Cleanup the Splide instance when the component unmounts
        splide.destroy();
      };
    }, []);

  return (
    <div className="w-full">
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop", // For continuous looping
          perPage: 1.5, // Show 3 slides at a time
          focus: "center", // Focus on the center slide
          arrows: false, // Show navigation arrows
          autoplay: true, // Auto plays the slider
          //  interval: 3000, // Slide transition interval (3 seconds)
          pagination: false, // Hide pagination
          // gap: "1rem", // Space between slides
          rewind: true,
          drag: "free",
          autoScroll: {
            speed: 1, // Speed at which auto-scroll happens (adjust to control scroll speed)
            pause: 0, // No pause between scrolls (continuous scroll)
          },
          breakpoints: {
            640: {
              perPage: 2,
            },
          },
        }}
      >
        {Slider.map((item, index) => (
          <SplideSlide key={index} className="flex justify-center px-1">
            {/* <div className="bg-[#FFFFFF] pb-2 rounded-[20px] lg:h-[420px] lg:w-[664px] md:h-[346px] md:w-[442px] max-[450px]:h-[190px] max-[450px]:w-[280px]"> */}
            <div className="relative bg-[#FFFFFF] pb-2 lg:h-[523px] lg:w-[980px] md:h-[367px] md:w-[690px] h-[495px] w-[280px]">
              <img
                className="hidden md:block lg:block w-full h-full object-cover"
                src={item.src}
                alt={item.title}
              />
              <img
                className="md:hidden w-full  object-cover object-left-bottom"
                src={item.src2}
                alt={item.title}
              />

              <div className="absolute p-5 bottom-0 left-0 text-white pt-3">
                <p className="font-Noto_Sans hover:[opacity:80%] font-semibold text-black-700 md:text-2xl text-center max-[450px]:text-sm">
                  {item.title}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default AutoCarousel;