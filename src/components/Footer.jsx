import { Link } from 'react-router-dom'
import { services } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="nav-brand">
            <svg className="logo-mark" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>UDMH</span>
          </Link>
          <p>
            Umbrella DigitalMine Holdings is the Bitcoin mining, data centre, and cloud
            infrastructure subsidiary of Umbrella Group.
          </p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#operations">Operations</a>
            </li>
            <li>
              <a href="/#impact">Impact</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.map((service) => (
              <li key={service.path}>
                <Link to={service.path}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Partner</h4>
          <ul>
            <li>
              <Link to="/contact">Energy producers</Link>
            </li>
            <li>
              <Link to="/contact">Investors</Link>
            </li>
            <li>
              <Link to="/contact">Governments</Link>
            </li>
            <li>
              <Link to="/contact">Exchanges</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Umbrella DigitalMine Holdings. All rights reserved.</p>
        <p>A subsidiary of Umbrella Group · Global operations</p>
      </div>
    </footer>
  )
}
