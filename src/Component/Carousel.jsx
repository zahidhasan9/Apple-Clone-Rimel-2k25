import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Slider1l from '../assets/carousal/slider1l.jpg';
import Slider2l from '../assets/carousal/slider2l.jpg';
import Slider3l from '../assets/carousal/slider3l.jpg';
import Slider4l from '../assets/carousal/slider4l.jpg';

import Slider1m from '../assets/carousal/slider1m.jpg';
import Slider2m from '../assets/carousal/slider2m.jpg';
import Slider3m from '../assets/carousal/slider3m.jpg';
import Slider4m from '../assets/carousal/slider4m.jpg';

const Slider = [
  {
    id: '1',
    src: Slider1l,
    src2: Slider1m,
    title: 'Stream Now',
  },
  {
    id: '2',
    src: Slider2l,
    src2: Slider2m,
    title: 'Stream Now',
  },
  {
    id: '3',
    src: Slider3l,
    src2: Slider3m,
    title: 'Stream Now',
  },
  {
    id: '4',
    src: Slider4l,
    src2: Slider4m,
    title: 'Stream Now',
  },
];

const Carousel = () => {
  return (
    <div className=''>
      <Splide
        aria-label='My Favorite Images'
        options={{
          type: 'loop',
          perPage: 1.5,
          focus: 'center',
          arrows: false,
          autoplay: true,
          interval: 3000,
          pagination: false,
          rewind: true,
          breakpoints: {
            2640: {
              perPage: 1.5,
            },
          },
        }}
      >
        {Slider.map((item, index) => (
          <SplideSlide key={index} className='py-1'>
            <div className='lg:h-[667px]  px-1.5 flex flex-col justify-center items-center"'>
              <img
                className='hidden md:block lg:block lg:h-[667px] md:h-[367]:h-[200px] w-full object-cover'
                src={item.src}
                alt={item.title}
              />
              <img
                className='md:hidden h-[495px] w-full  object-cover object-left-bottom'
                src={item.src2}
                alt={item.title}
              />

              <div className='absolute p-5 bottom-0 left-0 text-white pt-3'>
                <p className='font-Noto_Sans hover:[opacity:80%] font-semibold text-black-700 md:text-2xl text-center max-[450px]:text-sm'>
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
