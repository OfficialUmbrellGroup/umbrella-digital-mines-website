import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Repairs() {
  return (
    <>
      <PageHero
        eyebrow="Repairs"
        title="Specialist repairs that get miners back in the rack."
        subtitle="We find the problem, fix it, test the miner, and return it to you — across our global sites."
        image="/repairs.jpg"
        imageAlt="Technician inspecting an ASIC miner on a workshop floor"
      />

      <section className="section">
        <div className="container prose-wide">
          <h2>Find. Fix. Test. Return.</h2>
          <p>
            Hashrate only pays when machines are running. UDMH repairs all major miner
            brands with a workshop process built for institutional fleets: diagnosis,
            board-level repair, burn-in testing, and documented return to your site or
            our hosting halls.
          </p>
          <p>
            Whether a unit failed in Lagos, Texas, or Kazakhstan, the same standard
            applies — so you are not waiting on generic electronics shops that do not
            understand ASICs.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Diagnosis</h3>
              <p>Hashboard, PSU, control board, and firmware issues isolated before we touch a solder joint.</p>
            </article>
            <article className="feature-card">
              <h3>Repair</h3>
              <p>Component-level work on major brands, including Bitmain S21-class hardware.</p>
            </article>
            <article className="feature-card">
              <h3>Test &amp; return</h3>
              <p>Full-load testing, then shipping back to you or straight into a UDMH hosting slot.</p>
            </article>
          </div>
          <div className="page-cta">
            <Link to="/contact" className="btn btn-primary">
              Start a repair
            </Link>
            <Link to="/operate" className="btn btn-ghost">
              See our sites
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
