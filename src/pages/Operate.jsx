import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Operate() {
  return (
    <>
      <PageHero
        eyebrow="Operate"
        title="We operate climate-aligned mining and compute sites."
        subtitle="UDMH builds and runs facilities that turn flared gas, solar, and surplus grid power into Bitcoin hashrate and AI capacity."
        image="/operate.jpg"
        imageAlt="Technicians walking aisles of ASIC miners in a UDMH facility"
      />

      <section className="section">
        <div className="container prose-wide">
          <h2>Sites designed around stranded energy.</h2>
          <p>
            We locate digital infrastructure next to energy that would otherwise be
            wasted — from Niger Delta flare gas and northern solar irradiation to surplus
            hydro, gas, and grid power in the United States, Brazil, Kazakhstan, Bhutan,
            and beyond. Power Purchase Agreements and hybrid generation lock in
            $0.015–$0.04/kWh where the resource allows.
          </p>
          <p>
            On site we deploy Bitmain S21-class ASICs, immersion cooling for 20–30%
            energy savings, and edge halls ready for AI workloads. Our teams handle
            construction, energization, monitoring, and day-to-day operations.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Flare gas to power</h3>
              <p>
                Convert associated gas that would be flared into baseload electricity for
                mining and compute.
              </p>
            </article>
            <article className="feature-card">
              <h3>Solar hybrid</h3>
              <p>
                Pair abundant irradiation with storage and PPAs so sites stay online when
                the sun drops.
              </p>
            </article>
            <article className="feature-card">
              <h3>Always-on ops</h3>
              <p>
                Local technicians plus remote monitoring keep hashrate and uptime
                institutional-grade.
              </p>
            </article>
          </div>
          <div className="page-cta">
            <Link to="/contact" className="btn btn-primary">
              Propose a site
            </Link>
            <Link to="/hosting" className="btn btn-ghost">
              Or host with us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
