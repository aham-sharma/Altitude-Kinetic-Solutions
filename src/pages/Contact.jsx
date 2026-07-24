import { useState } from 'react'
import emailjs from '@emailjs/browser'
import ContourDivider from '../components/ContourDivider.jsx'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const initialForm = { name: '', phone: '', email: '', purpose: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.phone.trim()) next.phone = 'Please enter a contact number.'
    else if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone.trim())) next.phone = 'That number doesn\u2019t look right.'
    if (!form.email.trim()) next.email = 'Please enter an email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    if (!isConfigured) {
      // Prototype fallback: no EmailJS credentials wired up yet.
      console.warn('EmailJS is not configured. See README for setup steps.')
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          title: form.name,
          from_name: form.name,
          email: form.email,
          from_email: form.email,
          phone_number: form.phone,
          purpose: form.purpose || 'Not specified',
          message: form.purpose || 'Not specified',
          to_email: 'Altitude.kinetic.Solutions@gmail.com',
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      console.error('EmailJS error:', err)
      console.error('Status:', err?.status, 'Text:', err?.text)
      setStatus('error')
      setErrors((prev) => ({ ...prev, _api: err?.text || err?.message || String(err) }))
    }
  }

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28">
        <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--blue-electric)] mb-6">
          Get in Touch
        </p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl text-[var(--ice)] max-w-3xl leading-tight">
          Let's Build Something Extraordinary Together
        </h1>
        <p className="mt-6 max-w-2xl text-[var(--slate)] text-lg leading-relaxed">
          Whether you need SAP consulting, AI solutions, IT expertise, or top technology talent — 
          share your requirements and we'll get back to you within one business day.
        </p>
      </section>

      <div className="pb-16">
        <ContourDivider />
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-28 grid gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3.5 text-[var(--ice)] placeholder:text-[var(--slate-dim)] focus:border-[var(--blue-electric)] outline-none transition-colors"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id="name-error" className="mt-2 text-sm text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-2">
              Contact number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3.5 text-[var(--ice)] placeholder:text-[var(--slate-dim)] focus:border-[var(--blue-electric)] outline-none transition-colors"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-400">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3.5 text-[var(--ice)] placeholder:text-[var(--slate-dim)] focus:border-[var(--blue-electric)] outline-none transition-colors"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id="email-error" className="mt-2 text-sm text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="purpose" className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-2">
              How can we help? <span className="normal-case text-[var(--slate-dim)]">(optional)</span>
            </label>
            <textarea
              id="purpose"
              name="purpose"
              rows={4}
              value={form.purpose}
              onChange={handleChange}
              placeholder="Tell us about your project, technology needs, or talent requirements..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3.5 text-[var(--ice)] placeholder:text-[var(--slate-dim)] focus:border-[var(--blue-electric)] outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full md:w-auto font-mono text-[13px] tracking-widest uppercase px-8 py-4 rounded-sm bg-[var(--blue-electric)] text-[var(--navy-deep)] font-medium hover:bg-[var(--ice)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="text-sm text-[var(--blue-electric)]" role="status">
              Message sent — we'll be in touch shortly.
            </p>
          )}
          {status === 'error' && !isConfigured && (
            <p className="text-sm text-amber-400" role="status">
              Email delivery isn't wired up yet in this prototype — add your EmailJS keys to
              <code className="mx-1 px-1.5 py-0.5 bg-white/5 rounded">.env</code>
              (see README.md) to have submissions land in your inbox.
            </p>
          )}
          {status === 'error' && isConfigured && (
            <p className="text-sm text-red-400" role="status">
              Something went wrong sending that. Please try again in a moment.
            </p>
          )}
        </form>

        <aside className="space-y-6">
          <div className="glass-card">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-4">
              Direct
            </p>
            <a
              href="mailto:Hr@altitudekinetics.com"
              className="block text-[var(--ice)] hover:text-[var(--blue-electric)] mb-2 break-all"
            >
              Hr@altitudekinetics.com
            </a>
            <p className="text-[var(--slate)] text-sm">Greater Noida, Uttar Pradesh, India</p>
          </div>

          <div className="glass-card">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-4">
              Global Presence
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">🇺🇸</span>
                <span className="text-[var(--ice)]/90 text-sm">United States</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🇨🇦</span>
                <span className="text-[var(--ice)]/90 text-sm">Canada</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🇮🇳</span>
                <span className="text-[var(--ice)]/90 text-sm">India</span>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-4">
              Response time
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              We reply to every message within one business day. For urgent requests, mention
              your timeline in the message above.
            </p>
          </div>

          <div className="glass-card">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--slate)] mb-4">
              Our Services
            </p>
            <div className="space-y-2 text-sm text-[var(--slate)]">
              <p>✦ SAP Consulting & Transformation</p>
              <p>✦ AI & Intelligent Automation</p>
              <p>✦ Enterprise IT Consulting</p>
              <p>✦ Technology Recruitment</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
