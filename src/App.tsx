import React from 'react';
import { NavBar } from 'components';
import { BusinessCard, Slider } from 'views';

function App() {
  return (
    <>
      <NavBar />
      <BusinessCard id='home' />
      <Slider id='technology' />
    </>
  );
}

export default App;
