import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  // 1. Page Fade-In Logic & Scroll Top on Route Change
  useEffect(() => {
    document.body.classList.remove('loaded');
    window.scrollTo(0, 0); // Scroll to top instantly
    
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 50);

    // Dynamic Title
    const path = location.pathname;
    if(path === '/') document.title = 'The Platform | Home';
    if(path === '/about') document.title = 'The Platform | About';
    if(path === '/services') document.title = 'The Platform | Services';
    if(path === '/contact') document.title = 'The Platform | Contact';

  }, [location]);

  // 2. Scroll Animation (The "Reveal" Effect)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('active'); }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  });

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