const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jekisauwani-17382a129' },
  { label: 'Instagram', href: 'https://instagram.com/jqsa__' },
  { label: 'WhatsApp', href: 'https://wa.me/6281285499699' },
  { label: 'Email', href: 'mailto:mr.jekisauwani@gmail.com' },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative border-t py-16"
      style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
    >
      <div className="section-container">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--accent)', color: '#000',
                  fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px',
                }}
              >
                JS
              </div>
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                Jeki Sauwani
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Web Developer & Digital Strategist berbasis di Tangerang, Indonesia.
              Membangun pengalaman digital yang bermakna.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover-accent"
                  style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm transition-colors duration-200 hover-accent"
                  style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            © {year} Jeki Sauwani. Built with{' '}
            <span style={{ color: 'var(--accent)' }}>Next.js</span> &{' '}
            <span style={{ color: 'var(--accent)' }}>TypeScript</span>
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors duration-200 hover-accent"
            style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
          >
            Back to top
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
