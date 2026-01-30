import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-info">
          <img src="/logo.png" style={{ height: '35px', marginBottom: '1rem' }} alt="Logo" />
          <p>House # 330/10-A, Block-C,<br/>Tajmahal Road, Mohammadpur,<br/>Dhaka 1207</p>
          <p style={{ marginTop: '10px' }}>
            <strong>Email:</strong> <a href="mailto:contacts@theplatformbd.com">contacts@theplatformbd.com</a>
          </p>
        </div>
        <div className="footer-links">
            <h4>Company</h4>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Capabilities</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="footer-links">
            <h4>Services</h4>
            <ul>
                <li><Link to="/services">Brand Strategy</Link></li>
                <li><Link to="/services">Visual Identity</Link></li>
                <li><Link to="/services">Digital Marketing</Link></li>
            </ul>
        </div>
        <div className="footer-links">
            <h4>Connect</h4>
            <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </div>
      </div>
      <div className="container" style={{ borderTop: '1px solid var(--border-light)', marginTop: '3rem', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-body)' }}>
        &copy; 2026 The Platform. All Rights Reserved.
      </div>
    </footer>
  );
}