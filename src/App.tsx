import React from 'react';
import { Slider, NavBar } from 'components';
import { BusinessCard } from 'views';

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
