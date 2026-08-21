import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ContourDivider from '../components/ContourDivider.jsx'
import TextReveal from '../components/TextReveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import aiTechImg1 from '../assets/AItech services section1.png'
import aiTechImg2 from '../assets/AItech services section2.png'

gsap.registerPlugin(ScrollTrigger)

const sapCapabilities = ['SAP S/4HANA Implementation & Migration','SAP ECC to SAP S/4HANA Transformation','SAP ABAP Development','SAP Fiori & UI5','SAP BTP (Business Technology Platform)','SAP Integration Suite (CPI)','SAP Analytics Cloud','SAP BW/4HANA','SAP SuccessFactors','SAP Ariba','SAP FI/CO','SAP MM','SAP SD','SAP PP','SAP PM','SAP EWM','SAP TM','SAP CRM','SAP Security & GRC','SAP Basis Administration','SAP Testing & Support','SAP Managed Services']
const sapOutcomes = ['Digital Enterprise Transformation','Business Process Optimization','Intelligent Automation','Cloud Migration & Modernization','Enterprise System Integration','Performance Optimization','Ongoing SAP Support & Maintenance','Reduced Operational Costs','Increased Productivity','Improved Business Agility']
const aiSolutions = ['Generative AI Consulting','AI Strategy & Digital Roadmaps','Enterprise AI Integration','AI Copilot Development','Conversational AI & Intelligent Chatbots','Large Language Model (LLM) Solutions','Intelligent Document Processing','Machine Learning','Predictive Analytics','Computer Vision','Natural Language Processing (NLP)','AI for Customer Experience','AI for HR & Talent Acquisition','AI-Powered Knowledge Management','Workflow Automation','Custom AI Application Development']
const itConsultingServices = ['Digital Transformation Strategy','Enterprise Architecture','Cloud Consulting','Infrastructure Modernization','Application Development','API & System Integration','DevOps & CI/CD','Cybersecurity Consulting','Data Engineering','Data Analytics','Business Intelligence','ERP Consulting','Managed IT Services','Technology Advisory','IT Project Management']
const recruitmentSAP = ['SAP Architects','SAP Functional Consultants','SAP Technical Consultants','SAP ABAP Developers','SAP BTP Consultants','SAP Security & GRC','SAP Basis','SAP Project Managers','SAP Integration Specialists']
const recruitmentAI = ['AI Engineers','Machine Learning Engineers','Data Scientists','Data Engineers','Prompt Engineers','MLOps Engineers','AI Researchers']
const recruitmentCloud = ['AWS','Microsoft Azure','Google Cloud Platform','Kubernetes','Docker','Terraform','DevOps Engineers','Site Reliability Engineers']
const recruitmentDev = ['Java','Spring Boot','.NET','Python','React','Angular','Node.js','Full Stack Developers','Mobile Developers','QA Automation Engineers']
const recruitmentEnterprise = ['Salesforce','ServiceNow','Oracle','Workday','Microsoft Dynamics 365','Power Platform','Snowflake','Databricks']
const aiRecruitmentBenefits = ['Identify top candidates faster','Reduce hiring time','Improve candidate matching','Reduce hiring bias','Increase hiring accuracy','Access passive talent','Improve quality of hire','Scale recruitment globally']

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

function AnimatedPillGroup({ items }) {
  const groupRef = useRef(null)
  useEffect(() => {
    if (!groupRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const pills = groupRef.current.querySelectorAll('.tech-pill')
    if (pills.length === 0) return
    const ctx = gsap.context(() => {
      gsap.fromTo(pills, { opacity: 0, scale: 0.7, y: 15 }, {
        opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.03, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: groupRef.current, start: 'top 88%', toggleActions: 'play none none none' },
      })
    }, groupRef.current)
    return () => ctx.revert()
  }, [])
  return (
    <div ref={groupRef} className="flex flex-wrap gap-2">
      {items.map((item) => (<span key={item} className="tech-pill">{item}</span>))}
    </div>
  )
}

