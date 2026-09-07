import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Miners() {
  return (
    <>
      <PageHero
        eyebrow="Miners"
        title="Source mining hardware. Host it or ship it."
        subtitle="Choose from air, hydro, immersion, and home miners. We ship to most countries or can host them for you."
        image="/miners.jpg"
        imageAlt="Air-cooled ASIC Bitcoin miner photographed in studio"
      />

      <section className="section">
        <div className="container prose-wide">
          <h2>Hardware matched to your power and your plan.</h2>
          <p>
            UDMH sources current-generation ASIC fleets — including the Bitmain S21
            series — for operators who want to buy, deploy, and either self-host or
            colocate. Immersion-ready units can cut energy use 20–30% versus air-cooled
            baselines.
          </p>
          <p>
            Buy machines and send them to your own site, or have them drop into a UDMH
            facility on climate-aligned power anywhere in our global network. Cloud
            hashrate is available if you would rather rent than own.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Air &amp; hydro</h3>
              <p>Standard and hydro-cooled ASICs for conventional halls and dense racks.</p>
            </article>
            <article className="feature-card">
              <h3>Immersion</h3>
              <p>S21-class hardware with 20–30% energy savings through immersion cooling.</p>
            </article>
            <article className="feature-card">
              <h3>Home &amp; cloud</h3>
              <p>Smaller units for home operators, plus app-based hashrate rental with live dashboards.</p>
            </article>
          </div>
          <div className="page-cta">
            <Link to="/contact" className="btn btn-primary">
              Request a quote
            </Link>
            <Link to="/hosting" className="btn btn-ghost">
              Host what you buy
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
