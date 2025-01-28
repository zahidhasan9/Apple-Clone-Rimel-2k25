import React from 'react';
import { FaApple } from 'react-icons/fa6';
import { BsBag } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
const Navbar = () => {
  return (
    <>
      <div className='bg-[#f5f5f7cc] font-Ifont'>
        <div className='flex justify-center items-center gap-2'>
          <div>
            <div className='py-5 '>
              <FaApple />
            </div>
          </div>
          <div className='hidden  lg:block sm:block'>
            <ul className=' cursor-pointer navlist flex text-[12px] font-[400] leading-1.5 tracking-widest lg:tracking-[.08em] lg:mx-10  '>
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Vision</li>
              <li>AirPods</li>
              <li>Accessories</li>
              <li>Support</li>
            </ul>
          </div>
          <div className='flex tracking-widest gap-x-4'>
            <div>
              <IoIosSearch />
            </div>
            <div>
              <BsBag />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
