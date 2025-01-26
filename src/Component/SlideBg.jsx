import React from 'react';
import SlideBg1 from '../assets/SliderBg/bgimg1.jpg';
import SlideBg2 from '../assets/SliderBg/bgimg2.jpg';
import SlideBg3 from '../assets/SliderBg/bgimg3.jpg';

const BG = [
  {
    id: '1',
    src: SlideBg1,
    title: 'MacBook Pro',
    des: 'A work of smart',
    display: 'lg',
  },
  {
    id: '2',
    src: SlideBg2,
    title: 'iPad Pro',
    des: 'Unbelievable thin. Incredibly powerful',
    display: 'lg',
  },
  {
    id: '3',
    src: SlideBg3,
    title: 'iPhone 16 Pro',
    des: 'Hello,Apple Inteligence.',
    display: 'lg',
  },
];

const SlideBg = () => {
  return (
    <>
      <div>
        {BG.map((item, index) => (
          <div key={index} className='relative cursor-pointer'>
            <img
              className='lg:h-[692px] md:h-[650px] h-[500px] object-cover py-1'
              src={item.src}
              alt={item.title} // Use title for alt text for accessibility
            />
            <div className='absolute top-0 left-0 w-full  pt-20'>
              <div className='text-[#f5f5f7] text-center '>
                <h1 className='text-5xl font-[600] leading-[1.1] tracking-tighter'>
                  {item.title}
                </h1>
                <p className='text-[28px] leading-[1.14] font-[400] tracking-tighter'>
                  {item.des}
                </p>
                <div className='mt-7  text-[17px] leading-[1.17] font-[400] tracking-tight'>
                  <a className='mx-2 bg-[#0071e3] px-4 py-3 rounded-[20px] min-w-7'>
                    Learn More
                  </a>
                  <a className='mx-2 bg-transparent px-6 py-3 rounded-[25px] border-2 border-[#0071e3] hover:bg-[#0071e3]'>
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SlideBg;
