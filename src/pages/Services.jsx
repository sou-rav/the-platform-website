import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <div className="section-padding container">
        <div className="text-center reveal" style={{ marginBottom: '6rem' }}>
            <span className="tagline-pill">Our Services</span>
            <h1>Solutions That <span className="gradient-text">Drive Growth</span></h1>
            <p style={{ margin: '0 auto', maxWidth: '700px' }}>Comprehensive branding and marketing solutions designed to cover every critical aspect of your business growth.</p>
        </div>

        <div className="service-row reveal">
            <div className="service-text">
                <div className="service-icon-badge"><i className="fa-solid fa-compass"></i> Strategic Foundation</div>
                <h3>Brand Strategy & Positioning</h3>
                <p>We define clear brand direction through research-driven insights and positioning frameworks that align brand purpose with business objectives.</p>
                <ul className="check-list-styled"><li><i className="fa-solid fa-check"></i> Competitive Analysis</li><li><i className="fa-solid fa-check"></i> Positioning Frameworks</li><li><i className="fa-solid fa-check"></i> Market Research</li></ul>
                <Link to="/contact" className="btn-primary" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>Get Started</Link>
            </div>
            <div className="deliverables-card">
                <h4>Key Deliverables</h4>
                <div className="pill-list"><div className="pill-item"><span className="pill-dot"></span> Brand Architecture</div><div className="pill-item"><span className="pill-dot"></span> Target Audience Persona</div><div className="pill-item"><span class="pill-dot"></span> Core Value Proposition</div></div>
            </div>
        </div>

        <div className="service-row reverse reveal">
            <div className="service-text">
                <div className="service-icon-badge"><i className="fa-solid fa-fingerprint"></i> Visual Identity</div>
                <h3>Brand Identity Systems</h3>
                <p>From logo design to complete visual systems, we create distinctive and cohesive brand identities that communicate credibility.</p>
                <ul className="check-list-styled"><li><i className="fa-solid fa-check"></i> Logo Design</li><li><i className="fa-solid fa-check"></i> Visual Systems</li><li><i className="fa-solid fa-check"></i> Brand Guidelines</li></ul>
                <Link to="/contact" className="btn-primary" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>Get Started</Link>
            </div>
            <div className="deliverables-card">
                <h4>Key Deliverables</h4>
                <div className="pill-list"><div className="pill-item"><span className="pill-dot"></span> Primary & Secondary Logos</div><div className="pill-item"><span className="pill-dot"></span> Color Palette Systems</div><div className="pill-item"><span className="pill-dot"></span> Typography Selection</div></div>
            </div>
        </div>

        <div className="service-row reveal">
            <div className="service-text">
                <div className="service-icon-badge"><i className="fa-solid fa-bullhorn"></i> Growth Strategy</div>
                <h3>Integrated Marketing</h3>
                <p>We plan and execute strategic marketing frameworks that connect brands with their audience through the right channels.</p>
                <ul className="check-list-styled"><li><i className="fa-solid fa-check"></i> Audience Targeting</li><li><i className="fa-solid fa-check"></i> Messaging Strategy</li><li><i className="fa-solid fa-check"></i> Performance Tracking</li></ul>
                <Link to="/contact" className="btn-primary" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>Get Started</Link>
            </div>
            <div className="deliverables-card">
                <h4>Key Deliverables</h4>
                <div className="pill-list"><div className="pill-item"><span className="pill-dot"></span> Go-to-Market Strategy</div><div className="pill-item"><span className="pill-dot"></span> Campaign Planning</div><div className="pill-item"><span className="pill-dot"></span> Content Strategy</div></div>
            </div>
        </div>
      </div>
    </>
  );
}