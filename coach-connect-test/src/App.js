import React from 'react';
import './App.css';
import Header from './components/views/header';
import TopSection from './components/views/topSection';
import ScrollToSection from './components/views/scrollToSection';
import About from './components/views/about';

function App() {


  return (
    <div >
      <Header />
      <TopSection id='top-section' />

      <div id='about-section'>
        <About />
      </div>


      <ScrollToSection text={'Find Out More'} targetPage={"about-section"} offset={-90} />
    </div>
  );
}

export default App;
