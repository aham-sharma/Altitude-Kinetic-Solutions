import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ContourDivider from '../components/ContourDivider.jsx'
import TextReveal from '../components/TextReveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import MarqueeRow from '../components/MarqueeRow.jsx'

gsap.registerPlugin(ScrollTrigger)

const talentRoles = ['SAP Consultants','SAP Architects','SAP Developers','AI Engineers','Machine Learning Engineers','Data Scientists','Data Engineers','Cloud Engineers','DevOps Engineers','Cybersecurity Specialists','ServiceNow Consultants','Salesforce Consultants','Oracle Consultants','Microsoft Dynamics Consultants','Java Developers','Python Developers','.NET Developers','React Developers','Full Stack Engineers','Mobile Application Developers','QA Automation Engineers','Business Analysts','Project Managers','Scrum Masters','Solution Architects','Enterprise Architects']

const advantages = [
  { icon: '🤖', title: 'AI-Driven Talent Acquisition', body: 'Intelligent sourcing and screening powered by AI to find the best candidates faster.' },
  { icon: '⚙️', title: 'Specialized SAP & Enterprise Technology Expertise', body: 'Deep domain knowledge across SAP, ERP, and enterprise platforms.' },
  { icon: '🌍', title: 'Global Recruitment Across USA, Canada, and India', body: 'Flexible onsite, remote, hybrid, and offshore delivery models.' },
  { icon: '🏭', title: 'Industry-Specific Consulting', body: 'Domain experts who understand your industry\'s unique technology needs.' },
  { icon: '📋', title: 'Flexible Hiring Models', body: 'Contract, Contract-to-Hire, and Permanent Placement options.' },
  { icon: '⚡', title: 'Rapid Time-to-Hire', body: 'AI-powered recruitment reduces hiring cycles dramatically.' },
  { icon: '🔄', title: 'End-to-End Digital Transformation Services', body: 'From strategy and consulting to implementation and ongoing support.' },
  { icon: '📈', title: 'Scalable Delivery Teams', body: 'Build and scale technology teams as your business grows.' },
  { icon: '🤝', title: 'Dedicated Client Success Managers', body: 'Personalized attention and strategic guidance for every engagement.' },
  { icon: '🕐', title: '24/7 Global Talent Support', body: 'Around-the-clock support across time zones for global operations.' },
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

export default function Talent() {
  const heroRef = useRef(null)
  const hiringRef = useRef(null)
  const rolesRef = useRef(null)
  const advantagesRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.talent-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('.talent-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  useReveal(hiringRef, '.country-card',
    { opacity: 0, y: 60, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.4)' }
  )
  useReveal(hiringRef, '.flag-badge',
    { scale: 0, rotation: -20 },
    { scale: 1, rotation: 0, duration: 0.8, stagger: 0.2, ease: 'elastic.out(1, 0.5)' }
  )

  useReveal(rolesRef, '.roles-heading', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
  useReveal(rolesRef, '.roles-desc', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.15 })

  useReveal(advantagesRef, '.adv-heading', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
  useReveal(advantagesRef, '.adv-desc', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 })
  useReveal(advantagesRef, '.adv-card',
    { opacity: 0, y: 40, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
  )

  useReveal(ctaRef, '[data-cta]', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' })

  return (
    <div>
      <section ref={heroRef} className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28">
        <p className="talent-subtitle font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">AI-Powered Global Talent Solutions</p>
        <TextReveal as="h1" className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] max-w-4xl leading-tight" delay={0.1} stagger={0.04}>
          Connecting Businesses with World-Class Technology Talent
        </TextReveal>
        <p className="talent-desc mt-8 max-w-3xl text-[var(--slate)] text-lg leading-relaxed">
          At Altitude Kinetic Solutions, we combine experienced recruiters with AI-driven sourcing and intelligent screening to deliver highly qualified professionals for contract, contract-to-hire, and permanent positions.
        </p>
      </section>

      <ContourDivider label="We Hire Across" />

      <section ref={hiringRef} className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="country-card glass-card text-center">
            <span className="flag-badge">🇺🇸</span>
            <h3 className="font-display text-2xl text-[var(--ice)] mt-4 mb-3">United States</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">Supporting Fortune 500 companies, system integrators, implementation partners, and fast-growing startups with specialized technology professionals.</p>
          </div>
          <div className="country-card glass-card text-center">
            <span className="flag-badge">🇨🇦</span>
            <h3 className="font-display text-2xl text-[var(--ice)] mt-4 mb-3">Canada</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">Providing enterprise IT consulting and staffing solutions across major Canadian industries, including banking, healthcare, manufacturing, and public sector organizations.</p>
          </div>
          <div className="country-card glass-card text-center">
            <span className="flag-badge">🇮🇳</span>
            <h3 className="font-display text-2xl text-[var(--ice)] mt-4 mb-3">India</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">Helping global capability centers (GCCs), multinational corporations, product companies, consulting firms, and startups build high-performing technology teams.</p>
          </div>
        </div>
      </section>

      <ContourDivider label="Talent We Deliver" />

      <section ref={rolesRef} className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <h2 className="roles-heading font-display text-3xl md:text-4xl text-[var(--ice)] mb-4">Highly Skilled Professionals Across Multiple Domains</h2>
        <p className="roles-desc text-[var(--slate)] max-w-2xl mb-10 leading-relaxed">We recruit highly skilled professionals across multiple technology domains, including:</p>
        <MarqueeRow speed={40} direction="left" pauseOnHover={true} className="mb-4">
          {talentRoles.slice(0, 13).map((role) => (<span key={role} className="tech-pill whitespace-nowrap">{role}</span>))}
        </MarqueeRow>
        <MarqueeRow speed={35} direction="right" pauseOnHover={true}>
          {talentRoles.slice(13).map((role) => (<span key={role} className="tech-pill whitespace-nowrap">{role}</span>))}
        </MarqueeRow>
      </section>

      <ContourDivider label="Why Choose Us" />

      <section ref={advantagesRef} className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <h2 className="adv-heading font-display text-3xl md:text-4xl text-[var(--ice)] mb-4 text-center">Global Delivery. Local Expertise.</h2>
        <p className="adv-desc text-[var(--slate)] max-w-2xl mx-auto mb-12 text-center leading-relaxed">Whether your organization is expanding in North America, Canada, or India, our global delivery model enables us to provide the right technology expertise exactly when you need it.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {advantages.map((adv) => (
            <div key={adv.title} className="adv-card glass-card flex items-start gap-4 p-5">
              <span className="text-2xl flex-shrink-0">{adv.icon}</span>
              <div>
                <h3 className="font-display text-base text-[var(--ice)] mb-1">{adv.title}</h3>
                <p className="text-[var(--slate)] text-sm leading-relaxed">{adv.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={ctaRef} className="border-t border-white/5 bg-gradient-to-b from-transparent to-[var(--navy)]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-center">
          <h2 data-cta className="font-display text-3xl md:text-5xl text-[var(--ice)] mb-6">Build Your Dream Technology Team</h2>
          <p data-cta className="text-[var(--slate)] max-w-xl mx-auto mb-4 leading-relaxed">From SAP specialists and AI engineers to full-stack developers and cloud architects — we connect you with the talent that drives transformation.</p>
          <p data-cta className="text-[var(--slate)] max-w-xl mx-auto mb-10 text-sm">🇺🇸 United States | 🇨🇦 Canada | 🇮🇳 India</p>
          <div data-cta className="flex flex-wrap gap-4 justify-center">
            <MagneticButton strength={0.3}><Link to="/contact" className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors">Hire Top Technology Talent</Link></MagneticButton>
            <MagneticButton strength={0.3}><Link to="/services" className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm border border-white/15 text-[var(--ice)] hover:border-[var(--blue-electric)] hover:text-[var(--blue-electric)] transition-colors">Explore Our Services</Link></MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}
