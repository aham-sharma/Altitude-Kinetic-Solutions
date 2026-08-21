import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../assets/aks-logo.webp'
import MagneticButton from './MagneticButton.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const items = footerRef.current.querySelectorAll('[data-footer-reveal]')
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid gap-10 md:grid-cols-4">
        <div data-footer-reveal>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Altitude Kinetic Solutions" className="h-9 w-9 object-contain" />
            <span className="font-display font-semibold text-[var(--ice)]">Altitude Kinetic Solutions</span>
          </div>
          <p className="text-[var(--slate)] text-sm leading-relaxed mb-4">
            Accelerating Digital Transformation with SAP, AI & Elite Technology Talent.
          </p>
          <p className="text-2xl">🇺🇸 🇨🇦 🇮🇳</p>
        </div>

        <div data-footer-reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            <li><MagneticButton strength={0.15}><Link to="/" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)] transition-colors">Home</Link></MagneticButton></li>
            <li><MagneticButton strength={0.15}><Link to="/about" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)] transition-colors">About Us</Link></MagneticButton></li>
            <li><MagneticButton strength={0.15}><Link to="/services" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)] transition-colors">Services</Link></MagneticButton></li>
            <li><MagneticButton strength={0.15}><Link to="/industries" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)] transition-colors">Industries</Link></MagneticButton></li>
          </ul>
        </div>

        <div data-footer-reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-4">Solutions</p>
          <ul className="space-y-2 text-sm">
            <li><MagneticButton strength={0.15}><Link to="/technologies" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)] transition-colors">Technologies</Link></MagneticButton></li>
            <li><MagneticButton strength={0.15}><Link to="/talent" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)] transition-colors">Global Talent</Link></MagneticButton></li>
            <li><MagneticButton strength={0.15}><Link to="/contact" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)] transition-colors">Contact Us</Link></MagneticButton></li>
          </ul>
        </div>

        <div data-footer-reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-4">Reach Us</p>
          <ul className="space-y-2 text-sm text-[var(--ice)]/80">
            <li>
              <a href="mailto:Hr@altitudekinetics.com" className="hover:text-[var(--blue-electric)] transition-colors">
                Hr@altitudekinetics.com
              </a>
            </li>
            <li>30 N Gould St Ste R, Sheridan, WY 82801</li>
          </ul>
          <p className="mt-4 text-[var(--slate)] text-xs leading-relaxed">
            Transform Business. Empower People. Accelerate Success.
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center font-mono text-[11px] tracking-widest uppercase text-[var(--slate-dim)]">
        © {new Date().getFullYear()} Altitude Kinetic Solutions — All Rights Reserved
      </div>
    </footer>
  )
}
