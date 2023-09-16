import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/views/home';
import About from './components/views/about';
import Faqs from './components/views/faqs';
import SignUp from './components/views/signUp';

function App() {

  return (
    <Router>
      <div>
        {/* Define your routes */}
        <Routes>
          {/* Define a route for the root URL ('/') */}
          <Route path="/" element={<Home />} /> {/* Replace 'Home' with your main component */}
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
