import { useState } from 'react';
import Navbar from './Component/Navbar';
import './App.css';
import SlideBg from './Component/SlideBg';
import Promo from './Component/Promo';

function App() {
  return (
    <>
      <Navbar />
      <SlideBg />
      <Promo />
    </>
  );
}

export default App;
