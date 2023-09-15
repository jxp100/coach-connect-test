import React from 'react';
import './App.css';
import Footer from './components/views/footer';
import Header from './components/views/header';
import TopSection from './components/views/topSection';
import ScrollToSection from './components/views/scrollToSection';
import About from './components/views/about';
import { useState } from 'react';

function App() {


  return (
    <div >
      <Header />
      <TopSection id='top-section' />

      <div id='about-section'>
        <About />
        <ScrollToSection text={'Find Out More'} targetPage={"about-section"} offset={-90} />

      </div>


      {/* <Footer /> */}
    </div>
  );
}

export default App;
