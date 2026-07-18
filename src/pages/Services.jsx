import { Link } from 'react-router-dom'
import ContourDivider from '../components/ContourDivider.jsx'

const sapCapabilities = [
  'SAP S/4HANA Implementation & Migration',
  'SAP ECC to SAP S/4HANA Transformation',
  'SAP ABAP Development',
  'SAP Fiori & UI5',
  'SAP BTP (Business Technology Platform)',
  'SAP Integration Suite (CPI)',
  'SAP Analytics Cloud',
  'SAP BW/4HANA',
  'SAP SuccessFactors',
  'SAP Ariba',
  'SAP FI/CO',
  'SAP MM',
  'SAP SD',
  'SAP PP',
  'SAP PM',
  'SAP EWM',
  'SAP TM',
  'SAP CRM',
  'SAP Security & GRC',
  'SAP Basis Administration',
  'SAP Testing & Support',
  'SAP Managed Services',
]

const sapOutcomes = [
  'Digital Enterprise Transformation',
  'Business Process Optimization',
  'Intelligent Automation',
  'Cloud Migration & Modernization',
  'Enterprise System Integration',
  'Performance Optimization',
  'Ongoing SAP Support & Maintenance',
  'Reduced Operational Costs',
  'Increased Productivity',
  'Improved Business Agility',
]

const aiSolutions = [
  'Generative AI Consulting',
  'AI Strategy & Digital Roadmaps',
  'Enterprise AI Integration',
  'AI Copilot Development',
  'Conversational AI & Intelligent Chatbots',
  'Large Language Model (LLM) Solutions',
  'Intelligent Document Processing',
  'Machine Learning',
  'Predictive Analytics',
  'Computer Vision',
  'Natural Language Processing (NLP)',
  'AI for Customer Experience',
  'AI for HR & Talent Acquisition',
  'AI-Powered Knowledge Management',
  'Workflow Automation',
  'Custom AI Application Development',
]

const itConsultingServices = [
  'Digital Transformation Strategy',
  'Enterprise Architecture',
  'Cloud Consulting',
  'Infrastructure Modernization',
  'Application Development',
  'API & System Integration',
  'DevOps & CI/CD',
  'Cybersecurity Consulting',
  'Data Engineering',
  'Data Analytics',
  'Business Intelligence',
  'ERP Consulting',
  'Managed IT Services',
  'Technology Advisory',
  'IT Project Management',
]

const recruitmentSAP = [
  'SAP Architects', 'SAP Functional Consultants', 'SAP Technical Consultants',
  'SAP ABAP Developers', 'SAP BTP Consultants', 'SAP Security & GRC',
  'SAP Basis', 'SAP Project Managers', 'SAP Integration Specialists',
]

const recruitmentAI = [
  'AI Engineers', 'Machine Learning Engineers', 'Data Scientists',
  'Data Engineers', 'Prompt Engineers', 'MLOps Engineers', 'AI Researchers',
]

const recruitmentCloud = [
  'AWS', 'Microsoft Azure', 'Google Cloud Platform',
  'Kubernetes', 'Docker', 'Terraform',
  'DevOps Engineers', 'Site Reliability Engineers',
]

const recruitmentDev = [
  'Java', 'Spring Boot', '.NET', 'Python', 'React', 'Angular',
  'Node.js', 'Full Stack Developers', 'Mobile Developers', 'QA Automation Engineers',
]

const recruitmentEnterprise = [
  'Salesforce', 'ServiceNow', 'Oracle', 'Workday',
  'Microsoft Dynamics 365', 'Power Platform', 'Snowflake', 'Databricks',
]

const aiRecruitmentBenefits = [
  'Identify top candidates faster',
  'Reduce hiring time',
  'Improve candidate matching',
  'Reduce hiring bias',
  'Increase hiring accuracy',
  'Access passive talent',
  'Improve quality of hire',
  'Scale recruitment globally',
]

