import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  // Logic to update the Browser Tab Title
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'The Platform | Home';
        break;
      case '/about':
        document.title = 'The Platform | About Us';
        break;
      case '/services':
        document.title = 'The Platform | Services';
        break;
      case '/contact':
        document.title = 'The Platform | Contact';
        break;
      default:
        document.title = 'The Platform';
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;