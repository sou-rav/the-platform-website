import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="section-padding container text-center reveal active">
        <span className="tagline-pill">Full-Stop Creative Solution</span>
        <h1>COMMITMENT TO QUALITY,<br/>CLARITY, AND <span className="gradient-text">IMPACT</span></h1>
        
        <p style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
            We partner with businesses to define strong brand foundations, craft distinctive identities, and deliver strategic communication that performs in competitive markets.
        </p>

        <div className="reveal delay-100 active" style={{ marginBottom: '4rem' }}>
            <Link to="/contact" className="btn-primary">Start Project</Link>
            <Link to="/services" className="btn-outline">View Capabilities</Link>
        </div>

        {/* Hero Stats Row */}
        <div className="hero-stats-row reveal delay-200 active">
            <div className="hero-stat-item">
                <h2>360°</h2>
                <p>Integrated Solutions</p>
            </div>
            <div className="hero-stat-item">
                <h2>100%</h2>
                <p>Market Driven</p>
            </div>
            <div className="hero-stat-item">
                <h2>24/7</h2>
                <p>Brand Impact</p>
            </div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID (6 Items) */}
      <section className="section-padding container reveal active" style={{ background: 'var(--pill-bg)', borderRadius: '30px' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="tagline-pill">Our Capabilities</span>
            <h2>Comprehensive <span className="gradient-text">Brand Solutions</span></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                Our capabilities are designed to cover every critical aspect of brand building and growth.
            </p>
        </div>
        
        <div className="grid-3">
            {/* Card 1 */}
            <div className="home-service-card">
                <div className="icon-box-small"><i className="fa-solid fa-chess"></i></div>
                <h3>Brand Strategy</h3>
                <p>Research-driven insights and positioning frameworks that align brand purpose with business objectives.</p>
                <span className="card-tag">Strategic Foundation</span>
            </div>

            {/* Card 2 */}
            <div className="home-service-card">
                <div className="icon-box-small"><i className="fa-solid fa-fingerprint"></i></div>
                <h3>Brand Identity</h3>
                <p>Logo design and visual systems that communicate credibility, consistency, and recognition.</p>
                <span className="card-tag">Visual Systems</span>
            </div>

            {/* Card 3 */}
            <div className="home-service-card">
                <div className="icon-box-small"><i className="fa-solid fa-pen-nib"></i></div>
                <h3>Creative Design</h3>
                <p>Design solutions driven by concept, clarity, and craft to enhance brand perception.</p>
                <span className="card-tag">Visual Excellence</span>
            </div>

            {/* Card 4 */}
            <div className="home-service-card">
                <div className="icon-box-small"><i className="fa-solid fa-chart-line"></i></div>
                <h3>Integrated Marketing</h3>
                <p>Strategic frameworks that connect brands with their audience through the right channels.</p>
                <span className="card-tag">Growth Strategy</span>
            </div>

            {/* Card 5 */}
            <div className="home-service-card">
                <div className="icon-box-small"><i className="fa-solid fa-mobile-screen"></i></div>
                <h3>Digital Campaigns</h3>
                <p>Impactful digital activations that increase visibility, engagement, and conversion.</p>
                <span className="card-tag">Online Impact</span>
            </div>

            {/* Card 6 */}
            <div className="home-service-card">
                <div className="icon-box-small"><i className="fa-solid fa-book-open"></i></div>
                <h3>Content Storytelling</h3>
                <p>Meaningful narratives that humanize brands and strengthen emotional connections.</p>
                <span className="card-tag">Brand Narrative</span>
            </div>
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn-outline" style={{ marginLeft: 0 }}>View All Details</Link>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (Testimonial Style) */}
      <section className="section-padding container reveal active">
        <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
                <span className="tagline-pill">Why Choose Us</span>
                <h2>Collaborative & <br/><span className="gradient-text">Insight-Driven</span></h2>
            </div>
            
            <div className="feature-card" style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Client-First Approach</h3>
                <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    "We work closely with our clients to understand their goals, challenges, and audience, ensuring every solution is relevant, scalable, and results-focused."
                </p>
                <ul className="check-list-styled">
                    <li><i className="fa-solid fa-circle-check"></i> Strategic Thinking</li>
                    <li><i className="fa-solid fa-circle-check"></i> Impactful Design</li>
                    <li><i className="fa-solid fa-circle-check"></i> Performance Driven</li>
                </ul>
            </div>
        </div>
      </section>
    </>
  );
}