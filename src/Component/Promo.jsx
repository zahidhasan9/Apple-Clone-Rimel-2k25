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
    title: '',
    des: '',
    class: '',
  },
  {
    id: '2',
    src: Promo3,
    src2: PromoSM2,
    title: '',
    des: '',
    class: '',
  },
  {
    id: '3',
    src: Promo2,
    src2: PromoSM3,
    title: '',
    des: '',
    class: '',
  },
  {
    id: '4',
    src: Promo1,
    src2: PromoSM4,
    title: '',
    des: '',
    class: '',
  },
];

const Promo = () => {
  return (
    <>
      <div>
        <div>
          {promo.map((item, index) => (
            <div className='py-1 md:p-2  md:float-left md:w-1/2  w-full text-center overflow-hidden'>
              <img
                className='hidden md:block float-left md:h-[490px] lg:h-[580px] object-cover'
                src={item.src}
                alt={item.title}
              />
              <img
                className='md:hidden h-[500px] w-full  mx-auto object-cover object-left-bottom '
                // style={{ objectPosition: '60% 80%' }}
                src={item.src2}
                alt={item.title}
              />
              {/* <div
                key={index}
                className='h-screen w-full bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${item.src2})` }}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Promo;
