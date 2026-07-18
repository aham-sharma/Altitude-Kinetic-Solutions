import { Link } from 'react-router-dom'
import ContourDivider from '../components/ContourDivider.jsx'

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
  {
    title: 'SAP Consulting & Digital Transformation',
    body: 'Transform your enterprise with intelligent SAP solutions — from S/4HANA migration and ABAP development to BTP, Fiori, and managed SAP services.',
    link: '/services',
  },
  {
    title: 'AI & Intelligent Automation',
    body: 'Building intelligent enterprises with Generative AI, machine learning, predictive analytics, conversational AI, and custom AI application development.',
    link: '/services',
  },
  {
    title: 'Enterprise IT Consulting',
    body: 'Digital transformation strategy, cloud consulting, enterprise architecture, application development, DevOps, cybersecurity, and managed IT services.',
    link: '/services',
  },
  {
    title: 'AI-Powered Technology Recruitment',
    body: 'Connecting businesses with exceptional technology talent through intelligent sourcing, advanced screening, and experienced recruiters.',
    link: '/talent',
  },
]

const outcomes = [
  'Digital Enterprise Transformation',
  'Business Process Optimization',
  'Intelligent Automation',
  'Cloud Migration & Modernization',
  'Enterprise System Integration',
  'Reduced Operational Costs',
  'Increased Productivity',
  'Improved Business Agility',
]

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28">
        <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">
          About Altitude Kinetic Solutions
        </p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] max-w-4xl leading-tight">
          Empowering Businesses Through Technology, Innovation & Talent
        </h1>
        <p className="mt-8 max-w-3xl text-[var(--slate)] text-lg leading-relaxed">
          At Altitude Kinetic Solutions, we help organizations accelerate digital transformation by combining 
          deep technology expertise with AI-driven innovation and world-class talent solutions. We partner with 
          businesses to modernize enterprise systems, optimize operations, and build high-performing teams that 
          drive long-term success.
        </p>
        <p className="mt-4 max-w-3xl text-[var(--slate)] text-base leading-relaxed">
          As a trusted consulting and technology partner, we specialize in SAP transformation, Artificial Intelligence, 
          cloud modernization, enterprise application development, IT consulting, and strategic technology recruitment. 
          Our client-centric approach enables organizations to navigate complex digital challenges with confidence while 
          maximizing business value and operational efficiency.
        </p>
        <p className="mt-4 max-w-3xl text-[var(--slate)] text-base leading-relaxed">
          Whether you're implementing SAP S/4HANA, adopting Generative AI, migrating to the cloud, or scaling your 
          workforce with specialized technology professionals, Altitude Kinetic Solutions delivers tailored solutions 
          that align with your business goals.
        </p>
      </section>

      <div className="pb-20">
        <ContourDivider label="Mission & Vision" />
      </div>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24 grid gap-6 md:grid-cols-2">
        {coreValues.map((v) => (
          <div key={v.title} className="glass-card">
            <div className="service-icon">{v.icon}</div>
            <h3 className="font-display text-2xl text-[var(--ice)] mb-4">{v.title}</h3>
            <p className="text-[var(--slate)] leading-relaxed">{v.body}</p>
          </div>
        ))}
      </section>

      <div className="pb-20">
        <ContourDivider label="What We Do" />
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-12 max-w-2xl">
          Comprehensive Solutions for the Modern Enterprise
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceHighlights.map((s) => (
            <Link key={s.title} to={s.link} className="glass-card group block">
              <h3 className="font-display text-xl text-[var(--ice)] mb-3 group-hover:text-[var(--blue-electric)] transition-colors">
                {s.title}
              </h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed">{s.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="pb-20">
        <ContourDivider label="Business Outcomes" />
      </div>

      {/* OUTCOMES */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-28 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-6">
            Measurable Results, Real Business Impact
          </h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            We align technology with your business objectives to maximize ROI. Our solutions deliver
            tangible outcomes that drive competitive advantage and sustainable growth.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block font-mono text-[13px] tracking-widest uppercase px-7 py-3.5 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          {outcomes.map((item) => (
            <div key={item} className="flex items-center gap-4 border-b border-white/10 pb-4">
              <span className="text-[var(--blue-electric)] text-lg">✦</span>
              <span className="text-[var(--ice)]/90">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
