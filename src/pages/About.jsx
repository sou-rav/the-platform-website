export default function About() {
  return (
    <>
      <section className="section-padding container text-center reveal">
        <span className="tagline-pill">About The Platform</span>
        <h1>Building Brands with <br/><span className="gradient-text">Clarity & Purpose</span></h1>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                The Platform was established to help brands compete, grow, and lead in an ever-evolving marketplace. We operate at the intersection of strategy, creativity, and marketing, delivering integrated solutions that strengthen brand presence and business performance.
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                Our approach is collaborative and insight-driven. We work closely with our clients to understand their goals, challenges, and audience, ensuring every solution is relevant, scalable, and results-focused.
            </p>
            <p style={{ fontSize: '1rem' }}>
                From brand strategy and identity to creative execution and marketing activation, The Platform delivers excellence at every stage of the brand journey.
            </p>
        </div>
      </section>

      <section className="container reveal delay-100">
        <div className="grid-2">
            <div className="feature-card">
                <div className="icon-box"><i className="fa-solid fa-bullseye"></i></div>
                <h3>Our Mission</h3>
                <p>To empower businesses through strategic brand thinking, impactful design, and performance-driven marketing solutions. We are committed to transforming ideas into strong brand systems.</p>
            </div>
            <div className="feature-card">
                <div className="icon-box"><i className="fa-solid fa-eye"></i></div>
                <h3>Our Vision</h3>
                <p>To become a leading creative branding and marketing agency recognized for building meaningful brands that inspire trust, create influence, and sustain long-term growth.</p>
            </div>
        </div>
      </section>

      <section className="section-padding container reveal">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>How We Work</h2>
            <p>Our streamlined process ensures efficient delivery without compromising quality.</p>
        </div>
        <div className="grid-4">
            <div className="step-card"><div className="step-number">01</div><h3>Discovery</h3><p style={{ fontSize: '0.9rem' }}>Understanding the brand's market position.</p></div>
            <div className="step-card"><div className="step-number">02</div><h3>Strategy</h3><p style={{ fontSize: '0.9rem' }}>Defining clear brand direction.</p></div>
            <div className="step-card"><div className="step-number">03</div><h3>Creation</h3><p style={{ fontSize: '0.9rem' }}>Translating insights into visuals.</p></div>
            <div className="step-card"><div className="step-number">04</div><h3>Growth</h3><p style={{ fontSize: '0.9rem' }}>Executing strategies that drive visibility.</p></div>
        </div>
      </section>

      <section className="container reveal" style={{ marginBottom: '6rem' }}>
        <div className="grid-2">
            <div>
                <h2>Why Choose <span className="gradient-text">The Platform?</span></h2>
                <p style={{ marginBottom: '2rem' }}>We combine deep expertise with a client-first approach to deliver solutions that actually work. Here is what sets us apart:</p>
                <ul className="check-list-styled" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <li><i className="fa-solid fa-circle-check" style={{ fontSize: '1.1rem' }}></i> <strong>Collaborative Approach:</strong> We work with you, not just for you.</li>
                    <li><i className="fa-solid fa-circle-check" style={{ fontSize: '1.1rem' }}></i> <strong>Insight-Driven:</strong> Decisions based on research, not guesswork.</li>
                    <li><i className="fa-solid fa-circle-check" style={{ fontSize: '1.1rem' }}></i> <strong>Long-Term Focus:</strong> Building brands that sustain growth.</li>
                    <li><i className="fa-solid fa-circle-check" style={{ fontSize: '1.1rem' }}></i> <strong>Scalable Solutions:</strong> Strategies that grow with your business.</li>
                </ul>
            </div>
            <div className="stats-container">
                <div className="stat-box wide"><h4>360°</h4><span>Integrated Solutions</span></div>
                <div className="stat-box"><h4>100%</h4><span>Market Driven</span></div>
                <div className="stat-box"><h4>24/7</h4><span>Brand Impact</span></div>
                <div className="stat-box wide" style={{ background: 'var(--brand-primary)', color: '#000' }}><h4 style={{ color: '#000' }}>Results</h4><span style={{ color: '#333' }}>Focused Approach</span></div>
            </div>
        </div>
      </section>
    </>
  );
}