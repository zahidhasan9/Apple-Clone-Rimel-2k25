import { useState } from 'react';
import Navbar from './Component/Navbar';
import './App.css';
import SlideBg from './Component/SlideBg';
import Promo from './Component/Promo';
import Carousel from './Component/Carousel';

function App() {
  return (
    <>
      <Navbar />
      <SlideBg />
      <Promo />
      <Carousel/>
    </>
  );
}

export default App;
