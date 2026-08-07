import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AscentLine from '../components/AscentLine.jsx'
import ContourDivider from '../components/ContourDivider.jsx'
import TextReveal from '../components/TextReveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import MarqueeRow from '../components/MarqueeRow.jsx'

gsap.registerPlugin(ScrollTrigger)

const trustIndicators = [
  'SAP Consulting & S/4HANA Transformation',
  'AI & Intelligent Automation Solutions',
  'Enterprise IT Consulting',
  'AI-Powered Technology Recruitment',
  'Contract • Contract-to-Hire • Permanent Hiring',
  'Serving Clients Across USA • Canada • India',
]

const services = [
  {
    icon: '⚙️',
    title: 'SAP Consulting & Digital Transformation',
    body: 'Transform your enterprise with world-class SAP consulting. We help organizations modernize their SAP landscape through strategic planning, implementation, migration, optimization, and ongoing support.',
    link: '/services',
  },
  {
    icon: '🤖',
    title: 'AI & Intelligent Automation',
    body: 'Leverage Artificial Intelligence to automate business processes, improve decision-making, enhance customer experiences, and unlock new growth opportunities.',
    link: '/services',
  },
  {
    icon: '💡',
    title: 'Enterprise IT Consulting',
    body: 'Build secure, scalable, and future-ready digital ecosystems. From cloud consulting and enterprise architecture to DevOps and cybersecurity.',
    link: '/services',
  },
  {
    icon: '🎯',
    title: 'AI-Powered Technology Recruitment',
    body: 'Our AI-powered recruitment model combines intelligent sourcing, advanced screening, and experienced recruiters to identify highly qualified professionals.',
    link: '/talent',
  },
]

const industries = [
  { icon: '🏭', name: 'Manufacturing' },
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🏦', name: 'Banking & Finance' },
  { icon: '🛒', name: 'Retail' },
  { icon: '🛡️', name: 'Insurance' },
  { icon: '⚡', name: 'Energy & Utilities' },
  { icon: '📡', name: 'Telecom' },
  { icon: '🚛', name: 'Logistics' },
  { icon: '🚗', name: 'Automotive' },
  { icon: '💊', name: 'Pharma & Biotech' },
  { icon: '🏛️', name: 'Government' },
  { icon: '💻', name: 'Technology' },
]

const advantages = [
  'Deep SAP & Enterprise Technology Expertise',
  'AI-First Consulting & Intelligent Automation',
  'Global Technology Recruitment Across USA, Canada & India',
  'Industry-Specific Consulting Solutions',
  'Rapid Time-to-Hire with AI-Powered Recruitment',
  'End-to-End Consulting, Implementation & Support',
]

/** Helper: animate elements inside a ref with ScrollTrigger */
function useReveal(ref, selector, fromVars, toVars, options = {}) {
  useEffect(() => {
    if (!ref.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const targets = selector
      ? ref.current.querySelectorAll(selector)
      : [ref.current]

    if (targets.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: options.trigger || ref.current,
          start: options.start || 'top 88%',
          toggleActions: 'play none none none',
        },
      })
    }, ref.current)

    return () => ctx.revert()
  }, [])
}

