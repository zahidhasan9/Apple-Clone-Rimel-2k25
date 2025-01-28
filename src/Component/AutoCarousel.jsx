import React from 'react';
import Slider from 'react-slick';
// css silk
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AU1 from '../assets/AutoSlider/AU1.jpg';
import AU2 from '../assets/AutoSlider/AU2.jpg';
import AU3 from '../assets/AutoSlider/AU3.jpg';
import AU4 from '../assets/AutoSlider/AU4.jpg';
import AU5 from '../assets/AutoSlider/AU5.jpg';
import AU6 from '../assets/AutoSlider/AU6.jpg';
import AU7 from '../assets/AutoSlider/AU7.jpg';

const Sliderd = [
  {
    id: '1',
    src: AU1,
    title: 'Watch Now',
  },
  {
    id: '2',
    src: AU2,
    title: 'Watch Now',
  },
  {
    id: '3',
    src: AU3,
    title: 'Watch Now',
  },
  {
    id: '4',
    src: AU4,
    title: 'Watch Now',
  },
  {
    id: '5',
    src: AU5,
    title: 'Watch Now',
  },
  {
    id: '6',
    src: AU6,
    title: 'Watch Now',
  },
  {
    id: '7',
    src: AU7,
    title: 'Watch Now',
  },
];

const AutoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full py-1.5'>
      <Slider {...settings}>
        {Sliderd.map((item, index) => (
          <div key={index} className='flex justify-center px-1'>
            <div className=' bg-[#FFFFFF] pb-2 '>
              <img
                className='h-[134px] md:h-[161px] lg-[236px]  w-full  object-cover'
                src={item.src}
                alt={item.title}
              />
              <div className='p-1.5 text-black pt-1'>
                <p className='cursor-pointer font-Ifont hover:[opacity:80%] font-normal text-black-700 md:text-sm text-center max-[450px]:text-sm'>
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoCarousel;
