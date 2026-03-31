import type { Stat } from '@/types'

const stats: Stat[] = [
  { value: '360%', label: 'Organic Growth', description: 'Social media reach increase' },
  { value: '5+', label: 'Years Exp', description: 'Multi-domain expertise' },
  { value: '12+', label: 'Projects', description: 'Delivered successfully' },
  { value: '∞', label: 'Learning', description: 'Always growing' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      style={{ paddingTop: '64px' }}
    >
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,255,71,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      {/* Purple Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%', right: '-10%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="section-container w-full py-24 sm:py-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 fade-up">
          <div className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Available for Work
          </span>
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: 'var(--accent)', boxShadow: '0 0 8px var(--accent)', animation: 'pulse 2s infinite' }}
          />
        </div>

        {/* Main Heading */}
        <div className="fade-up" style={{ animationDelay: '0.1s' }}>
          <h1
            className="leading-none tracking-wide mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              lineHeight: 0.92,
            }}
          >
            <span className="block" style={{ color: 'var(--text)' }}>JEKI</span>
            <span className="block gradient-text">SAUWANI</span>
          </h1>
        </div>

        {/* Sub heading */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 fade-up" style={{ animationDelay: '0.2s' }}>
          <p
            className="font-mono text-sm sm:text-base uppercase tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            Web Developer & Digital Strategist
          </p>
          <div className="hidden sm:block h-px flex-1 max-w-24" style={{ background: 'var(--border)' }} />
          <span className="tag-accent text-xs">Tangerang, ID</span>
        </div>

        {/* Description */}
        <p
          className="max-w-xl text-base sm:text-lg leading-relaxed mb-12 fade-up"
          style={{ color: 'var(--text-muted)', animationDelay: '0.3s' }}
        >
          Membangun produk digital yang berdampak — dari arsitektur web modern, integrasi AI,
          hingga strategi pemasaran digital yang menggerakkan pertumbuhan nyata.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-20 fade-up" style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="btn-primary skill-card">
            Let&apos;s Collaborate
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#projects" className="btn-ghost skill-card">
            View Projects
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 fade-up" style={{ animationDelay: '0.5s' }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-5 rounded-2xl"
            >
              <div
                className="text-3xl sm:text-4xl font-bebas mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: 'var(--accent)', lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: 'var(--text)' }}>
                {stat.label}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          aria-hidden="true"
        >
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Scroll</span>
          <div
            className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
            style={{ borderColor: 'var(--border)' }}
          >
            <div
              className="w-1 h-1.5 rounded-full"
              style={{
                backgroundColor: 'var(--accent)',
                animation: 'bounce 2s infinite',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
