import './css/styles.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Subscribe from './Components/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
