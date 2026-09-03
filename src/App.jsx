import React from 'react';
import './App.css';

// SVG Icons
const Icons = {
  Logo: () => (
    <svg className="logo-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Energy: () => (
    <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Mining: () => (
    <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  AI: () => (
    <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
      <path d="M12 12 2.1 7.1" />
      <path d="M12 12l7.1-7.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
};

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar glass">
        <div className="logo">
          <Icons.Logo />
          <span>UDMH</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#operations">Operations</a>
          <a href="#services">Services</a>
          <a href="#impact">Impact</a>
        </div>
        <button className="btn-outline nav-cta">Partner With Us</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <img src="/hero-bg-new.png" alt="Data center in Africa" className="hero-bg" />
        <div className="hero-overlay"></div>
        
        <div className="container hero-content">
          <h1 className="hero-title">
            Climate-Aligned Digital Infrastructure <br />
            <span className="text-gradient">Across Africa</span>
          </h1>
          <p className="hero-subtitle">
            Umbrella DigitalMine Holdings (UDMH) is the Bitcoin mining, data centre, and cloud infrastructure subsidiary of Umbrella Group. We convert stranded and underutilised energy into high-value computing and financial output.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Explore Services</button>
            <button className="btn-outline">Read Our Story</button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Lowest-Cost Computing Capacity</h2>
            <p>
              Umbrella DigitalMine Holdings (UDMH) is the Bitcoin mining and data center arm of Umbrella Group, a leading developer of digital infrastructure and energy solutions in Africa, with operations in Nigeria, Ethiopia, and Kenya.
            </p>
            <p>
              UDMH leverages Africa's vast natural gas flaring, solar irradiation, and power surpluses to deliver some of the lowest-cost, lowest-emission computing capacity in the world. 
            </p>
            <p>
              By combining flare gas-to-power generation with Power Purchase Agreements (PPAs) from Generation Companies and solar hybrid providers, UDMH achieves electricity costs of $0.015–$0.04/kWh, significantly lower than the global average of $0.10–$0.15/kWh.
            </p>
          </div>
          <div className="about-image">
            <img src="/energy.png" alt="Renewable energy facility" />
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section id="operations" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Vertically Integrated Digital Infrastructure</h2>
            <p>The company integrates sustainable energy, advanced ASIC mining, AI-ready data centers, and a global cloud-based mining platform into a single vertically integrated business.</p>
          </div>
          
          <div className="features-grid">
            <div className="glass-card">
              <Icons.Mining />
              <h3 className="feature-title">Advanced ASIC Mining</h3>
              <p className="feature-desc">
                Institutional and commercial Bitcoin mining with advanced ASIC hardware, including the Bitmain S21 series, which offers 20–30% energy savings through immersion cooling.
              </p>
            </div>
            
            <div className="glass-card">
              <Icons.AI />
              <h3 className="feature-title">Edge Data Centers & Cloud</h3>
              <p className="feature-desc">
                Edge data centers for AI workloads and a cloud platform allowing users to rent hashrate via a user-friendly app with flexible contracts and real-time dashboards.
              </p>
            </div>
            
            <div className="glass-card">
              <Icons.Energy />
              <h3 className="feature-title">International Hedging Strategy</h3>
              <p className="feature-desc">
                UDMH operates an international strategy where we hedge and leverage regions with favourable and cheaper electricity costs like Ethiopia, USA, Brazil, Kazakhstan, Bhutan and lots more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="about" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container about-grid" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
          <div className="about-image">
            <img src="/hero-bg-new.png" alt="High tech AI servers" />
          </div>
          <div className="about-text">
            <h2>Monetizing Surplus Energy</h2>
            <p>
              We work with renewable, rural, mini-grid energy generators to monetize the full capacity of their output as a buyer of last resort.
            </p>
            <p>
              By monetizing surplus energy, UDMH helps mini-grid developers become economically sustainable, which can lower electricity costs and expand power access for local households and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section id="services" style={{ padding: '8rem 0', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 3rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Everything you need <br />for Bitcoin mining.</h2>
            <p style={{ maxWidth: '800px', fontSize: '1.2rem' }}>
              Source mining hardware. Deploy it with our hosting team or ship it to your own site. Keep it running with specialist repairs. Make decisions with our mining analytics.
            </p>
          </div>
          
          <div className="service-cards">
            {/* Repairs Card */}
            <div className="service-card">
              <img src="/repairs.png" alt="Repairs" className="service-image" />
              <div className="service-content">
                <h3>Repairs</h3>
                <p>
                  We repair all major miner brands across Europe and in other locations. We find the problem, fix it, test the miner, and return it to you.
                </p>
                <a href="#repairs" className="service-link">View repairs &rarr;</a>
              </div>
            </div>

            {/* Miners Card */}
            <div className="service-card">
              <img src="/miners.png" alt="Miners" className="service-image" />
              <div className="service-content">
                <h3>Miners</h3>
                <p>
                  Choose from air, hydro, immersion, and home miners. We ship to most countries or can host them for you.
                </p>
                <br/>
                <a href="#miners" className="service-link">Browse miners &rarr;</a>
              </div>
            </div>

            {/* Hosting Card */}
            <div className="service-card">
              <img src="/hosting.png" alt="Hosting" className="service-image" />
              <div className="service-content">
                <h3>Hosting</h3>
                <p>
                  Place your miners in a professionally run facility. We handle setup, power, cooling, monitoring, and maintenance.
                </p>
                <a href="#hosting" className="service-link">Explore hosting &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Partner with us as an energy producer, investor, government, or exchange.</h2>
          <br/>
          <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Discuss Partnership</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo" style={{ marginBottom: '1rem' }}>
                <Icons.Logo />
                <span>UDMH</span>
              </div>
              <p>
                Climate-aligned digital infrastructure across Africa.
              </p>
            </div>
            
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#operations">Operations</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#impact">Impact</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Energy Partners</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 Umbrella DigitalMine Holdings. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