function TechPillGroup({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="tech-pill">{item}</span>
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <div>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28">
        <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">
          Our Services
        </p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] max-w-4xl leading-tight">
          End-to-End Technology Solutions for the Modern Enterprise
        </h1>
        <p className="mt-8 max-w-3xl text-[var(--slate)] text-lg leading-relaxed">
          From SAP transformation and AI-driven innovation to enterprise IT consulting and 
          AI-powered recruitment, we deliver comprehensive solutions that drive operational 
          excellence and business growth.
        </p>
      </section>

      {/* SAP CONSULTING */}
      <div className="pb-20">
        <ContourDivider label="SAP Consulting & Digital Transformation" />
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24" id="sap">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <div className="service-icon">⚙️</div>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-4">
              Transform Your Enterprise with Intelligent SAP Solutions
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-6">
              We help organizations modernize, optimize, and future-proof their SAP ecosystem by delivering 
              end-to-end consulting, implementation, migration, integration, and managed services. Our experts 
              work closely with clients to streamline business processes, improve operational efficiency, and 
              maximize return on technology investments.
            </p>
            <h3 className="font-display text-lg text-[var(--ice)] mb-4">Business Outcomes</h3>
            <div className="grid gap-2">
              {sapOutcomes.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[var(--blue-electric)] text-sm">✦</span>
                  <span className="text-[var(--slate)] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg text-[var(--ice)] mb-4">SAP Capabilities</h3>
            <TechPillGroup items={sapCapabilities} />
          </div>
        </div>
      </section>

      {/* AI & INTELLIGENT AUTOMATION */}
      <div className="pb-20">
        <ContourDivider label="AI & Intelligent Automation" />
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24" id="ai">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <div className="service-icon">🤖</div>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-4">
              Building Intelligent Enterprises with AI
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-6">
              Artificial Intelligence is transforming every industry. At Altitude Kinetic Solutions, we help 
              organizations leverage AI to automate business processes, improve decision-making, enhance 
              customer experiences, and unlock new growth opportunities.
            </p>
            <p className="text-[var(--slate)] leading-relaxed">
              Our AI consulting services combine strategy, innovation, and implementation to deliver 
              measurable business outcomes.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-[var(--ice)] mb-4">AI Solutions</h3>
            <TechPillGroup items={aiSolutions} />
          </div>
        </div>
      </section>

      {/* IT CONSULTING */}
      <div className="pb-20">
        <ContourDivider label="Enterprise IT Consulting" />
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24" id="it-consulting">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <div className="service-icon">💡</div>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-4">
              Technology Solutions Designed for Modern Businesses
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              We help organizations build secure, scalable, and future-ready digital ecosystems 
              that accelerate innovation and business growth.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-[var(--ice)] mb-4">Consulting Services</h3>
            <TechPillGroup items={itConsultingServices} />
          </div>
        </div>
      </section>

      {/* AI-POWERED RECRUITMENT */}
      <div className="pb-20">
        <ContourDivider label="AI-Powered Technology Recruitment" />
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24" id="recruitment">
        <div className="mb-12">
          <div className="service-icon">🎯</div>
          <h2 className="font-display text-3xl md:text-4xl text-[var(--ice)] mb-4">
            Connecting Businesses with Exceptional Technology Talent
          </h2>
          <p className="text-[var(--slate)] leading-relaxed max-w-3xl mb-4">
            Finding the right technology professionals requires more than traditional recruitment. Our 
            AI-powered recruitment model combines intelligent sourcing, advanced screening, and experienced 
            recruiters to identify highly qualified professionals who align with your business objectives.
          </p>
          <p className="text-[var(--slate)] leading-relaxed max-w-3xl">
            We support organizations with Contract, Contract-to-Hire, Permanent Placement, Executive Search, 
            and Project-Based Staffing across the United States, Canada, and India.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <div className="glass-card">
            <h3 className="font-display text-lg text-[var(--blue-electric)] mb-4">SAP</h3>
            <TechPillGroup items={recruitmentSAP} />
          </div>
          <div className="glass-card">
            <h3 className="font-display text-lg text-[var(--blue-electric)] mb-4">AI & Data</h3>
            <TechPillGroup items={recruitmentAI} />
          </div>
          <div className="glass-card">
            <h3 className="font-display text-lg text-[var(--blue-electric)] mb-4">Cloud & Infrastructure</h3>
            <TechPillGroup items={recruitmentCloud} />
          </div>
          <div className="glass-card">
            <h3 className="font-display text-lg text-[var(--blue-electric)] mb-4">Software Engineering</h3>
            <TechPillGroup items={recruitmentDev} />
          </div>
          <div className="glass-card md:col-span-2 lg:col-span-2">
            <h3 className="font-display text-lg text-[var(--blue-electric)] mb-4">Enterprise Technologies</h3>
            <TechPillGroup items={recruitmentEnterprise} />
          </div>
        </div>

        {/* Why AI Recruitment */}
        <div className="glass-card max-w-3xl">
          <h3 className="font-display text-xl text-[var(--ice)] mb-2">Why AI Recruitment?</h3>
          <p className="text-[var(--slate)] text-sm leading-relaxed mb-4">
            Traditional recruiting relies on resumes. We combine human expertise with AI-powered intelligence.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {aiRecruitmentBenefits.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-[var(--blue-electric)] text-sm">✦</span>
                <span className="text-[var(--slate)] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-gradient-to-b from-transparent to-[var(--navy)]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[var(--ice)] mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[var(--slate)] max-w-xl mx-auto mb-10">
            From strategy and consulting to implementation and AI-powered recruitment, we deliver 
            the expertise that helps organizations transform, compete, and lead.
          </p>
          <Link
            to="/contact"
            className="inline-block font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
