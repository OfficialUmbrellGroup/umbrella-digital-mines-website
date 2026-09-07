import PartnerForm from '../components/PartnerForm'

export default function Contact() {
  return (
    <>
      <header className="page-hero page-hero-plain">
        <div className="container page-hero-content">
          <p className="eyebrow">Partner with us</p>
          <h1>Energy producer, investor, government, or exchange.</h1>
          <p className="lead">
            Tell us who you are and what you want to build. UDMH works with mini-grid
            developers, generation companies, capital partners, public institutions, and
            digital-asset venues.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-copy">
            <h2>How partnerships typically start</h2>
            <ul className="plain-list">
              <li>
                <strong>Energy producers</strong> — monetize surplus, flared, or
                stranded generation as a buyer of last resort.
              </li>
              <li>
                <strong>Investors</strong> — co-develop sites, fleets, and the cloud
                hashrate platform.
              </li>
              <li>
                <strong>Governments</strong> — convert wasted energy into jobs, grid
                stability, and exportable digital output.
              </li>
              <li>
                <strong>Exchanges</strong> — source hashrate and infrastructure from
                climate-aligned capacity worldwide.
              </li>
            </ul>
          </div>
          <PartnerForm />
        </div>
      </section>
    </>
  )
}
