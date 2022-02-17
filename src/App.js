import './css/styles.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Subscribe from './Components/Subscribe/Subscribe';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
