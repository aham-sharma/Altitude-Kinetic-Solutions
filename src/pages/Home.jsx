import { Link } from 'react-router-dom'
import AscentLine from '../components/AscentLine.jsx'
import ContourDivider from '../components/ContourDivider.jsx'

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

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="hero-glow" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="reveal font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">
            Accelerating Digital Transformation with SAP, AI & Elite Technology Talent
          </p>
          <h1
            className="reveal font-display font-semibold text-[11vw] leading-[0.95] md:text-7xl lg:text-8xl text-[var(--ice)] max-w-5xl"
            style={{ animationDelay: '0.1s' }}
          >
            Transform.<br />Innovate.<br />Scale.
          </h1>
          <p
            className="reveal mt-6 font-display text-lg md:text-xl text-[var(--blue-electric)]/90 max-w-3xl leading-relaxed"
            style={{ animationDelay: '0.2s' }}
          >
            Empowering Businesses with SAP, AI, Digital Transformation & Global Technology Talent.
          </p>
          <p
            className="reveal mt-4 max-w-2xl text-[var(--slate)] text-base leading-relaxed"
            style={{ animationDelay: '0.3s' }}
          >
            Your trusted global partner for SAP Transformation, Artificial Intelligence, Enterprise IT Consulting, 
            Digital Innovation, and AI-Powered Technology Recruitment—helping organizations build smarter businesses 
            and stronger teams.
          </p>

          {/* CTA Buttons */}
          <div className="reveal mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/contact"
              className="font-mono text-[13px] tracking-widest uppercase px-7 py-3.5 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              to="/talent"
              className="font-mono text-[13px] tracking-widest uppercase px-7 py-3.5 rounded-sm border border-white/15 text-[var(--ice)] hover:border-[var(--blue-electric)] hover:text-[var(--blue-electric)] transition-colors"
            >
              Hire Top Technology Talent
            </Link>
            <Link
              to="/services"
              className="font-mono text-[13px] tracking-widest uppercase px-7 py-3.5 rounded-sm border border-white/10 text-[var(--slate)] hover:border-[var(--blue-electric)] hover:text-[var(--blue-electric)] transition-colors"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-2" style={{ animationDelay: '0.55s' }}>
            {trustIndicators.map((item) => (
              <span key={item} className="trust-item">{item}</span>
            ))}
          </div>
        </div>
        <AscentLine className="w-full h-40 md:h-56 opacity-90" />
      </section>

      <div className="pb-20">
        <ContourDivider label="Our Services" />
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-4 max-w-2xl">
          Comprehensive Technology Solutions
        </h2>
        <p className="text-[var(--slate)] max-w-2xl mb-12 leading-relaxed">
          From SAP S/4HANA transformations and AI-driven automation to cloud modernization 
          and specialized IT staffing, we deliver scalable solutions that drive operational 
          excellence and create lasting business value.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.link}
              className="glass-card group cursor-pointer block"
            >
              <div className="service-icon">{s.icon}</div>
              <h3 className="font-display text-xl text-[var(--ice)] mb-3 group-hover:text-[var(--blue-electric)] transition-colors">
                {s.title}
              </h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed">{s.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="pb-20">
        <ContourDivider label="Industries We Serve" />
      </div>

      {/* INDUSTRIES PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-4">
          Industry Expertise That Drives Transformation
        </h2>
        <p className="text-[var(--slate)] max-w-2xl mb-12 leading-relaxed">
          Every industry has unique challenges, regulatory requirements, and technology demands. Our consultants 
          combine deep technical expertise with industry knowledge to deliver tailored solutions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 stagger-children">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              to="/industries"
              className="glass-card text-center cursor-pointer p-5 block"
            >
              <span className="text-3xl block mb-2">{ind.icon}</span>
              <span className="text-[var(--ice)] text-sm font-medium">{ind.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="pb-20">
        <ContourDivider label="Why Choose Us" />
      </div>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-4">
              Delivering Technology Excellence with Measurable Business Impact
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-8">
              Whether your organization is expanding in North America, Canada, or India, our global 
              delivery model enables us to provide the right technology expertise and talent exactly 
              when you need it.
            </p>
          </div>
          <div className="grid gap-3">
            {advantages.map((adv) => (
              <div key={adv} className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.01]">
                <span className="text-[var(--blue-electric)] text-lg mt-0.5">✦</span>
                <span className="text-[var(--ice)]/90 text-sm">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL DELIVERY */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-12 text-center">
            Delivering Excellence Across Borders
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card text-center">
              <span className="flag-badge">🇺🇸</span>
              <h3 className="font-display text-xl text-[var(--ice)] mt-4 mb-2">United States</h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed">
                Enterprise IT Consulting, SAP Experts, AI Specialists, Contract & Permanent Staffing
              </p>
            </div>
            <div className="glass-card text-center">
              <span className="flag-badge">🇨🇦</span>
              <h3 className="font-display text-xl text-[var(--ice)] mt-4 mb-2">Canada</h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed">
                Digital Transformation, ERP Consulting, Technology Recruitment, Cloud & AI Talent
              </p>
            </div>
            <div className="glass-card text-center">
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
      <section className="border-t border-white/5 bg-gradient-to-b from-transparent to-[var(--navy)]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[var(--ice)] mb-6">
            Your Partner for Technology Transformation<br />and Global Talent
          </h2>
          <p className="text-[var(--slate)] max-w-2xl mx-auto mb-4 leading-relaxed">
            Whether you're implementing SAP S/4HANA, adopting Artificial Intelligence, modernizing enterprise 
            systems, or building high-performing technology teams, Altitude Kinetic Solutions is your trusted 
            partner for innovation and growth.
          </p>
          <p className="text-[var(--slate)] max-w-2xl mx-auto mb-10 text-sm">
            Serving Clients Across: 🇺🇸 United States | 🇨🇦 Canada | 🇮🇳 India
          </p>
          <p className="font-display text-xl gradient-text font-semibold mb-10">
            Transform Business. Empower People. Accelerate Success.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/talent"
              className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm border border-white/15 text-[var(--ice)] hover:border-[var(--blue-electric)] hover:text-[var(--blue-electric)] transition-colors"
            >
              Hire Top Technology Talent
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
