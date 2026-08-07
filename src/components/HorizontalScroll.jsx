import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scrolls children horizontally as the user scrolls vertically.
 * Uses a scrub-based translate instead of pinning (more reliable across route changes).
 * Props:
 *   - children: the horizontally-scrolling content
 *   - className: container classes
 */
export default function HorizontalScroll({ children, className = '' }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Only enable horizontal scroll on larger screens
    if (window.innerWidth < 768) return

    // Small delay to let DOM settle after route change
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        const totalScroll = track.scrollWidth - section.offsetWidth

        if (totalScroll <= 0) return

        gsap.to(track, {
          x: -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: () => `+=${totalScroll}`,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        })
      }, section)

      // Store ctx ref for cleanup
      section._gsapCtx = ctx
    }, 200)

    return () => {
      clearTimeout(timeout)
      if (section._gsapCtx) {
        section._gsapCtx.revert()
        section._gsapCtx = null
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={`horizontal-scroll-section hidden md:block ${className}`}>
      <div ref={trackRef} className="horizontal-scroll-track">
        {children}
      </div>
    </section>
  )
}
