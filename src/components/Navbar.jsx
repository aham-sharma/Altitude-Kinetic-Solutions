import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import logo from '../assets/aks-logo.png'
import ThemeToggle from './ThemeToggle.jsx'
import MagneticButton from './MagneticButton.jsx'

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
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const navLinksRef = useRef(null)

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Logo animation on mount
  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, x: -20 },
        { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
      )
    }
  }, [])

  // Nav links stagger in on mount
  useEffect(() => {
    if (navLinksRef.current) {
      const items = navLinksRef.current.querySelectorAll('.nav-link-item')
      gsap.fromTo(
        items,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out', delay: 0.3 }
      )
    }
  }, [])

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return

    if (open) {
      const items = mobileMenuRef.current.querySelectorAll('.mobile-nav-link')
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
      )
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
      )
    }
  }, [open])

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 backdrop-blur border-b transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--navy-deep)]/95 border-white/8 shadow-lg shadow-black/10'
          : 'bg-[var(--navy-deep)]/70 border-white/5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div ref={logoRef}>
            <img src={logo} alt="Altitude Kinetic Solutions" className="h-11 w-11 object-contain" />
          </div>
          <span className="font-display font-semibold text-lg tracking-tight text-[var(--ice)]">
            Altitude Kinetic <span className="text-[var(--blue-electric)]">Solutions</span>
          </span>
        </NavLink>

        <div ref={navLinksRef} className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <MagneticButton key={l.to} strength={0.2}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `nav-link-item font-mono text-[12px] tracking-widest uppercase transition-colors ${
                    isActive ? 'text-[var(--blue-electric)]' : 'text-[var(--slate)] hover:text-[var(--ice)]'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </MagneticButton>
          ))}
          <ThemeToggle />
          <MagneticButton strength={0.1}>
            <NavLink
              to="/contact"
              className="font-mono text-[12px] tracking-widest uppercase whitespace-nowrap px-5 py-2.5 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors inline-block"
            >
              Get Started
            </NavLink>
          </MagneticButton>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-6 bg-[var(--ice)] transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[var(--ice)] transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[var(--ice)] transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden border-t border-white/5 bg-[var(--navy-deep)]/95 backdrop-blur-lg px-6 py-6 flex flex-col gap-5 overflow-hidden"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `mobile-nav-link font-mono text-sm tracking-widest uppercase ${
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
