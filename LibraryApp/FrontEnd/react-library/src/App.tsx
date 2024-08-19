import React from 'react';
import './App.css';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './Layouts/HomePage/ExploreTopBooks';
import { Carousel } from './Layouts/HomePage/Carousel';

function App() {
  return (
    <>
    <Navbar/>
    <ExploreTopBooks/>
    <Carousel/>
    </>
  );
}

export default App;
