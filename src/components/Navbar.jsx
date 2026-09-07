import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data'

function Logo() {
  return (
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
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="nav-brand" onClick={close}>
          <Logo />
          <span>
            UDMH
            <small>Umbrella DigitalMine</small>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-ghost nav-cta">
            Partner with us
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="nav-mobile">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={close}>
              {link.label}
            </Link>
          ))}
          <NavLink to="/operate" onClick={close}>
            Operate
          </NavLink>
          <NavLink to="/hosting" onClick={close}>
            Hosting
          </NavLink>
          <NavLink to="/repairs" onClick={close}>
            Repairs
          </NavLink>
          <NavLink to="/miners" onClick={close}>
            Miners
          </NavLink>
          <Link to="/contact" className="btn btn-primary" onClick={close}>
            Partner with us
          </Link>
        </div>
      )}
    </header>
  )
}
