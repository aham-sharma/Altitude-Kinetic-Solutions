import { Link } from 'react-router-dom'
import logo from '../assets/aks-logo.png'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Altitude Kinetic Solutions" className="h-9 w-9 object-contain" />
            <span className="font-display font-semibold text-[var(--ice)]">Altitude Kinetic Solutions</span>
          </div>
          <p className="text-[var(--slate)] text-sm leading-relaxed mb-4">
            Accelerating Digital Transformation with SAP, AI & Elite Technology Talent.
          </p>
          <p className="text-2xl">🇺🇸 🇨🇦 🇮🇳</p>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)]">Home</Link></li>
            <li><Link to="/about" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)]">About Us</Link></li>
            <li><Link to="/services" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)]">Services</Link></li>
            <li><Link to="/industries" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)]">Industries</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-4">Solutions</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/technologies" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)]">Technologies</Link></li>
            <li><Link to="/talent" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)]">Global Talent</Link></li>
            <li><Link to="/contact" className="text-[var(--ice)]/80 hover:text-[var(--blue-electric)]">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-4">Reach Us</p>
          <ul className="space-y-2 text-sm text-[var(--ice)]/80">
            <li>
              <a href="mailto:Altitude.kinetic.Solutions@gmail.com" className="hover:text-[var(--blue-electric)]">
                Altitude.kinetic.Solutions@gmail.com
              </a>
            </li>
            <li>Greater Noida, Uttar Pradesh, India</li>
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
