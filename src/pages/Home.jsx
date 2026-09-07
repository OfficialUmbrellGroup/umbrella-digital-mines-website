import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { globalMarkets, services, stats } from '../data'

export default function Home() {
  return (
    <>
      <header className="hero">
        <img
          src="/hero.jpg"
          alt="Solar arrays and mining data halls at dusk"
          className="hero-bg"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Umbrella DigitalMine Holdings</p>
          <h1>
            <span>Global</span> climate-aligned digital infrastructure
          </h1>
          <p className="hero-subtitle">
            UDMH is the Bitcoin mining, data centre, and cloud infrastructure subsidiary
            of Umbrella Group. We convert stranded and underutilised energy into
            high-value computing and financial output.
          </p>
          <div className="hero-cta">
            <a href="#services" className="btn btn-primary">
              Explore services
            </a>
            <Link to="/contact" className="btn btn-ghost">
              Partner with us
            </Link>
          </div>
        </div>
      </header>

      <section className="stats-bar" aria-label="Key figures">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="container split">
          <div className="split-copy">
            <p className="eyebrow">About UDMH</p>
            <h2>Lowest-cost, lowest-emission computing capacity.</h2>
            <p>
              Umbrella DigitalMine Holdings is the Bitcoin mining and data center arm of
              Umbrella Group. We operate globally — across Africa, the Americas, and
              Asia — locating compute next to the cheapest, cleanest power we can find.
            </p>
            <p>
              Africa remains a core energy advantage: vast natural gas flaring, solar
              irradiation, and power surpluses help us deliver some of the lowest-cost,
              lowest-emission computing capacity in the world. That sits inside one
              vertically integrated business with advanced ASIC mining, AI-ready data
              centers, and a global cloud mining platform.
            </p>
            <p>
              By combining flare gas-to-power generation with Power Purchase Agreements
              from Generation Companies and solar hybrid providers, UDMH achieves
              electricity costs of $0.015–$0.04/kWh — well below the global average of
              $0.10–$0.15/kWh.
            </p>
            <div className="pills" aria-label="Global operating markets">
              {globalMarkets.map((market) => (
                <span key={market} className="pill">
                  {market}
                </span>
              ))}
            </div>
          </div>
          <figure className="split-media">
            <img
              src="/energy.jpg"
              alt="Solar farm at golden hour with industrial power infrastructure on the horizon"
            />
          </figure>
        </div>
      </section>

      <section id="services" className="section section-muted">
        <div className="container">
          <div className="section-header section-header-left">
            <p className="eyebrow">Our services</p>
            <h2>
              Everything you need
              <br />
              for Bitcoin mining.
            </h2>
            <p>
              Source mining hardware. Deploy it with our hosting team or ship it to your
              own site. Keep it running with specialist repairs. Make decisions with our
              mining analytics. We operate sites, host, repair, and sell.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section id="operations" className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Operations</p>
            <h2>A vertically integrated digital-infrastructure business.</h2>
            <p>
              Institutional Bitcoin mining, AI-ready edge capacity, and a cloud hashrate
              platform — operated globally, powered by stranded energy, and hedged across
              the cheapest power markets on earth.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <h3>Advanced ASIC mining</h3>
              <p>
                We operate institutional and commercial Bitcoin mining with advanced ASIC
                hardware, including the Bitmain S21 series, which offers 20–30% energy
                savings through immersion cooling.
              </p>
            </article>
            <article className="feature-card">
              <h3>Edge data centers &amp; AI</h3>
              <p>
                Edge data centers for AI workloads sit alongside mining halls, so surplus
                power can serve high-value compute as well as hashrate.
              </p>
            </article>
            <article className="feature-card">
              <h3>Cloud mining platform</h3>
              <p>
                A cloud platform similar to BitFuFu lets users rent hashrate through a
                simple app, with flexible contracts and real-time dashboards.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-media">
        <div className="container split split-reverse">
          <figure className="split-media">
            <img
              src="/ai-datacenter.jpg"
              alt="Aisle of GPU server racks in an AI-ready data center"
            />
          </figure>
          <div className="split-copy">
            <p className="eyebrow">Global footprint</p>
            <h2>Capacity follows energy, not the other way around.</h2>
            <p>
              Operations are not limited to any one continent. We build, host, and hedge
              across regions with favourable electricity costs — Nigeria, Ethiopia,
              Kenya, the United States, Brazil, Kazakhstan, Bhutan, and more — so
              hashrate and AI workloads sit where power is cheapest and cleanest.
            </p>
            <div className="pills" aria-label="Global operating markets">
              {globalMarkets.map((market) => (
                <span key={market} className="pill">
                  {market}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="section section-muted">
        <div className="container split">
          <div className="split-copy">
            <p className="eyebrow">Energy partners</p>
            <h2>Buyer of last resort for surplus power.</h2>
            <p>
              We work with renewable, rural, and mini-grid energy generators to monetize
              the full capacity of their output. When households and businesses are not
              drawing load, UDMH is still there as a reliable offtaker.
            </p>
            <p>
              By monetizing surplus energy, UDMH helps mini-grid developers become
              economically sustainable — which can lower electricity costs and expand
              power access for local households and businesses.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Talk to our energy team
            </Link>
          </div>
          <figure className="split-media">
            <img
              src="/operate.jpg"
              alt="Operations team inspecting ASIC miners inside a UDMH site"
            />
          </figure>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <h2>Partner with us as an energy producer, investor, government, or exchange.</h2>
          <Link to="/contact" className="btn btn-primary">
            Discuss a partnership
          </Link>
        </div>
      </section>
    </>
  )
}
