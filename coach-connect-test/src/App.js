import './App.css';
import Footer from './components/views/footer';
import Header from './components/views/header';
import TopSection from './components/views/topSection';
import ScrollToSection from './components/views/scrollToSection';
import About from './components/views/about';

function App() {
  return (
    <div >
      <Header />
      <TopSection />
      <ScrollToSection text={'Find Out More'} targetPage={'about-section'} />
      <div id='about-section'>
        <About />
      </div>


      {/* <Footer /> */}
    </div>
  );
}

export default App;
