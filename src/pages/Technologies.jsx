import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ContourDivider from '../components/ContourDivider.jsx'
import TextReveal from '../components/TextReveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'

gsap.registerPlugin(ScrollTrigger)

const erpApplications = ['SAP S/4HANA','SAP ECC','SAP BTP','SAP Fiori','SAP Integration Suite','SAP Analytics Cloud','SAP BW/4HANA','Oracle ERP','Oracle Cloud','Microsoft Dynamics 365','Salesforce','ServiceNow','Workday']
const sapFunctional = ['SAP FI/CO','SAP MM','SAP SD','SAP PP','SAP PM','SAP QM','SAP WM','SAP EWM','SAP TM','SAP SuccessFactors','SAP Ariba','SAP IBP','SAP APO','SAP GRC','SAP CRM']
const sapTechnical = ['SAP ABAP','SAP BTP Development','SAP CAPM','RAP Development','SAP Integration Suite','SAP CPI','SAP Basis','SAP Security','SAP HANA','SAP Fiori/UI5','OData Services','SAP Workflow','SAP PI/PO']
const aiData = ['Generative AI','OpenAI & LLM Integration','Microsoft Copilot','AI Chatbots','Machine Learning','Deep Learning','NLP (Natural Language Processing)','Computer Vision','Prompt Engineering','AI Automation','Predictive Analytics','Data Engineering','Data Science','MLOps']
const cloudPlatforms = ['Microsoft Azure','Amazon Web Services (AWS)','Google Cloud Platform (GCP)','Azure DevOps','Kubernetes','Docker','Terraform','OpenShift']
const softwareDev = ['Java','Spring Boot','.NET','C#','Python','Node.js','React','Angular','Vue.js','JavaScript','TypeScript','PHP','Go','Kotlin','Swift']
const dataAnalytics = ['Power BI','Tableau','Snowflake','Databricks','SQL Server','PostgreSQL','MongoDB','Apache Spark','Hadoop']
const devops = ['Jenkins','GitHub Actions','GitLab CI/CD','Ansible','Terraform','Docker','Kubernetes','Azure DevOps']

const techSections = [
  { title: 'ERP & Enterprise Applications', icon: '🏢', items: erpApplications },
  { title: 'SAP Functional Modules', icon: '📋', items: sapFunctional },
  { title: 'SAP Technical Expertise', icon: '🔧', items: sapTechnical },
  { title: 'Artificial Intelligence & Data', icon: '🧠', items: aiData },
  { title: 'Cloud Platforms', icon: '☁️', items: cloudPlatforms },
  { title: 'Software Development', icon: '💻', items: softwareDev },
  { title: 'Data & Analytics', icon: '📊', items: dataAnalytics },
  { title: 'DevOps & Automation', icon: '🔄', items: devops },
]

function TechCard({ section, index }) {
  const cardRef = useRef(null)
  useEffect(() => {
    if (!cardRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current, { opacity: 0, y: 50, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 90%', toggleActions: 'play none none none' },
      })
      const pills = cardRef.current.querySelectorAll('.tech-pill')
      gsap.fromTo(pills, { opacity: 0, scale: 0.6, y: 10 }, {
        opacity: 1, scale: 1, y: 0, duration: 0.35, stagger: 0.025, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: cardRef.current, start: 'top 90%', toggleActions: 'play none none none' },
      })
    }, cardRef.current)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} className="glass-card">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{section.icon}</span>
        <h3 className="font-display text-xl text-[var(--ice)]">{section.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {section.items.map((item) => (<span key={item} className="tech-pill">{item}</span>))}
      </div>
    </div>
  )
}

export default function Technologies() {
  const heroRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('.tech-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!ctaRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      const elements = ctaRef.current.querySelectorAll('[data-cta]')
      gsap.fromTo(elements, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      })
    }, ctaRef.current)
    return () => ctx.revert()
  }, [])

  return (
    <div>
      <section ref={heroRef} className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28">
        <p className="tech-subtitle font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">Technology Expertise</p>
        <TextReveal as="h1" className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] max-w-4xl leading-tight" delay={0.1} stagger={0.05}>
          Enterprise Technologies We Support
        </TextReveal>
        <p className="tech-desc mt-8 max-w-3xl text-[var(--slate)] text-lg leading-relaxed">Our consultants specialize in today's most in-demand enterprise technologies.</p>
      </section>

      <ContourDivider label="Technology Stack" />

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {techSections.map((section, i) => (<TechCard key={section.title} section={section} index={i} />))}
        </div>
      </section>

      <section ref={ctaRef} className="border-t border-white/5 bg-gradient-to-b from-transparent to-[var(--navy)]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-center">
          <h2 data-cta className="font-display text-3xl md:text-5xl text-[var(--ice)] mb-6">Need Expertise in a Specific Technology?</h2>
          <p data-cta className="text-[var(--slate)] max-w-xl mx-auto mb-10">Our consultants and recruiters match the right technology expertise to your business needs.</p>
          <div data-cta className="flex flex-wrap gap-4 justify-center">
            <MagneticButton strength={0.3}><Link to="/contact" className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors">Schedule a Consultation</Link></MagneticButton>
            <MagneticButton strength={0.3}><Link to="/talent" className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm border border-white/15 text-[var(--ice)] hover:border-[var(--blue-electric)] hover:text-[var(--blue-electric)] transition-colors">Hire Technology Talent</Link></MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}
