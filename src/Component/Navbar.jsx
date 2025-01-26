import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className='bg-[#f5f5f7cc] font-Ifont'>
        <div className='flex justify-center items-center gap-2'>
          <div>
            <div className='py-5'>LOGO</div>
          </div>
          <div>
            <ul className='cursor-pointer navlist flex text-[12px] font-[400] leading-1.5 tracking-widest '>
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
          <div className='flex'>
            <div>search</div>
            <div>cart</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
