import { Link } from 'react-router-dom'
import ContourDivider from '../components/ContourDivider.jsx'

const talentRoles = [
  'SAP Consultants', 'SAP Architects', 'SAP Developers', 'AI Engineers',
  'Machine Learning Engineers', 'Data Scientists', 'Data Engineers',
  'Cloud Engineers', 'DevOps Engineers', 'Cybersecurity Specialists',
  'ServiceNow Consultants', 'Salesforce Consultants', 'Oracle Consultants',
  'Microsoft Dynamics Consultants', 'Java Developers', 'Python Developers',
  '.NET Developers', 'React Developers', 'Full Stack Engineers',
  'Mobile Application Developers', 'QA Automation Engineers', 'Business Analysts',
  'Project Managers', 'Scrum Masters', 'Solution Architects', 'Enterprise Architects',
]

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

export default function Talent() {
  return (
    <div>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28">
        <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">
          AI-Powered Global Talent Solutions
        </p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] max-w-4xl leading-tight">
          Connecting Businesses with World-Class Technology Talent
        </h1>
        <p className="mt-8 max-w-3xl text-[var(--slate)] text-lg leading-relaxed">
          At Altitude Kinetic Solutions, we combine experienced recruiters with AI-driven sourcing 
          and intelligent screening to deliver highly qualified professionals for contract, 
          contract-to-hire, and permanent positions.
        </p>
      </section>

      {/* GLOBAL HIRING */}
      <div className="pb-20">
        <ContourDivider label="We Hire Across" />
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-card text-center">
            <span className="flag-badge">🇺🇸</span>
            <h3 className="font-display text-2xl text-[var(--ice)] mt-4 mb-3">United States</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Supporting Fortune 500 companies, system integrators, implementation partners, and 
              fast-growing startups with specialized technology professionals.
            </p>
          </div>
          <div className="glass-card text-center">
            <span className="flag-badge">🇨🇦</span>
            <h3 className="font-display text-2xl text-[var(--ice)] mt-4 mb-3">Canada</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Providing enterprise IT consulting and staffing solutions across major Canadian industries, 
              including banking, healthcare, manufacturing, and public sector organizations.
            </p>
          </div>
          <div className="glass-card text-center">
            <span className="flag-badge">🇮🇳</span>
            <h3 className="font-display text-2xl text-[var(--ice)] mt-4 mb-3">India</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Helping global capability centers (GCCs), multinational corporations, product companies, 
              consulting firms, and startups build high-performing technology teams.
            </p>
          </div>
        </div>
      </section>

      {/* TALENT ROLES */}
      <div className="pb-20">
        <ContourDivider label="Talent We Deliver" />
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-4">
          Highly Skilled Professionals Across Multiple Domains
        </h2>
        <p className="text-[var(--slate)] max-w-2xl mb-10 leading-relaxed">
          We recruit highly skilled professionals across multiple technology domains, including:
        </p>
        <div className="flex flex-wrap gap-2">
          {talentRoles.map((role) => (
            <span key={role} className="tech-pill">{role}</span>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE AKS */}
      <div className="pb-20">
        <ContourDivider label="Why Choose Altitude Kinetic Solutions?" />
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-4 text-center">
          Global Delivery. Local Expertise.
        </h2>
        <p className="text-[var(--slate)] max-w-2xl mx-auto mb-12 text-center leading-relaxed">
          Whether your organization is expanding in North America, Canada, or India, our global 
          delivery model enables us to provide the right technology expertise and talent exactly 
          when you need it.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {advantages.map((adv) => (
            <div key={adv.title} className="glass-card flex items-start gap-4 p-5">
              <span className="text-2xl flex-shrink-0">{adv.icon}</span>
              <div>
                <h3 className="font-display text-base text-[var(--ice)] mb-1">{adv.title}</h3>
                <p className="text-[var(--slate)] text-sm leading-relaxed">{adv.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-gradient-to-b from-transparent to-[var(--navy)]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[var(--ice)] mb-6">
            Build Your Dream Technology Team
          </h2>
          <p className="text-[var(--slate)] max-w-xl mx-auto mb-4 leading-relaxed">
            From SAP specialists and AI engineers to full-stack developers and cloud architects — 
            we connect you with the talent that drives transformation.
          </p>
          <p className="text-[var(--slate)] max-w-xl mx-auto mb-10 text-sm">
            🇺🇸 United States | 🇨🇦 Canada | 🇮🇳 India
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors"
            >
              Hire Top Technology Talent
            </Link>
            <Link
              to="/services"
              className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm border border-white/15 text-[var(--ice)] hover:border-[var(--blue-electric)] hover:text-[var(--blue-electric)] transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
