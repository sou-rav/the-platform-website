import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding container text-center reveal active">
        <span className="tagline-pill">Full-Stop Creative Solution</span>
        <h1>COMMITMENT TO QUALITY,<br/>CLARITY, AND <span className="gradient-text">IMPACT</span></h1>
        <p className="reveal delay-100 active">
            We partner with businesses to define strong brand foundations, craft distinctive identities, and deliver strategic communication that performs in competitive markets.
        </p>
        <div className="reveal delay-200 active" style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="btn-primary">Start Project</Link>
            <Link to="/services" className="btn-outline">View Capabilities</Link>
        </div>
        <div className="stats-row reveal delay-300 active">
            <div className="stat-item"><h2>360°</h2><p>Integrated Solutions</p></div>
            <div className="stat-item"><h2>100%</h2><p>Market Driven</p></div>
            <div className="stat-item"><h2>24/7</h2><p>Brand Impact</p></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container reveal active" style={{ paddingBottom: '6rem' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="tagline-pill">Our Capabilities</span>
            <h2>Comprehensive <span className="gradient-text">Brand Solutions</span></h2>
            <p>Our capabilities are designed to cover every critical aspect of brand building and growth.</p>
        </div>
        <div className="grid-3">
            <div className="home-service-card"><div className="icon-box-small"><i className="fa-solid fa-compass"></i></div><h3>Brand Strategy</h3><p>Research-driven insights and positioning frameworks that align brand purpose with business objectives.</p><div className="card-footer"><span>Strategic Foundation</span><i className="fa-solid fa-arrow-right"></i></div></div>
            <div className="home-service-card"><div className="icon-box-small"><i className="fa-solid fa-fingerprint"></i></div><h3>Brand Identity</h3><p>Logo design and visual systems that communicate credibility, consistency, and recognition.</p><div className="card-footer"><span>Visual Systems</span><i className="fa-solid fa-arrow-right"></i></div></div>
            <div className="home-service-card"><div className="icon-box-small"><i className="fa-solid fa-palette"></i></div><h3>Creative Design</h3><p>Design solutions driven by concept, clarity, and craft to enhance brand perception.</p><div className="card-footer"><span>Visual Excellence</span><i className="fa-solid fa-arrow-right"></i></div></div>
            <div className="home-service-card"><div className="icon-box-small"><i className="fa-solid fa-bullhorn"></i></div><h3>Integrated Marketing</h3><p>Strategic frameworks that connect brands with their audience through the right channels.</p><div className="card-footer"><span>Growth Strategy</span><i className="fa-solid fa-arrow-right"></i></div></div>
            <div className="home-service-card"><div className="icon-box-small"><i className="fa-solid fa-mobile-screen"></i></div><h3>Digital Campaigns</h3><p>Impactful digital activations that increase visibility, engagement, and conversion.</p><div className="card-footer"><span>Online Impact</span><i className="fa-solid fa-arrow-right"></i></div></div>
            <div className="home-service-card"><div className="icon-box-small"><i className="fa-solid fa-feather"></i></div><h3>Content Storytelling</h3><p>Meaningful narratives that humanize brands and strengthen emotional connections.</p><div className="card-footer"><span>Brand Narrative</span><i className="fa-solid fa-arrow-right"></i></div></div>
        </div>
        <div className="text-center" style={{ marginTop: '3rem' }}><Link to="/services" className="btn-outline">View All Details</Link></div>
      </section>
    </>
  );
}