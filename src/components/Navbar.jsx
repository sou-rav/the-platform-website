import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  
  // This tool tells us which page we are currently on
  const location = useLocation();

  // Handle Scroll & Theme Load
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Helper to check if link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav id="main-nav" className={`reveal active ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={scrollToTop}>
            <img src="/logo.png" alt="Logo" />
        </Link>
        
        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="close-menu" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>

          {/* LINKS WITH ACTIVE STATE CHECK */}
          {/* We add the 'active' class if the current URL matches the link */}
          
          <Link 
            to="/about" 
            className={isActive('/about')} 
            onClick={scrollToTop}
          >
            About
          </Link>
          
          <Link 
            to="/services" 
            className={isActive('/services')} 
            onClick={scrollToTop}
          >
            Services
          </Link>
          
          <Link 
            to="/contact" 
            className={isActive('/contact')} 
            onClick={scrollToTop}
          >
            Contact
          </Link>
          
          <div className="theme-toggle" onClick={toggleTheme}>
            <i className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
          </div>
        </div>
      </div>
    </nav>
  );
}