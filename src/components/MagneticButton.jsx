import { useRef, useEffect } from 'react'
import gsap from 'gsap'

/**
 * Wraps children in a magnetic hover effect container.
 * Props:
 *   - as: the wrapper element type (default: 'div')
 *   - strength: how strongly the element follows the cursor (0-1)
 *   - className: additional classes
 *   - children: content to wrap
 *   - all other props passed through
 */
export default function MagneticButton({
  as: Tag = 'div',
  strength = 0.35,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouchDevice || prefersReduced) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)',
      })
    }

    // Reset position immediately on click so link navigation works properly
    const handleClick = () => {
      gsap.set(el, { x: 0, y: 0 })
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    el.addEventListener('click', handleClick)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
      el.removeEventListener('click', handleClick)
    }
  }, [strength])

  return (
    <Tag ref={ref} className={`magnetic-wrap ${className}`} data-magnetic {...rest}>
      {children}
    </Tag>
  )
}
