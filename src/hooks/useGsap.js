import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * useScrollAnimation — robust scroll-triggered animation hook.
 *
 * Applies gsap.fromTo to elements inside a container, with ScrollTrigger.
 * Elements that are already in view on mount will animate immediately.
 * Elements below the fold use ScrollTrigger with toggleActions to ensure
 * they always play, even if triggers are refreshed.
 *
 * @param {Object} options
 * @param {Object} options.from - GSAP from vars (e.g., { opacity: 0, y: 50 })
 * @param {Object} options.to - GSAP to vars (e.g., { opacity: 1, y: 0 })
 * @param {string} options.selector - CSS selector for target elements inside the container
 * @param {number} options.stagger - stagger between elements (default: 0)
 * @param {number} options.delay - extra delay in seconds (default: 0)
 * @param {string} options.start - ScrollTrigger start (default: 'top 88%')
 * @param {Array} deps - dependency array for the effect
 * @returns {React.RefObject} ref to attach to the container element
 */
export function useScrollAnimation(options = {}, deps = []) {
  const ref = useRef(null)

  const {
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    selector,
    stagger = 0,
    delay = 0,
    start = 'top 88%',
  } = options

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      // If reduced motion, just make everything visible
      const targets = selector
        ? container.querySelectorAll(selector)
        : [container]
      gsap.set(targets, { opacity: 1, y: 0, x: 0, scale: 1, rotateX: 0, rotateY: 0 })
      return
    }

    const targets = selector
      ? container.querySelectorAll(selector)
      : [container]

    if (targets.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, from, {
        ...to,
        stagger,
        delay,
        scrollTrigger: {
          trigger: container,
          start,
          toggleActions: 'play none none none',
        },
      })
    }, container)

    return () => ctx.revert()
  }, deps)

  return ref
}

/**
 * useGsapContext — creates and auto-cleans a GSAP context.
 * @param {React.RefObject} scopeRef
 * @returns {React.RefObject} context ref
 */
export function useGsapContext(scopeRef) {
  const ctxRef = useRef(null)

  useEffect(() => {
    if (scopeRef.current) {
      ctxRef.current = gsap.context(() => {}, scopeRef)
    }
    return () => {
      if (ctxRef.current) ctxRef.current.revert()
    }
  }, [scopeRef])

  return ctxRef
}

/**
 * useParallax — scroll-linked vertical movement.
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: 100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, el.parentElement || el)

    return () => ctx.revert()
  }, [speed])

  return ref
}
