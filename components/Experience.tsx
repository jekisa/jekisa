import type { Experience } from '@/types'

const experiences: Experience[] = [
  {
    id: 1,
    period: 'Oct 2025 – Present',
    startDate: 'Oct 2025',
    endDate: null,
    company: 'PT Dea Trans Solusindo',
    role: 'Digital Marketing Specialist & Web Developer',
    description:
      'Memimpin transformasi digital perusahaan freight forwarding — membangun website, sistem internal, chatbot AI, dan strategi pemasaran digital yang menghasilkan 360% pertumbuhan organik dalam 6 bulan.',
    badge: 'Current',
    tags: ['Next.js', 'AI Integration', 'Meta Ads', 'TikTok', 'MongoDB'],
  },
  {
    id: 2,
    period: 'Feb 2020 – Oct 2025',
    startDate: 'Feb 2020',
    endDate: 'Oct 2025',
    company: 'PT Gagan Nusa Perkasa',
    role: 'Administrative Officer & IT Support',
    description:
      'Mengelola administrasi operasional, HR & General Affairs, serta infrastruktur IT perusahaan selama 5 tahun 9 bulan. Mengimplementasikan sistem kehadiran digital dan optimasi workflow.',
    badge: '5y 9m',
    tags: ['HR Management', 'IT Support', 'Networking', 'Administrative'],
  },
  {
    id: 3,
    period: 'Dec 2015 – Jan 2017',
    startDate: 'Dec 2015',
    endDate: 'Jan 2017',
    company: 'PT Buccheri Indonesia',
    role: 'IT Support Staff',
    description:
      'Mengelola infrastruktur IT jaringan ritel nasional — troubleshooting hardware/software, pemeliharaan sistem POS, dan dukungan teknis untuk seluruh cabang.',
    badge: '1y 2m',
    tags: ['IT Support', 'POS System', 'Networking', 'Hardware'],
  },
  {
    id: 4,
    period: 'Jun 2013 – Dec 2014',
    startDate: 'Jun 2013',
    endDate: 'Dec 2014',
    company: 'PT Sinar Sosro',
    role: 'Maintenance Technician',
    description:
      'Bertanggung jawab atas pemeliharaan dan perbaikan mesin produksi, sistem CCTV, dan infrastruktur teknis fasilitas produksi.',
    badge: '1y 7m',
    tags: ['CCTV', 'Maintenance', 'Technical', 'Production'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 0% 100%, rgba(232,255,71,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label fade-up">Work History</span>
            <h2 className="section-title fade-up" style={{ animationDelay: '0.1s' }}>
              EXPERIENCE
            </h2>
          </div>
          <p className="text-sm font-mono fade-up" style={{ color: 'var(--text-muted)', animationDelay: '0.2s' }}>
            {experiences.length} positions · 10+ years
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-0 sm:left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)', opacity: 0.3 }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className="relative flex gap-6 fade-up"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                {/* Timeline Node */}
                <div className="hidden sm:flex flex-col items-center shrink-0 w-12">
                  <div
                    className="w-3 h-3 rounded-full mt-7 ring-2 ring-offset-2 shrink-0"
                    style={{
                      backgroundColor: exp.endDate === null ? 'var(--accent)' : 'var(--surface2)',
                      boxShadow: exp.endDate === null ? '0 0 12px var(--accent), 0 0 0 3px var(--bg), 0 0 0 5px var(--accent)' : '0 0 0 3px var(--bg), 0 0 0 5px var(--border)',
                    }}
                  />
                </div>

                {/* Card */}
                <div className="glass-card flex-1 p-6 rounded-2xl">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                        {exp.period}
                      </p>
                      <h3
                        className="text-xl font-semibold"
                        style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--text)' }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent)' }}>
                        {exp.company}
                      </p>
                    </div>
                    {exp.badge && (
                      <span
                        className="px-3 py-1 rounded-full font-mono text-xs shrink-0"
                        style={{
                          background: exp.endDate === null ? 'var(--accent-dim)' : 'var(--card-bg)',
                          color: exp.endDate === null ? 'var(--accent)' : 'var(--text-muted)',
                          border: `1px solid ${exp.endDate === null ? 'var(--accent-dim)' : 'var(--card-border)'}`,
                        }}
                      >
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-neutral">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
