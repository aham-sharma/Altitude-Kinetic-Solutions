import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Splits children text into words and animates them up from below a clip mask.
 * Props:
 *   - as: the HTML tag to render (default: 'h1')
 *   - children: text content (string)
 *   - className: styling classes
 *   - delay: animation delay in seconds
 *   - stagger: stagger between words
 *   - duration: animation duration
 *   - triggerStart: ScrollTrigger start position (ignored if element is above the fold)
 */
export default function TextReveal({
  as: Tag = 'h1',
  children,
  className = '',
  delay = 0,
  stagger = 0.05,
  duration = 0.8,
  triggerStart = 'top 85%',
  style,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Get all word spans
    const words = container.querySelectorAll('.word-wrap .word')
    if (words.length === 0) return

    gsap.set(words, { y: '110%', opacity: 0 })

    // Check if the element is already in the viewport (above the fold / hero)
    const rect = container.getBoundingClientRect()
    const isInView = rect.top < window.innerHeight

    const ctx = gsap.context(() => {
      if (isInView) {
        // Element already visible — animate immediately with delay, no ScrollTrigger
        gsap.to(words, {
          y: '0%',
          opacity: 1,
          duration,
          stagger,
          ease: 'power3.out',
          delay: delay + 0.2, // small extra delay to let page transition finish
        })
      } else {
        // Element below the fold — use ScrollTrigger
        gsap.to(words, {
          y: '0%',
          opacity: 1,
          duration,
          stagger,
          ease: 'power3.out',
          delay,
          scrollTrigger: {
            trigger: container,
            start: triggerStart,
            once: true,
          },
        })
      }
    }, container)

    return () => ctx.revert()
  }, [delay, stagger, duration, triggerStart])

  // Split text into words for animation
  const renderText = () => {
    if (typeof children !== 'string') {
      // If children is JSX, render as-is without split animation
      return children
    }

    // Handle line breaks encoded as \n or <br>
    const lines = children.split(/\n/)
    return lines.map((line, lineIdx) => (
      <span key={lineIdx}>
        {lineIdx > 0 && <br />}
        {line.split(/\s+/).filter(Boolean).map((word, wordIdx) => (
          <span key={`${lineIdx}-${wordIdx}`} className="word-wrap" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.3em' }}>
            <span className="word" style={{ display: 'inline-block' }}>
              {word}
            </span>
          </span>
        ))}
      </span>
    ))
  }

  const ariaLabel = typeof children === 'string' ? children : undefined

  return (
    <Tag ref={containerRef} className={className} style={style} aria-label={ariaLabel}>
      {renderText()}
    </Tag>
  )
}
