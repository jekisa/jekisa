'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import type { ContactFormData, ContactLink } from '@/types'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const contactLinks: ContactLink[] = [
  {
    icon: '📱',
    label: 'WhatsApp',
    value: '+62 812-8549-9699',
    href: 'https://wa.me/6281285499699',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'mr.jekisauwani@gmail.com',
    href: 'mailto:mr.jekisauwani@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'jekisauwani-17382a129',
    href: 'https://www.linkedin.com/in/jekisauwani-17382a129',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@jqsa__',
    href: 'https://instagram.com/jqsa__',
  },
]

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', message: '' })
  const [formState, setFormState] = useState<FormState>('idle')
  const [feedback, setFeedback] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setFormState('loading')
    setFeedback('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setFormState('success')
      setFeedback(data.message || 'Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setFormState('error')
      setFeedback(err instanceof Error ? err.message : 'Failed to send message.')
    }
  }

  const inputStyle = {
    background: 'var(--card-bg)',
    border: '1px solid var(--card-border)',
    color: 'var(--text)',
    borderRadius: '12px',
    padding: '12px 16px',
    width: '100%',
    fontSize: '0.875rem',
    fontFamily: "'Outfit', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(232,255,71,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label fade-up">Get In Touch</span>
          <h2 className="section-title fade-up" style={{ animationDelay: '0.1s' }}>
            LET&apos;S <span className="gradient-text">WORK</span><br />
            TOGETHER
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto fade-up" style={{ color: 'var(--text-muted)', animationDelay: '0.2s' }}>
            Tertarik berkolaborasi? Saya selalu terbuka untuk proyek menarik, peluang kerja sama, atau sekadar ngobrol tentang teknologi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Links */}
          <div className="space-y-4 fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
              — Reach me directly
            </p>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card flex items-center gap-4 p-5 rounded-2xl no-underline group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent-dim)' }}
                >
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    {link.label}
                  </div>
                  <div className="text-sm font-medium truncate" style={{ color: 'var(--text)' }}>
                    {link.value}
                  </div>
                </div>
                <svg
                  className="ml-auto shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-8 rounded-2xl">
              <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
                — Send a message
              </p>

              {formState === 'success' ? (
                <div
                  className="text-center py-12 px-6 rounded-2xl"
                  style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}
                >
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--text)' }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{feedback}</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-6 btn-ghost text-xs px-6 py-2.5"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs uppercase tracking-wider mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={100}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs uppercase tracking-wider mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase tracking-wider mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
                    />
                  </div>

                  {formState === 'error' && (
                    <div
                      className="px-4 py-3 rounded-xl text-sm font-mono"
                      style={{ background: 'rgba(248,113,113,0.1)', color: '#f87171', border: '1px solid rgba(248,113,113,0.2)' }}
                    >
                      {feedback}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="btn-primary w-full justify-center"
                    style={{ display: 'flex', opacity: formState === 'loading' ? 0.7 : 1 }}
                  >
                    {formState === 'loading' ? (
                      <>
                        <span
                          className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                          style={{ borderColor: '#000', borderTopColor: 'transparent' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
