import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import CursorFollower from './CursorFollower.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function Layout() {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    // Instant scroll to top (each component cleans up its own triggers via ctx.revert)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    // Page transition animation
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
    }

    // Refresh ScrollTrigger after new page content settles
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh(true)
    }, 300)

    return () => clearTimeout(timeout)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-[var(--navy-deep)]">
      <CursorFollower />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main ref={mainRef} className="flex-1 page-transition">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
