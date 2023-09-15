import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import TopSection from './components/topSection';
import ScrollToSection from './components/scrollToSection';

function App() {
  return (
    <div >
      <Header />
      <TopSection />
      <ScrollToSection text={'Find Out More'} />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
