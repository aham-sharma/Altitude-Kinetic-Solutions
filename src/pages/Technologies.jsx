import { Link } from 'react-router-dom'
import ContourDivider from '../components/ContourDivider.jsx'

const erpApplications = [
  'SAP S/4HANA', 'SAP ECC', 'SAP BTP', 'SAP Fiori', 'SAP Integration Suite',
  'SAP Analytics Cloud', 'SAP BW/4HANA', 'Oracle ERP', 'Oracle Cloud',
  'Microsoft Dynamics 365', 'Salesforce', 'ServiceNow', 'Workday',
]

const sapFunctional = [
  'SAP FI/CO', 'SAP MM', 'SAP SD', 'SAP PP', 'SAP PM', 'SAP QM',
  'SAP WM', 'SAP EWM', 'SAP TM', 'SAP SuccessFactors', 'SAP Ariba',
  'SAP IBP', 'SAP APO', 'SAP GRC', 'SAP CRM',
]

const sapTechnical = [
  'SAP ABAP', 'SAP BTP Development', 'SAP CAPM', 'RAP Development',
  'SAP Integration Suite', 'SAP CPI', 'SAP Basis', 'SAP Security',
  'SAP HANA', 'SAP Fiori/UI5', 'OData Services', 'SAP Workflow', 'SAP PI/PO',
]

const aiData = [
  'Generative AI', 'OpenAI & LLM Integration', 'Microsoft Copilot', 'AI Chatbots',
  'Machine Learning', 'Deep Learning', 'NLP (Natural Language Processing)',
  'Computer Vision', 'Prompt Engineering', 'AI Automation', 'Predictive Analytics',
  'Data Engineering', 'Data Science', 'MLOps',
]

const cloudPlatforms = [
  'Microsoft Azure', 'Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)',
  'Azure DevOps', 'Kubernetes', 'Docker', 'Terraform', 'OpenShift',
]

const softwareDev = [
  'Java', 'Spring Boot', '.NET', 'C#', 'Python', 'Node.js',
  'React', 'Angular', 'Vue.js', 'JavaScript', 'TypeScript',
  'PHP', 'Go', 'Kotlin', 'Swift',
]

const dataAnalytics = [
  'Power BI', 'Tableau', 'Snowflake', 'Databricks',
  'SQL Server', 'PostgreSQL', 'MongoDB', 'Apache Spark', 'Hadoop',
]

const devops = [
  'Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Ansible',
  'Terraform', 'Docker', 'Kubernetes', 'Azure DevOps',
]

const techSections = [
  { title: 'ERP & Enterprise Applications', icon: '🏢', items: erpApplications, color: 'var(--blue-electric)' },
  { title: 'SAP Functional Modules', icon: '📋', items: sapFunctional, color: '#5fa8ff' },
  { title: 'SAP Technical Expertise', icon: '🔧', items: sapTechnical, color: '#a4d0ff' },
  { title: 'Artificial Intelligence & Data', icon: '🧠', items: aiData, color: 'var(--blue-electric)' },
  { title: 'Cloud Platforms', icon: '☁️', items: cloudPlatforms, color: '#5fa8ff' },
  { title: 'Software Development', icon: '💻', items: softwareDev, color: '#a4d0ff' },
  { title: 'Data & Analytics', icon: '📊', items: dataAnalytics, color: 'var(--blue-electric)' },
  { title: 'DevOps & Automation', icon: '🔄', items: devops, color: '#5fa8ff' },
]

export default function Technologies() {
  return (
    <div>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28">
        <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">
          Technology Expertise
        </p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] max-w-4xl leading-tight">
          Enterprise Technologies We Support
        </h1>
        <p className="mt-8 max-w-3xl text-[var(--slate)] text-lg leading-relaxed">
          Our consultants specialize in today's most in-demand enterprise technologies. From SAP 
          and cloud platforms to AI, data science, and modern software development—we bring deep 
          expertise across the technology stack.
        </p>
      </section>

      <div className="pb-20">
        <ContourDivider label="Technology Stack" />
      </div>

      {/* TECH SECTIONS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {techSections.map((section) => (
            <div key={section.title} className="glass-card">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="font-display text-xl text-[var(--ice)]">{section.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span key={item} className="tech-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-gradient-to-b from-transparent to-[var(--navy)]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[var(--ice)] mb-6">
            Need Expertise in a Specific Technology?
          </h2>
          <p className="text-[var(--slate)] max-w-xl mx-auto mb-10">
            Our consultants and recruiters specialize in matching the right technology expertise 
            to your business needs—from SAP and AI to cloud and modern development.
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
              Hire Technology Talent
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
