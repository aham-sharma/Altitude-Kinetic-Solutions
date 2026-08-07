import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Infinite horizontal scrolling marquee.
 * Props:
 *   - children: the content to scroll (rendered twice for seamless loop)
 *   - speed: pixels per second (default: 60)
 *   - direction: 'left' or 'right'
 *   - pauseOnHover: whether to pause on hover
 *   - className: container classes
 */
export default function MarqueeRow({
  children,
  speed = 60,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}) {
  const containerRef = useRef(null)
  const tweenRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const inner = container.querySelector('.marquee-inner')
    const content = container.querySelector('.marquee-content')
    if (!inner || !content) return

    // Measure one copy
    const contentWidth = content.offsetWidth

    // Calculate duration based on speed
    const duration = contentWidth / speed

    const tween = gsap.to(inner, {
      x: direction === 'left' ? -contentWidth : contentWidth,
      duration,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const mod = parseFloat(x) % contentWidth
          return direction === 'left' ? mod : mod
        }),
      },
    })

    tweenRef.current = tween

    if (pauseOnHover) {
      const pause = () => gsap.to(tween, { timeScale: 0, duration: 0.5 })
      const resume = () => gsap.to(tween, { timeScale: 1, duration: 0.5 })
      container.addEventListener('mouseenter', pause)
      container.addEventListener('mouseleave', resume)
      return () => {
        container.removeEventListener('mouseenter', pause)
        container.removeEventListener('mouseleave', resume)
        tween.kill()
      }
    }

    return () => tween.kill()
  }, [speed, direction, pauseOnHover])

  return (
    <div ref={containerRef} className={`marquee-container ${className}`}>
      <div className="marquee-inner">
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">{children}</div>
      </div>
    </div>
  )
}
