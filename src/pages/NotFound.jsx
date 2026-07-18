import { Link } from 'react-router-dom'
import AscentLine from '../components/AscentLine.jsx'

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 text-center">
      <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">
        Off the map
      </p>
      <h1 className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] mb-6">
        No route to this camp.
      </h1>
      <p className="text-[var(--slate)] mb-10">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors"
      >
        Back to base camp
      </Link>
      <AscentLine className="w-full h-32 mt-16 opacity-70" showBlip={false} />
    </div>
  )
}
