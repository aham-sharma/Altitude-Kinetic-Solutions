import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import AscentLine from '../components/AscentLine.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import TextReveal from '../components/TextReveal.jsx'

export default function NotFound() {
  const containerRef = useRef(null)
  const ascentRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.nf-subtitle', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2,
      })
      gsap.fromTo('.nf-desc', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.5,
      })
      gsap.fromTo('.nf-btn', { opacity: 0, y: 30, scale: 0.9 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.7,
      })

      // Ascent line draw
      if (ascentRef.current) {
        const path = ascentRef.current.querySelector('.ascent-path')
        if (path) {
          gsap.fromTo(path, { strokeDashoffset: 1400 }, {
            strokeDashoffset: 0, duration: 2, ease: 'power2.inOut', delay: 0.8,
          })
        }
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-10 py-28 text-center">
      <p className="nf-subtitle font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">
        Off the map
      </p>
      <TextReveal
        as="h1"
        className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] mb-6"
        delay={0.1}
        stagger={0.08}
        triggerStart="top 95%"
      >
        No route to this camp.
      </TextReveal>
      <p className="nf-desc text-[var(--slate)] mb-10">The page you're looking for doesn't exist.</p>
      <MagneticButton strength={0.3} className="nf-btn inline-block">
        <Link
          to="/"
          className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors"
        >
          Back to base camp
        </Link>
      </MagneticButton>
      <div ref={ascentRef}>
        <AscentLine className="w-full h-32 mt-16 opacity-70" showBlip={false} />
      </div>
    </div>
  )
}
