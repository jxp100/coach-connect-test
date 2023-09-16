import React from 'react';
import './App.css';
import Header from './components/views/header';
import TopSection from './components/views/topSection';
import ScrollToSection from './components/views/scrollToSection';
import About from './components/views/about';
import { useState } from 'react';
import Faqs from './components/views/faqs';

function App() {

  const [currentTargetPage, setCurrentTargetPage] = useState('about-section');

  const updateTargetPage = () => {
    // Determine the next target page based on the current target page
    const nextTargetPage = currentTargetPage === 'about-section' ? 'faq-section' : 'about-section';

    // Update the target page
    setCurrentTargetPage(nextTargetPage);
  };

  return (
    <div >
      <Header />
      <TopSection id='top-section' />

      <div id='about-section'>
        <About />
      </div>

      <div id='faq-section'>
        <Faqs />
      </div>

      <ScrollToSection text={'Find Out More'} targetPage={currentTargetPage} updateTargetPage={updateTargetPage} />
    </div>
  );
}

export default App;
