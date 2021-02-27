import React from 'react';
import { NavBar, Footer } from 'components';
import { BusinessCard, Slider } from 'views';

function App() {
  return (
    <>
      <NavBar />
      <BusinessCard id='home' />
      <Slider id='technology' />
      <Footer />
    </>
  );
}

export default App;