function ServiceSection({ icon, title, description, extraDesc, outcomesTitle, outcomesItems, pillsTitle, pillsItems, image, image2 }) {
  const sectionRef = useRef(null)

  useReveal(sectionRef, '.section-title',
    { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  )
  useReveal(sectionRef, '.section-desc',
    { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
  )
  useReveal(sectionRef, '.outcome-check',
    { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out' }
  )
  useReveal(sectionRef, '.service-section-img',
    { opacity: 0, scale: 0.92, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' }
  )

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div>
          <div className="service-icon">{icon}</div>
          <h2 className="section-title font-display text-3xl md:text-4xl text-[var(--ice)] mb-4">{title}</h2>
          <p className="section-desc text-[var(--slate)] leading-relaxed mb-6">{description}</p>
          {extraDesc && <p className="section-desc text-[var(--slate)] leading-relaxed">{extraDesc}</p>}
          {image && (
            <div className="service-section-img mt-8 relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[var(--blue-electric)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
              <img src={image} alt={title} className="relative w-full rounded-xl border border-white/10 shadow-lg shadow-[var(--blue-electric)]/5" />
            </div>
          )}
          {outcomesTitle && outcomesItems && (
            <>
              <h3 className="font-display text-lg text-[var(--ice)] mb-4 mt-6">{outcomesTitle}</h3>
              <div className="grid gap-2">
                {outcomesItems.map((item) => (
                  <div key={item} className="outcome-check flex items-center gap-3">
                    <span className="text-[var(--blue-electric)] text-sm">✦</span>
                    <span className="text-[var(--slate)] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          {image2 && (
            <div className="service-section-img mb-8 relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-bl from-[var(--blue-electric)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
              <img src={image2} alt={`${title} visual`} className="relative w-full rounded-xl border border-white/10 shadow-lg shadow-[var(--blue-electric)]/5" />
            </div>
          )}
          {pillsTitle && <h3 className="font-display text-lg text-[var(--ice)] mb-4">{pillsTitle}</h3>}
          {pillsItems && <AnimatedPillGroup items={pillsItems} />}
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  const heroRef = useRef(null)
  const recruitRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('.services-hero-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  useReveal(recruitRef, '.recruit-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
  useReveal(recruitRef, '.recruit-desc', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' })
  useReveal(recruitRef, '.recruit-card', { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' })
  useReveal(recruitRef, '.why-ai-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
  useReveal(recruitRef, '.ai-benefit', { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' })

  useReveal(ctaRef, '[data-cta]', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' })

  return (
    <div>
      <section ref={heroRef} className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28">
        <p className="services-subtitle font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">Our Services</p>
        <TextReveal as="h1" className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] max-w-4xl leading-tight" delay={0.1} stagger={0.04}>
          End-to-End Technology Solutions for the Modern Enterprise
        </TextReveal>
        <p className="services-hero-desc mt-8 max-w-3xl text-[var(--slate)] text-lg leading-relaxed">
          From SAP transformation and AI-driven innovation to enterprise IT consulting and AI-powered recruitment, we deliver comprehensive solutions that drive operational excellence and business growth.
        </p>
      </section>

      <ContourDivider label="SAP Consulting" />
      <ServiceSection icon="⚙️" title="Transform Your Enterprise with Intelligent SAP Solutions" description="We help organizations modernize, optimize, and future-proof their SAP ecosystem by delivering end-to-end consulting, implementation, migration, integration, and managed services." outcomesTitle="Business Outcomes" outcomesItems={sapOutcomes} pillsTitle="SAP Capabilities" pillsItems={sapCapabilities} />

      <ContourDivider label="AI & Automation" />
      <ServiceSection icon="🤖" title="Building Intelligent Enterprises with AI" description="Artificial Intelligence is transforming every industry. We help organizations leverage AI to automate business processes, improve decision-making, enhance customer experiences, and unlock new growth opportunities." extraDesc="Our AI consulting services combine strategy, innovation, and implementation to deliver measurable business outcomes." pillsTitle="AI Solutions" pillsItems={aiSolutions} image={aiTechImg1} image2={aiTechImg2} />

      <ContourDivider label="IT Consulting" />
      <ServiceSection icon="💡" title="Technology Solutions Designed for Modern Businesses" description="We help organizations build secure, scalable, and future-ready digital ecosystems that accelerate innovation and business growth." pillsTitle="Consulting Services" pillsItems={itConsultingServices} />

      <ContourDivider label="Technology Recruitment" />

      <section ref={recruitRef} className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="mb-12">
          <div className="service-icon">🎯</div>
          <h2 className="recruit-title font-display text-3xl md:text-4xl text-[var(--ice)] mb-4">Connecting Businesses with Exceptional Technology Talent</h2>
          <p className="recruit-desc text-[var(--slate)] leading-relaxed max-w-3xl mb-4">Finding the right technology professionals requires more than traditional recruitment. Our AI-powered recruitment model combines intelligent sourcing, advanced screening, and experienced recruiters.</p>
          <p className="recruit-desc text-[var(--slate)] leading-relaxed max-w-3xl">We support organizations with Contract, Contract-to-Hire, Permanent Placement, Executive Search, and Project-Based Staffing across the United States, Canada, and India.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <div className="recruit-card glass-card"><h3 className="font-display text-lg text-[var(--blue-electric)] mb-4">SAP</h3><AnimatedPillGroup items={recruitmentSAP} /></div>
          <div className="recruit-card glass-card"><h3 className="font-display text-lg text-[var(--blue-electric)] mb-4">AI & Data</h3><AnimatedPillGroup items={recruitmentAI} /></div>
          <div className="recruit-card glass-card"><h3 className="font-display text-lg text-[var(--blue-electric)] mb-4">Cloud & Infrastructure</h3><AnimatedPillGroup items={recruitmentCloud} /></div>
          <div className="recruit-card glass-card"><h3 className="font-display text-lg text-[var(--blue-electric)] mb-4">Software Engineering</h3><AnimatedPillGroup items={recruitmentDev} /></div>
          <div className="recruit-card glass-card md:col-span-2 lg:col-span-2"><h3 className="font-display text-lg text-[var(--blue-electric)] mb-4">Enterprise Technologies</h3><AnimatedPillGroup items={recruitmentEnterprise} /></div>
        </div>
        <div className="why-ai-card glass-card max-w-3xl">
          <h3 className="font-display text-xl text-[var(--ice)] mb-2">Why AI Recruitment?</h3>
          <p className="text-[var(--slate)] text-sm leading-relaxed mb-4">Traditional recruiting relies on resumes. We combine human expertise with AI-powered intelligence.</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {aiRecruitmentBenefits.map((item) => (<div key={item} className="ai-benefit flex items-center gap-2"><span className="text-[var(--blue-electric)] text-sm">✦</span><span className="text-[var(--slate)] text-sm">{item}</span></div>))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="border-t border-white/5 bg-gradient-to-b from-transparent to-[var(--navy)]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-center">
          <h2 data-cta className="font-display text-3xl md:text-5xl text-[var(--ice)] mb-6">Ready to Transform Your Business?</h2>
          <p data-cta className="text-[var(--slate)] max-w-xl mx-auto mb-10">From strategy and consulting to implementation and AI-powered recruitment, we deliver the expertise that helps organizations transform, compete, and lead.</p>
          <div data-cta><MagneticButton strength={0.3}><Link to="/contact" className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors">Schedule a Consultation</Link></MagneticButton></div>
        </div>
      </section>
    </div>
  )
}
