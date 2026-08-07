import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ContourDivider from '../components/ContourDivider.jsx'
import TextReveal from '../components/TextReveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'

gsap.registerPlugin(ScrollTrigger)

const industries = [
  { icon: '🏭', name: 'Manufacturing', description: 'Smart Manufacturing, Industry 4.0, Supply Chain Optimization, Asset Management, SAP Manufacturing, Predictive Maintenance' },
  { icon: '🏥', name: 'Healthcare & Life Sciences', description: 'Digital Healthcare, Electronic Health Records (EHR), AI Healthcare Solutions, Regulatory Compliance, Patient Experience' },
  { icon: '🏦', name: 'Banking & Financial Services', description: 'Digital Banking, Core Banking Modernization, AI Risk Management, Fraud Detection, Financial Analytics' },
  { icon: '🛒', name: 'Retail & Consumer Goods', description: 'Omnichannel Commerce, Inventory Optimization, Customer Experience, Demand Forecasting, SAP Retail Solutions' },
  { icon: '🛡️', name: 'Insurance', description: 'Claims Automation, Digital Policy Management, AI Underwriting, Customer Engagement Solutions' },
  { icon: '⚡', name: 'Energy & Utilities', description: 'Asset Performance Management, Field Service Optimization, SAP Plant Maintenance, Smart Grid Solutions' },
  { icon: '📡', name: 'Telecommunications', description: 'Network Operations, Customer Experience Platforms, Enterprise Applications, Digital Services' },
  { icon: '🚛', name: 'Logistics & Supply Chain', description: 'Warehouse Management, Transportation Management, Route Optimization, Supply Chain Visibility' },
  { icon: '🚗', name: 'Automotive', description: 'Connected Manufacturing, Supply Chain Excellence, ERP Transformation, Quality Management' },
  { icon: '💊', name: 'Pharmaceutical & Biotechnology', description: 'Clinical Research, Manufacturing Compliance, Quality Assurance, Digital Innovation' },
  { icon: '🏛️', name: 'Government & Public Sector', description: 'Digital Citizen Services, Secure Enterprise Systems, Cloud Modernization, Public Sector Transformation' },
  { icon: '🎓', name: 'Education', description: 'Digital Learning Platforms, Student Information Systems, Cloud Adoption, Data Analytics' },
  { icon: '💻', name: 'Technology & Software', description: 'Product Engineering, Cloud-Native Development, AI Product Innovation, DevOps Automation' },
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

export default function Industries() {
  const heroRef = useRef(null)
  const gridRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.ind-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('.ind-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  useReveal(gridRef, '.industry-card',
    { opacity: 0, y: 50, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.06, ease: 'power3.out' }
  )

  useReveal(ctaRef, '[data-cta]',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
  )

  return (
    <div>
      <section ref={heroRef} className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28">
        <p className="ind-subtitle font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">Industries We Serve</p>
        <TextReveal as="h1" className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] max-w-4xl leading-tight" delay={0.1} stagger={0.05}>
          Empowering Businesses Across Every Industry
        </TextReveal>
        <p className="ind-desc mt-8 max-w-3xl text-[var(--slate)] text-lg leading-relaxed">
          At Altitude Kinetic Solutions, we understand that every industry has unique operational challenges and technology requirements. Our consultants and recruitment specialists bring domain expertise to deliver solutions that drive innovation, efficiency, and sustainable growth.
        </p>
      </section>

      <ContourDivider label="Industry Expertise" />

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.name} className="industry-card glass-card">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{ind.icon}</span>
                <h3 className="font-display text-xl text-[var(--ice)]">{ind.name}</h3>
              </div>
              <p className="text-[var(--slate)] text-sm leading-relaxed">{ind.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={ctaRef} className="border-t border-white/5 bg-gradient-to-b from-transparent to-[var(--navy)]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-center">
          <h2 data-cta className="font-display text-3xl md:text-5xl text-[var(--ice)] mb-6">Industry-Specific Solutions for Your Business</h2>
          <p data-cta className="text-[var(--slate)] max-w-xl mx-auto mb-10">Every industry has unique challenges. Let us help you navigate your specific landscape.</p>
          <div data-cta className="flex flex-wrap gap-4 justify-center">
            <MagneticButton strength={0.3}>
              <Link to="/contact" className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors">Schedule a Consultation</Link>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <Link to="/services" className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm border border-white/15 text-[var(--ice)] hover:border-[var(--blue-electric)] hover:text-[var(--blue-electric)] transition-colors">Explore Our Services</Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}
