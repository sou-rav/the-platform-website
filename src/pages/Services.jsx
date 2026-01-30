import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="section-padding container text-center reveal active">
        <span className="tagline-pill">Our Services</span>
        <h1>Solutions That <br/><span className="gradient-text">Drive Growth</span></h1>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            Comprehensive branding and marketing solutions designed to cover every critical aspect of your business growth.
        </p>
      </section>

      {/* 2. Detailed Services List */}
      <section className="container reveal delay-100 active" style={{ paddingBottom: '6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Service 1: Brand Strategy */}
            <div className="service-detail-card">
                <div className="service-content">
                    <span className="service-category">Strategic Foundation</span>
                    <h3>Brand Strategy & Positioning</h3>
                    <p>We define clear brand direction through research-driven insights and positioning frameworks that align brand purpose with business objectives.</p>
                    
                    <ul className="check-list-styled">
                        <li><i className="fa-solid fa-check"></i> Competitive Analysis</li>
                        <li><i className="fa-solid fa-check"></i> Positioning Frameworks</li>
                        <li><i className="fa-solid fa-check"></i> Market Research</li>
                    </ul>

                    <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Get Started</Link>
                </div>
                
                <div className="service-deliverables">
                    <h4>Key Deliverables</h4>
                    <div className="deliverable-tags">
                        <span>Brand Architecture</span>
                        <span>Target Audience Persona</span>
                        <span>Core Value Proposition</span>
                    </div>
                </div>
            </div>

            {/* Service 2: Brand Identity */}
            <div className="service-detail-card">
                <div className="service-content">
                    <span className="service-category">Visual Identity</span>
                    <h3>Brand Identity Systems</h3>
                    <p>From logo design to complete visual systems, we create distinctive and cohesive brand identities that communicate credibility.</p>
                    
                    <ul className="check-list-styled">
                        <li><i className="fa-solid fa-check"></i> Logo Design</li>
                        <li><i className="fa-solid fa-check"></i> Visual Systems</li>
                        <li><i className="fa-solid fa-check"></i> Brand Guidelines</li>
                    </ul>

                    <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Get Started</Link>
                </div>
                
                <div className="service-deliverables">
                    <h4>Key Deliverables</h4>
                    <div className="deliverable-tags">
                        <span>Primary & Secondary Logos</span>
                        <span>Color Palette Systems</span>
                        <span>Typography Selection</span>
                    </div>
                </div>
            </div>

            {/* Service 3: Marketing */}
            <div className="service-detail-card">
                <div className="service-content">
                    <span className="service-category">Growth Strategy</span>
                    <h3>Integrated Marketing</h3>
                    <p>We plan and execute strategic marketing frameworks that connect brands with their audience through the right channels.</p>
                    
                    <ul className="check-list-styled">
                        <li><i className="fa-solid fa-check"></i> Audience Targeting</li>
                        <li><i className="fa-solid fa-check"></i> Messaging Strategy</li>
                        <li><i className="fa-solid fa-check"></i> Performance Tracking</li>
                    </ul>

                    <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Get Started</Link>
                </div>
                
                <div className="service-deliverables">
                    <h4>Key Deliverables</h4>
                    <div className="deliverable-tags">
                        <span>Go-to-Market Strategy</span>
                        <span>Campaign Planning</span>
                        <span>Content Strategy</span>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </>
  );
}