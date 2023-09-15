import React from 'react';
import './App.css';
import Footer from './components/views/footer';
import Header from './components/views/header';
import TopSection from './components/views/topSection';
import ScrollToSection from './components/views/scrollToSection';
import About from './components/views/about';
import { useState } from 'react';

function App() {
  const [activeButton, setActiveButton] = useState('Find a Coach');

  const handleFindCoachClick = () => {
    setActiveButton('Find a Coach');
  };

  const handleIAmCoachClick = () => {
    setActiveButton('I am a Coach');
  };



  return (
    <div >
      <Header />
      <TopSection id='top-section' activeButton={activeButton} 
        onFindCoachClick={handleFindCoachClick} 
        onIAmCoachClick={handleIAmCoachClick}  />
      <ScrollToSection text={'Find Out More'} targetPage={"about-section"} />

      <div id='about-section'>
        <About activeButton = {activeButton} />
      </div>


      {/* <Footer /> */}
    </div>
  );
}

export default App;
