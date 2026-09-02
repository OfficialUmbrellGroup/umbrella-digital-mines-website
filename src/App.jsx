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
          <a href="#solutions">Solutions</a>
          <a href="#infrastructure">Infrastructure</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="btn-outline nav-cta">Partner With Us</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <img src="/hero-bg.png" alt="Data center in Africa" className="hero-bg" />
        <div className="hero-overlay"></div>
        
        <div className="container hero-content">
          <h1 className="hero-title">
            African AI & Bitcoin Mining <br />
            <span className="text-gradient">At the Frontier</span>
          </h1>
          <p className="hero-subtitle">
            Converting stranded and under-utilized energy into high-value computing and financial output. Climate-aligned digital infrastructure across Africa.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Explore Infrastructure</button>
            <button className="btn-outline">Read Our Story</button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-text">
            <h2>The Win-Win-Win Model</h2>
            <p>
              Umbrella Digital Mines Holdings (UDMH) works with renewable, rural, mini-grid energy generators to monetize the full capacity of their output. 
            </p>
            <p>
              By capturing stranded natural gas flaring, leveraging intense solar irradiation, and utilizing power surpluses, we create some of the lowest-cost, lowest-emission computing capacity globally. 
            </p>
            <p>
              Communities benefit from better grid stability and affordable power. Energy providers become financially viable. We generate high-value compute.
            </p>
          </div>
          <div className="about-image">
            <img src="/energy.png" alt="Renewable energy facility" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="solutions" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Integrated Vertical Infrastructure</h2>
            <p>We combine energy generation, mining, and AI into a single globally connected network.</p>
          </div>
          
          <div className="features-grid">
            {/* Feature 1 */}
            <div className="glass-card">
              <Icons.Energy />
              <h3 className="feature-title">Sustainable Energy</h3>
              <p className="feature-desc">
                Partnering with rural mini-grids and capturing natural gas flaring to transform environmental liabilities into clean, constant power for our operations.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-card">
              <Icons.Mining />
              <h3 className="feature-title">Advanced ASIC-Mining</h3>
              <p className="feature-desc">
                Deploying ruggedized edge servers that coordinate mining operations based on current operating parameters of distributed mini-grids.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-card">
              <Icons.AI />
              <h3 className="feature-title">AI-Ready Data Centers</h3>
              <p className="feature-desc">
                Scaling from day-one hashrate validation to full enterprise-grade GPU clusters for AI inference, creating a global cloud-based computing platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Showcase */}
      <section id="infrastructure" className="about" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container about-grid" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
          <div className="about-image">
            <img src="/servers.png" alt="High tech AI servers" />
          </div>
          <div className="about-text">
            <h2>Scale to AI Inference</h2>
            <p>
              Deploy GPU clusters for AI inference at a fraction of grid-powered costs. Bitcoin hashrate remains as a dynamic load balancer—every watt earns, every second of the day.
            </p>
            <ul style={{ listStyle: 'none', marginTop: '2rem' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
                <strong>Validate with Hashrate:</strong> Immediate revenue proving site viability.
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
                <strong>Harden Infrastructure:</strong> Tier III-ready cooling and redundant power.
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
                <strong>Global Compute Platform:</strong> Enterprise-grade AI processing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Turn Environmental Liability into Digital Assets</h2>
          <p>Whether you're an energy producer with stranded gas or an investor seeking de-risked infrastructure returns, let's talk.</p>
          <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Discuss Partnership</button>
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
                At the frontier of Bitcoin mining and AI infrastructure in Africa. Distributed, Renewable, Rural.
              </p>
            </div>
            
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">Our Story</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#infrastructure">Infrastructure</a></li>
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
            <p>&copy; 2026 Umbrella Digital Mines Holdings. All rights reserved.</p>
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
