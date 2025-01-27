import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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

const Carousel = () => {
  return (
    <div className="w-full">
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",  // For continuous looping
          perPage: 1.5,    // Show 3 slides at a time
          
          focus: "center", // Focus on the center slide
          arrows: false,  // Show navigation arrows
          autoplay: true, // Auto plays the slider
          interval: 3000, // Interval between slides
          pagination: false, // Hide pagination
          // gap: "1rem", // Space between slides
          rewind: true,  // Enable rewind on last slide
          breakpoints:{
            640:{
              perPage: 2,
            },
            
          }
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

export default Carousel;




























































// import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";

// import Slider1l from "../assets/carousal/slider1l.jpg";
// import Slider2l from "../assets/carousal/slider2l.jpg";
// import Slider3l from "../assets/carousal/slider3l.jpg";
// import Slider4l from "../assets/carousal/slider4l.jpg";

// import Slider1m from "../assets/carousal/slider1m.jpg";
// import Slider2m from "../assets/carousal/slider2m.jpg";
// import Slider3m from "../assets/carousal/slider3m.jpg";
// import Slider4m from "../assets/carousal/slider4m.jpg";

// const Slider = [
//   {
//     id: "1",
//     src: Slider1l,
//     src2: Slider1m,
//     title: "iPhone 16",
//     des: "Hello,Apple Inteligence.",
//     class: "text-[#f5f5f7]  ",
//   },
//   {
//     id: "2",
//     src: Slider2l,
//     src2: Slider2m,
//     title: "Watch",
//     des: "Thinstant classic",
//     class: "text-black  ",
//   },
//   {
//     id: "3",
//     src: Slider3l,
//     src2: Slider3m,
//     title: "AirPods Pro 2",
//     des: "Now with a hearing Aid feature.",
//     class: "text-[#f5f5f7] ",
//   },
//   {
//     id: "4",
//     src: Slider4l,
//     src2: Slider4m,
//     title: "MacBook Air",
//     des: "Learn.Mean. M3 matchine",
//     class: "text-black  ",
//   },
// ];

// const Carousel = () => {
//   return (
//     <div className="w-full">
//       <Splide
//         aria-label="My Favorite Images"
//         options={{
//           type: "loop",  // For continuous looping
//           perPage: 3,    // Show 3 slides at a time
//           focus: "center", // Focus on the center slide
//           arrows: true,  // Show navigation arrows
//           autoplay: true, // Auto plays the slider
//           interval: 3000, // Interval between slides
//           pagination: false, // Hide pagination
//           gap: "1rem", // Space between slides
//           rewind: true,  // Enable rewind on last slide
//         }}
//       >
//         {Slider.map((item, index) => (
//           <SplideSlide key={index} className="flex justify-center px-1">
//             {/* <div className="bg-[#FFFFFF] pb-2 rounded-[20px] lg:h-[420px] lg:w-[664px] md:h-[346px] md:w-[442px] max-[450px]:h-[190px] max-[450px]:w-[280px]"> */}
//             <div className="bg-[#FFFFFF] pb-2 ">
//               <img
//                 className="w-full h-full object-cover"
//                 src={item.src}
//                 alt={item.title}
//               />
//               <div className="p-5">
//                 <p className="font-Noto_Sans hover:[opacity:80%] font-semibold text-black-700 md:text-2xl text-center max-[450px]:text-sm">
//                   {item.title}
//                 </p>
//                 <p className="m-1 font-Montserrat_Sans hover:[opacity:80%] font-light text-black-700 lg:text-sm md:text-sm sm:text-xs text-center max-[450px]:hidden">
//                   {item.des}
//                 </p>
//               </div>
//             </div>
//           </SplideSlide>
//         ))}
//       </Splide>
//     </div>
//   );
// };

// export default Carousel;

