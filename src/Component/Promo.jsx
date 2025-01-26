import React from 'react';
import Promo1 from '../assets/Promo/promo1.jpg';
import Promo2 from '../assets/Promo/promo2.jpg';
import Promo3 from '../assets/Promo/promo3.jpg';
import Promo4 from '../assets/Promo/promo4.jpg';
import PromoSM1 from '../assets/Promo/promoSM1.jpg';
import PromoSM2 from '../assets/Promo/promoSM2.jpg';
import PromoSM3 from '../assets/Promo/promoSM3.jpg';
import PromoSM4 from '../assets/Promo/promoSM4.jpg';

const promo = [
  {
    id: '1',
    src: Promo4,
    src2: PromoSM1,
    title: 'iPhone 16',
    des: 'Hello,Apple Inteligence.',
    class: 'text-[#f5f5f7] top-0 ',
  },
  {
    id: '2',
    src: Promo3,
    src2: PromoSM2,
    title: 'Watch',
    des: 'Thinstant classic',
    class: 'text-black top-0 ',
  },
  {
    id: '3',
    src: Promo2,
    src2: PromoSM3,
    title: 'AirPods Pro 2',
    des: 'Now with a hearing Aid feature.',
    class: 'text-[#f5f5f7] bottom-0 pb-10',
  },
  {
    id: '4',
    src: Promo1,
    src2: PromoSM4,
    title: 'MacBook Air',
    des: 'Learn.Mean. M3 matchine',
    class: 'text-black top-0 ',
  },
];

const Promo = () => {
  return (
    <>
      <div>
        <div className='font-Ifont'>
          {promo.map((item, index) => (
            <div
              key={index}
              className='relative py-1 md:p-2  md:float-left md:w-1/2  w-full text-center overflow-hidden'
            >
              <img
                className='hidden md:block float-left md:h-[490px] lg:h-[580px] object-cover'
                src={item.src}
                alt={item.title}
              />

              <img
                className='md:hidden h-[500px] w-full  mx-auto object-cover object-left-top '
                // style={{ objectPosition: '60% 80%' }}
                src={item.src2}
                alt={item.title}
              />

              {/* <div
                className={`absolutetop-0 left-0 w-full pt-10 md:pt-6 `}
              > */}
              <div
                className={`absolute ${item.class}  left-0 w-full pt-10 md:pt-6 `}
              >
                <div className={`text-[#f5f5f7]  text-center ${item.class}`}>
                  <h1 className='text-3xl lg:text-5xl font-[600] leading-[1.25] tracking-[.002]  '>
                    {item.title}
                  </h1>
                  <p className='text-[19px] lg:text-[28px] leading-[1.14] font-[400] tracking-[.012]'>
                    {item.des}
                  </p>
                  <div className='mt-7 text-[14px] lg:text-[17px] leading-[1.17] font-[400] tracking-tight cursor-pointer'>
                    <a className='mx-2 bg-[#0071e3] px-4 py-3 rounded-[20px] min-w-7'>
                      Learn More
                    </a>
                    <a className='mx-2 bg-transparent px-6 py-3 rounded-[25px] border-2 border-[#0071e3] text-[#0071e3] hover:text-white hover:bg-[#0071e3]'>
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Promo;
