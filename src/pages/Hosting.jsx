import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Hosting() {
  return (
    <>
      <PageHero
        eyebrow="Hosting"
        title="Place your miners in a professionally run facility."
        subtitle="We handle setup, power, cooling, monitoring, and maintenance so your hardware produces hashrate — not operational overhead."
        image="/hosting.jpg"
        imageAlt="Rows of ASIC miners in a professionally managed hosting facility"
      />

      <section className="section">
        <div className="container prose-wide">
          <h2>Institutional hosting on climate-aligned power.</h2>
          <p>
            Host with UDMH and sit on some of the lowest-cost electricity in the world.
            Your machines are racked across our global sites — including Nigeria,
            Ethiopia, Kenya, the United States, Brazil, Kazakhstan, and Bhutan — wherever
            the power economics are strongest.
          </p>
          <p>
            From delivery to first share, our hosting team commissions hardware, manages
            power and cooling — including immersion — and keeps you informed through
            real-time dashboards.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Commissioning</h3>
              <p>Unbox, rack, network, and bring miners online with documented baselines.</p>
            </article>
            <article className="feature-card">
              <h3>Power &amp; cooling</h3>
              <p>Air, hydro, and immersion options matched to the machine and the site.</p>
            </article>
            <article className="feature-card">
              <h3>Monitoring</h3>
              <p>Uptime, hashrate, and temperature visible in real time — with on-site response.</p>
            </article>
          </div>
          <div className="page-cta">
            <Link to="/contact" className="btn btn-primary">
              Request hosting
            </Link>
            <Link to="/miners" className="btn btn-ghost">
              Buy miners to host
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
