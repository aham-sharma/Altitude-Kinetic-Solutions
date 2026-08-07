import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CursorFollower() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Hide on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      dot.style.display = 'none'
      ring.style.display = 'none'
      return
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      dot.style.display = 'none'
      ring.style.display = 'none'
      return
    }

    let mouseX = -100
    let mouseY = -100

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.15,
        ease: 'power2.out',
      })

      gsap.to(ring, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    const handleEnterInteractive = () => {
      gsap.to(dot, { scale: 0, duration: 0.3, ease: 'power2.out' })
      gsap.to(ring, { scale: 2, opacity: 0.6, duration: 0.4, ease: 'power2.out' })
    }

    const handleLeaveInteractive = () => {
      gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' })
    }

    const addInteractiveListeners = () => {
      const interactives = document.querySelectorAll('a, button, [data-magnetic], input, textarea, .glass-card')
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleEnterInteractive)
        el.addEventListener('mouseleave', handleLeaveInteractive)
      })
      return interactives
    }

    document.addEventListener('mousemove', moveCursor)
    let interactives = addInteractiveListeners()

    // Re-register on DOM changes (route changes)
    const observer = new MutationObserver(() => {
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnterInteractive)
        el.removeEventListener('mouseleave', handleLeaveInteractive)
      })
      interactives = addInteractiveListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnterInteractive)
        el.removeEventListener('mouseleave', handleLeaveInteractive)
      })
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
