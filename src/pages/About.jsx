export default function About() {
  return (
    <>
      <section className="section-padding container text-center reveal active">
        <span className="tagline-pill">About The Platform</span>
        <h1>Building Brands with <br/><span className="gradient-text">Clarity & Purpose</span></h1>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                The Platform was established to help brands compete, grow, and lead in an ever-evolving marketplace. We operate at the intersection of strategy, creativity, and marketing.
            </p>
        </div>
      </section>

      <section className="container reveal delay-100 active">
        <div className="grid-2">
            <div className="feature-card">
                <div className="icon-box"><i className="fa-solid fa-bullseye"></i></div>
                <h3>Our Mission</h3>
                <p>To empower businesses through strategic brand thinking, impactful design, and performance-driven marketing solutions.</p>
            </div>
            <div className="feature-card">
                <div className="icon-box"><i className="fa-solid fa-eye"></i></div>
                <h3>Our Vision</h3>
                <p>To become a leading creative branding and marketing agency recognized for building meaningful brands that inspire trust.</p>
            </div>
        </div>
      </section>

      <section className="section-padding container reveal active">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>How We Work</h2>
            <p>Our streamlined process ensures efficient delivery without compromising quality.</p>
        </div>
        <div className="grid-4">
            <div className="step-card"><div className="step-number">01</div><h3>Discovery</h3><p style={{ fontSize: '0.9rem' }}>Understanding the market.</p></div>
            <div className="step-card"><div className="step-number">02</div><h3>Strategy</h3><p style={{ fontSize: '0.9rem' }}>Defining clear direction.</p></div>
            <div className="step-card"><div className="step-number">03</div><h3>Creation</h3><p style={{ fontSize: '0.9rem' }}>Translating insights to visuals.</p></div>
            <div className="step-card"><div className="step-number">04</div><h3>Growth</h3><p style={{ fontSize: '0.9rem' }}>Executing strategies.</p></div>
        </div>
      </section>
    </>
  );
}