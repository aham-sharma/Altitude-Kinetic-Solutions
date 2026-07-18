import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/aks-logo.png'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/technologies', label: 'Technologies' },
  { to: '/talent', label: 'Talent' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[var(--navy-deep)]/90 backdrop-blur border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Altitude Kinetic Solutions" className="h-11 w-11 object-contain" />
          <span className="font-display font-semibold text-lg tracking-tight text-[var(--ice)]">
            Altitude Kinetic <span className="text-[var(--blue-electric)]">Solutions</span>
          </span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `font-mono text-[12px] tracking-widest uppercase transition-colors ${
                  isActive ? 'text-[var(--blue-electric)]' : 'text-[var(--slate)] hover:text-[var(--ice)]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <NavLink
            to="/contact"
            className="font-mono text-[12px] tracking-widest uppercase px-5 py-2.5 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors"
          >
            Schedule a Consultation
          </NavLink>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-6 bg-[var(--ice)] transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[var(--ice)] transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[var(--ice)] transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-[var(--navy-deep)] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-mono text-sm tracking-widest uppercase ${
                  isActive ? 'text-[var(--blue-electric)]' : 'text-[var(--slate)]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