export default function Home() {
  const heroRef = useRef(null)
  const heroGlowRef = useRef(null)
  const heroGlow2Ref = useRef(null)
  const ascentRef = useRef(null)
  const servicesRef = useRef(null)
  const industryRef = useRef(null)
  const whyRef = useRef(null)
  const globalRef = useRef(null)
  const ctaRef = useRef(null)

  // Hero animations — no ScrollTrigger needed (already in view on load)
  useEffect(() => {
    if (!heroRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      )
      gsap.fromTo('.hero-desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.5 }
      )
      gsap.fromTo('.hero-cta',
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.12, ease: 'back.out(1.7)', delay: 0.7 }
      )

      // Parallax glows
      if (heroGlowRef.current) {
        gsap.to(heroGlowRef.current, {
          y: 200, rotation: 10, ease: 'none',
          scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
        })
      }
      if (heroGlow2Ref.current) {
        gsap.to(heroGlow2Ref.current, {
          y: -100, rotation: -5, ease: 'none',
          scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
        })
      }

      // Ascent line draw
      if (ascentRef.current) {
        const path = ascentRef.current.querySelector('.ascent-path')
        const blip = ascentRef.current.querySelector('.ascent-blip')
        if (path) {
          gsap.fromTo(path, { strokeDashoffset: 1400 }, {
            strokeDashoffset: 0, duration: 2.2, ease: 'power2.inOut',
            scrollTrigger: { trigger: ascentRef.current, start: 'top 80%', toggleActions: 'play none none none' },
          })
        }
        if (blip) {
          gsap.fromTo(blip, { opacity: 0, scale: 0.3 }, {
            opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(2)', delay: 2,
            scrollTrigger: { trigger: ascentRef.current, start: 'top 80%', toggleActions: 'play none none none' },
          })
        }
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Services section
  useReveal(servicesRef, '.services-heading',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  )
  useReveal(servicesRef, '.services-desc',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.15 }
  )
  useReveal(servicesRef, '.service-card',
    { opacity: 0, y: 60, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
  )

  // Industry cards
  useReveal(industryRef, '.industry-item',
    { opacity: 0, y: 40, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out' }
  )

  // Why Choose Us
  useReveal(whyRef, '.why-heading',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  )
  useReveal(whyRef, '.why-desc',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
  )
  useReveal(whyRef, '.advantage-item',
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
  )

  // Global Delivery
  useReveal(globalRef, '.global-heading',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  )
  useReveal(globalRef, '.country-card',
    { opacity: 0, y: 60, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.4)' }
  )
  useReveal(globalRef, '.flag-badge',
    { scale: 0, rotation: -20 },
    { scale: 1, rotation: 0, duration: 0.8, stagger: 0.2, ease: 'elastic.out(1, 0.5)' }
  )

  // Final CTA
  useReveal(ctaRef, '[data-cta-reveal]',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
  )

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div ref={heroGlowRef} className="hero-glow" />
        <div ref={heroGlow2Ref} className="hero-glow-2" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="hero-subtitle font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">
            Accelerating Digital Transformation with SAP, AI & Elite Technology Talent
          </p>
          <TextReveal
            as="h1"
            className="font-display font-semibold text-[11vw] leading-[0.95] md:text-7xl lg:text-8xl text-[var(--ice)] max-w-5xl"
            delay={0.1}
            stagger={0.07}
            triggerStart="top 95%"
          >
            Transform. Innovate. Scale.
          </TextReveal>
          <p className="hero-desc mt-6 font-display text-lg md:text-xl text-[var(--blue-electric)]/90 max-w-3xl leading-relaxed">
            Empowering Businesses with SAP, AI, Digital Transformation & Global Technology Talent.
          </p>
          <p className="hero-desc mt-4 max-w-2xl text-[var(--slate)] text-base leading-relaxed">
            Your trusted global partner for SAP Transformation, Artificial Intelligence, Enterprise IT Consulting, 
            Digital Innovation, and AI-Powered Technology Recruitment—helping organizations build smarter businesses 
            and stronger teams.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton strength={0.25}>
              <Link to="/contact" className="hero-cta font-mono text-[13px] tracking-widest uppercase px-7 py-3.5 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors inline-block">
                Schedule a Free Consultation
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <Link to="/talent" className="hero-cta font-mono text-[13px] tracking-widest uppercase px-7 py-3.5 rounded-sm border border-white/15 text-[var(--ice)] hover:border-[var(--blue-electric)] hover:text-[var(--blue-electric)] transition-colors inline-block">
                Hire Top Technology Talent
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <Link to="/services" className="hero-cta font-mono text-[13px] tracking-widest uppercase px-7 py-3.5 rounded-sm border border-white/10 text-[var(--slate)] hover:border-[var(--blue-electric)] hover:text-[var(--blue-electric)] transition-colors inline-block">
                Explore Our Services
              </Link>
            </MagneticButton>
          </div>

          <div className="mt-10">
            <MarqueeRow speed={50} direction="left" pauseOnHover={true}>
              {trustIndicators.map((item) => (
                <span key={item} className="trust-item whitespace-nowrap">{item}</span>
              ))}
            </MarqueeRow>
          </div>
        </div>
        <div ref={ascentRef}>
          <AscentLine className="w-full h-40 md:h-56 opacity-90" />
        </div>
      </section>

      <ContourDivider label="Our Services" />

      {/* SERVICES */}
      <section ref={servicesRef} className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <h2 className="services-heading font-display text-3xl md:text-4xl text-[var(--ice)] mb-4 max-w-2xl">
          Comprehensive Technology Solutions
        </h2>
        <p className="services-desc text-[var(--slate)] max-w-2xl mb-12 leading-relaxed">
          From SAP S/4HANA transformations and AI-driven automation to cloud modernization 
          and specialized IT staffing, we deliver scalable solutions that drive operational 
          excellence and create lasting business value.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.title} to={s.link} className="service-card glass-card group cursor-pointer block">
              <div className="service-icon">{s.icon}</div>
              <h3 className="font-display text-xl text-[var(--ice)] mb-3 group-hover:text-[var(--blue-electric)] transition-colors">
                {s.title}
              </h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed">{s.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContourDivider label="Industries We Serve" />

      {/* INDUSTRIES — Simple grid with stagger animation */}
      <section ref={industryRef} className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              to="/industries"
              className="industry-item glass-card text-center cursor-pointer p-5 block"
            >
              <span className="text-3xl block mb-2">{ind.icon}</span>
              <span className="text-[var(--ice)] text-sm font-medium">{ind.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <ContourDivider label="Why Choose Us" />

      {/* WHY CHOOSE US */}
      <section ref={whyRef} className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="why-heading font-display text-3xl md:text-4xl text-[var(--ice)] mb-4">
              Delivering Technology Excellence with Measurable Business Impact
            </h2>
            <p className="why-desc text-[var(--slate)] leading-relaxed mb-8">
              Whether your organization is expanding in North America, Canada, or India, our global 
              delivery model enables us to provide the right technology expertise and talent exactly 
              when you need it.
            </p>
          </div>
          <div className="grid gap-3">
            {advantages.map((adv) => (
              <div key={adv} className="advantage-item flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.01]">
                <span className="text-[var(--blue-electric)] text-lg mt-0.5">✦</span>
                <span className="text-[var(--ice)]/90 text-sm">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL DELIVERY */}
      <section ref={globalRef} className="section-gradient py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="global-heading font-display text-3xl md:text-4xl text-[var(--ice)] mb-12 text-center">
            Delivering Excellence Across Borders
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="country-card glass-card text-center">
              <span className="flag-badge">🇺🇸</span>
              <h3 className="font-display text-xl text-[var(--ice)] mt-4 mb-2">United States</h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed">
                Enterprise IT Consulting, SAP Experts, AI Specialists, Contract & Permanent Staffing
              </p>
            </div>
            <div className="country-card glass-card text-center">
              <span className="flag-badge">🇨🇦</span>
              <h3 className="font-display text-xl text-[var(--ice)] mt-4 mb-2">Canada</h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed">
                Digital Transformation, ERP Consulting, Technology Recruitment, Cloud & AI Talent
              </p>
            </div>
            <div className="country-card glass-card text-center">
              <span className="flag-badge">🇮🇳</span>
              <h3 className="font-display text-xl text-[var(--ice)] mt-4 mb-2">India</h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed">
                Global Capability Centers (GCCs), Product Companies, IT Services, Enterprise Consulting, Offshore Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section ref={ctaRef} className="border-t border-white/5 bg-gradient-to-b from-transparent to-[var(--navy)]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-center">
          <h2 data-cta-reveal className="font-display text-3xl md:text-5xl text-[var(--ice)] mb-6">
            Your Partner for Technology Transformation<br />and Global Talent
          </h2>
          <p data-cta-reveal className="text-[var(--slate)] max-w-2xl mx-auto mb-4 leading-relaxed">
            Whether you're implementing SAP S/4HANA, adopting Artificial Intelligence, modernizing enterprise 
            systems, or building high-performing technology teams, Altitude Kinetic Solutions is your trusted 
            partner for innovation and growth.
          </p>
          <p data-cta-reveal className="text-[var(--slate)] max-w-2xl mx-auto mb-10 text-sm">
            Serving Clients Across: 🇺🇸 United States | 🇨🇦 Canada | 🇮🇳 India
          </p>
          <p data-cta-reveal className="font-display text-xl gradient-text font-semibold mb-10">
            Transform Business. Empower People. Accelerate Success.
          </p>
          <div data-cta-reveal className="flex flex-wrap gap-4 justify-center">
            <MagneticButton strength={0.3}>
              <Link to="/contact" className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors">
                Schedule a Consultation
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <Link to="/talent" className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm border border-white/15 text-[var(--ice)] hover:border-[var(--blue-electric)] hover:text-[var(--blue-electric)] transition-colors">
                Hire Top Technology Talent
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}
