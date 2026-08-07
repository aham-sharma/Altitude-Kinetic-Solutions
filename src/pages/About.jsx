import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ContourDivider from '../components/ContourDivider.jsx'
import TextReveal from '../components/TextReveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'

gsap.registerPlugin(ScrollTrigger)

const coreValues = [
  {
    icon: '🎯',
    title: 'Our Mission',
    body: 'To empower organizations with innovative technology solutions and exceptional talent that accelerate growth, improve efficiency, and create sustainable competitive advantage.',
  },
  {
    icon: '🔭',
    title: 'Our Vision',
    body: 'To become a globally trusted technology consulting and talent solutions partner, enabling businesses to embrace innovation, transform digitally, and lead confidently in the AI-driven future.',
  },
]

const serviceHighlights = [
  { title: 'SAP Consulting & Digital Transformation', body: 'Transform your enterprise with intelligent SAP solutions — from S/4HANA migration and ABAP development to BTP, Fiori, and managed SAP services.', link: '/services' },
  { title: 'AI & Intelligent Automation', body: 'Building intelligent enterprises with Generative AI, machine learning, predictive analytics, conversational AI, and custom AI application development.', link: '/services' },
  { title: 'Enterprise IT Consulting', body: 'Digital transformation strategy, cloud consulting, enterprise architecture, application development, DevOps, cybersecurity, and managed IT services.', link: '/services' },
  { title: 'AI-Powered Technology Recruitment', body: 'Connecting businesses with exceptional technology talent through intelligent sourcing, advanced screening, and experienced recruiters.', link: '/talent' },
]

const outcomes = [
  'Digital Enterprise Transformation', 'Business Process Optimization', 'Intelligent Automation',
  'Cloud Migration & Modernization', 'Enterprise System Integration', 'Reduced Operational Costs',
  'Increased Productivity', 'Improved Business Agility',
]

function useReveal(ref, selector, fromVars, toVars, options = {}) {
  useEffect(() => {
    if (!ref.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const targets = selector ? ref.current.querySelectorAll(selector) : [ref.current]
    if (targets.length === 0) return
    const ctx = gsap.context(() => {
      gsap.fromTo(targets, fromVars, {
        ...toVars,
        scrollTrigger: { trigger: options.trigger || ref.current, start: options.start || 'top 88%', toggleActions: 'play none none none' },
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])
}

export default function About() {
  const heroRef = useRef(null)
  const missionRef = useRef(null)
  const servicesRef = useRef(null)
  const outcomesRef = useRef(null)

  // Hero — immediate animations (no ScrollTrigger)
  useEffect(() => {
    if (!heroRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('.about-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.5 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  useReveal(missionRef, '.mission-card',
    { opacity: 0, y: 60, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out' }
  )

  useReveal(servicesRef, '.services-about-heading',
    { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  )
  useReveal(servicesRef, '.service-highlight-card',
    { opacity: 0, y: 60, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
  )

  useReveal(outcomesRef, '.outcomes-heading',
    { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  )
  useReveal(outcomesRef, '.outcomes-desc',
    { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.15 }
  )
  useReveal(outcomesRef, '.outcome-item',
    { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
  )

  return (
    <div>
      <section ref={heroRef} className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28">
        <p className="about-subtitle font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">About Altitude Kinetic Solutions</p>
        <TextReveal as="h1" className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] max-w-4xl leading-tight" delay={0.1} stagger={0.05}>
          Empowering Businesses Through Technology, Innovation & Talent
        </TextReveal>
        <p className="about-desc mt-8 max-w-3xl text-[var(--slate)] text-lg leading-relaxed">
          At Altitude Kinetic Solutions, we help organizations accelerate digital transformation by combining deep technology expertise with AI-driven innovation and world-class talent solutions. We partner with businesses to modernize enterprise systems, optimize operations, and build high-performing teams that drive long-term success.
        </p>
        <p className="about-desc mt-4 max-w-3xl text-[var(--slate)] text-base leading-relaxed">
          As a trusted consulting and technology partner, we specialize in SAP transformation, Artificial Intelligence, cloud modernization, enterprise application development, IT consulting, and strategic technology recruitment.
        </p>
        <p className="about-desc mt-4 max-w-3xl text-[var(--slate)] text-base leading-relaxed">
          Whether you're implementing SAP S/4HANA, adopting Generative AI, migrating to the cloud, or scaling your workforce with specialized technology professionals, Altitude Kinetic Solutions delivers tailored solutions that align with your business goals.
        </p>
      </section>

      <ContourDivider label="Mission & Vision" />

      <section ref={missionRef} className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid gap-6 md:grid-cols-2">
        {coreValues.map((v) => (
          <div key={v.title} className="mission-card glass-card">
            <div className="service-icon">{v.icon}</div>
            <h3 className="font-display text-2xl text-[var(--ice)] mb-4">{v.title}</h3>
            <p className="text-[var(--slate)] leading-relaxed">{v.body}</p>
          </div>
        ))}
      </section>

      <ContourDivider label="What We Do" />

      <section ref={servicesRef} className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <h2 className="services-about-heading font-display text-3xl md:text-4xl text-[var(--ice)] mb-12 max-w-2xl">Comprehensive Solutions for the Modern Enterprise</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceHighlights.map((s) => (
            <Link key={s.title} to={s.link} className="service-highlight-card glass-card group block">
              <h3 className="font-display text-xl text-[var(--ice)] mb-3 group-hover:text-[var(--blue-electric)] transition-colors">{s.title}</h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed">{s.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContourDivider label="Business Outcomes" />

      <section ref={outcomesRef} className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h2 className="outcomes-heading font-display text-3xl md:text-4xl text-[var(--ice)] mb-6">Measurable Results, Real Business Impact</h2>
          <p className="outcomes-desc text-[var(--slate)] leading-relaxed mb-4">We align technology with your business objectives to maximize ROI.</p>
          <div className="mt-8">
            <MagneticButton strength={0.25}>
              <Link to="/contact" className="inline-block font-mono text-[13px] tracking-widest uppercase px-7 py-3.5 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors">Start a Conversation</Link>
            </MagneticButton>
          </div>
        </div>
        <div className="grid gap-3">
          {outcomes.map((item) => (
            <div key={item} className="outcome-item flex items-center gap-4 border-b border-white/10 pb-4">
              <span className="text-[var(--blue-electric)] text-lg">✦</span>
              <span className="text-[var(--ice)]/90">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
