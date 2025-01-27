import { useState } from 'react';
import Navbar from './Component/Navbar';
import './App.css';
import SlideBg from './Component/SlideBg';
import Promo from './Component/Promo';
import Carousel from './Component/Carousel';
import AutoCarousel from './Component/AutoCarousel';

function App() {
  return (
    <>
      <Navbar />
      <SlideBg />
      <Promo />
      <Carousel/>
      <AutoCarousel/>
    </>
  );
}

export default App;
