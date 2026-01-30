export default function Contact() {
  return (
    <div className="section-padding container">
        {/* Header Section */}
        <div className="text-center reveal active" style={{ marginBottom: '3rem' }}>
            <span className="tagline-pill">Get In Touch</span>
            <h1>Let's Build Something <br/><span className="gradient-text">Amazing</span></h1>
            <p style={{ margin: '0 auto', maxWidth: '700px' }}>
                Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can help transform your business.
            </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid-2 reveal delay-100 active">
            
            {/* Left Column: Direct Message */}
            <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Start a Conversation</h2>
                <p style={{ marginLeft: 0, marginBottom: '2rem' }}>
                    We are currently accepting new project inquiries directly via email. Please send us a brief description of your project, and our team will get back to you within 24 hours.
                </p>
                
                <a href="mailto:contacts@theplatformbd.com" className="btn-primary full-width" style={{ textAlign: 'center' }}>
                    Send Email <i className="fa-solid fa-paper-plane" style={{ marginLeft: '8px' }}></i>
                </a>
            </div>

            {/* Right Column: Sidebar */}
            <div className="contact-sidebar">
                
                {/* Info Card */}
                <div className="contact-card" style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
                    
                    {/* Email */}
                    <div className="info-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="info-icon" style={{ minWidth: '40px', height: '40px', borderRadius: '50%', background: 'rgba(205, 220, 57, 0.1)', color: '#828d1d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.85rem', color: '#888', display: 'block' }}>Email</span>
                            <strong style={{ color: 'var(--text-main)' }}><a href="mailto:contacts@theplatformbd.com">contacts@theplatformbd.com</a></strong>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="info-item" style={{ display: 'flex', gap: '1rem' }}>
                        <div className="info-icon" style={{ minWidth: '40px', height: '40px', borderRadius: '50%', background: 'rgba(205, 220, 57, 0.1)', color: '#828d1d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.85rem', color: '#888', display: 'block' }}>Location</span>
                            <strong style={{ color: 'var(--text-main)' }}>Dhaka, Bangladesh</strong>
                        </div>
                    </div>
                </div>

                {/* Quick Actions Card */}
                <div className="contact-card">
                    <h3>Quick Actions</h3>
                    <div className="action-cards" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                        
                        {/* Free Consultation Link */}
                        <a href="mailto:contacts@theplatformbd.com?subject=Consultation Request" className="action-card" style={{ textDecoration: 'none', background: 'var(--pill-bg)', padding: '1.2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid var(--border-light)' }}>
                            <div className="action-icon" style={{ fontSize: '1.5rem', color: 'var(--brand-primary)' }}><i className="fa-regular fa-calendar-check"></i></div>
                            <div>
                                <h4 style={{ fontSize: '1rem', margin: 0, color: 'var(--text-main)' }}>Free Consultation</h4>
                                <span style={{ fontSize: '0.8rem', color: '#888' }}>Discuss requirements</span>
                            </div>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}