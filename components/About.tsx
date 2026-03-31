const details = [
  { key: 'Location', val: 'Tangerang, Banten, Indonesia' },
  { key: 'Status', val: 'Aktif Bekerja & Open for Collab' },
  { key: 'Email', val: 'mr.jekisauwani@gmail.com', href: 'mailto:mr.jekisauwani@gmail.com' },
  { key: 'LinkedIn', val: 'jekisauwani-17382a129', href: 'https://www.linkedin.com/in/jekisauwani-17382a129' },
  { key: 'Instagram', val: '@jqsa__', href: 'https://instagram.com/jqsa__' },
  { key: 'Languages', val: 'Indonesia · English' },
  { key: 'Publication', val: 'Dijkstra Algorithm Research', href: '#' },
]

const highlights = [
  { icon: '🎯', text: 'Full-stack developer with AI specialization' },
  { icon: '📈', text: '360% organic reach growth achieved' },
  { icon: '🏆', text: 'National Science Olympiad champion' },
  { icon: '📄', text: 'Published research author' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(168,85,247,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div>
            <div className="fade-up">
              <span className="section-label">About Me</span>
            </div>

            <h2 className="section-title mb-8 fade-up" style={{ animationDelay: '0.1s' }}>
              BUILDING<br />
              <span className="gradient-text">DIGITAL</span><br />
              FUTURES
            </h2>

            <div className="space-y-5 mb-10 fade-up" style={{ animationDelay: '0.2s' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Saya adalah seorang <strong style={{ color: 'var(--text)' }}>Web Developer & Digital Strategist</strong> berbasis
                di Tangerang dengan pengalaman lebih dari 5 tahun di berbagai domain — mulai dari pengembangan aplikasi web
                modern, integrasi kecerdasan buatan, hingga strategi pemasaran digital yang terukur.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Dengan latar belakang akademis S.KOM dari Universitas Bunda Mulia dan rekam jejak sebagai{' '}
                <strong style={{ color: 'var(--text)' }}>Juara 1 Olimpiade Sains Terapan Nasional</strong>, saya menggabungkan
                pemikiran analitis dengan kreativitas untuk menciptakan solusi yang tidak hanya berfungsi, tetapi juga berdampak.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Saat ini aktif sebagai <strong style={{ color: 'var(--text)' }}>Digital Marketing Specialist & Web Developer</strong>{' '}
                di PT Dea Trans Solusindo — membangun ekosistem digital perusahaan dari nol hingga menghasilkan pertumbuhan
                organik yang signifikan.
              </p>
            </div>

            {/* Highlight Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 fade-up" style={{ animationDelay: '0.3s' }}>
              {highlights.map((h, i) => (
                <div key={i} className="glass-card flex items-center gap-3 px-4 py-3 rounded-xl">
                  <span className="text-lg">{h.icon}</span>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details Card */}
          <div className="fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="glass-card rounded-2xl overflow-hidden" style={{ border: '1px solid var(--card-border)' }}>
              {/* Card Header */}
              <div className="px-6 py-4 border-b" style={{ borderColor: 'var(--border)', background: 'var(--card-bg)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28ca41' }} />
                  <span className="ml-3 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>profile.json</span>
                </div>
              </div>

              {/* Details List */}
              <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
                {details.map((d, i) => (
                  <div
                    key={i}
                    className="detail-row flex items-start gap-4 px-6 py-4 transition-colors duration-200"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <span
                      className="font-mono text-xs uppercase tracking-wider shrink-0 pt-0.5"
                      style={{ color: 'var(--text-muted)', width: '90px' }}
                    >
                      {d.key}
                    </span>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith('http') ? '_blank' : undefined}
                        rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium transition-colors duration-200 hover-accent"
                        style={{ color: 'var(--accent)' }}
                      >
                        {d.val}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: 'var(--text)' }}>{d.val}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t" style={{ borderColor: 'var(--border)', background: 'var(--card-bg)' }}>
                <a href="#contact" className="btn-primary w-full justify-center text-center" style={{ display: 'flex' }}>
                  Get In Touch
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
