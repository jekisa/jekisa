import type { Education, Achievement } from '@/types'

const educations: Education[] = [
  {
    id: 1,
    year: '2015 – 2020',
    degree: 'S.Kom (Bachelor of Computer Science)',
    institution: 'Universitas Bunda Mulia',
    field: 'Informatika / Information Technology',
    location: 'Jakarta, Indonesia',
  },
  {
    id: 2,
    year: '2009 – 2012',
    degree: 'Diploma Teknik',
    institution: 'SMK Negeri 4 Pontianak',
    field: 'Teknik CCTV & Air Conditioning',
    location: 'Pontianak, Kalimantan Barat',
  },
]

const achievements: Achievement[] = [
  {
    id: 1,
    icon: '🏆',
    title: 'Juara 1 — Olimpiade Sains Terapan Nasional',
    description: 'Bidang Fisika Terapan, tingkat nasional. Kompetisi sains bergengsi antar SMK se-Indonesia.',
  },
  {
    id: 2,
    icon: '📄',
    title: 'Published Research Author',
    description: 'Penulis paper ilmiah bertema "Implementasi Algoritma Dijkstra" yang dipublikasikan secara akademis.',
  },
  {
    id: 3,
    icon: '📈',
    title: '360% Organic Reach Growth',
    description: 'Pertumbuhan jangkauan organik Instagram & TikTok perusahaan dalam 6 bulan melalui strategi konten terstruktur.',
  },
  {
    id: 4,
    icon: '🌐',
    title: 'Multi-Domain Expertise',
    description: 'Menguasai lintas disiplin: Web Dev, AI, Digital Marketing, IT Support, dan HR dalam karir profesional.',
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 100% 0%, rgba(168,85,247,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label fade-up">Education & Achievements</span>
          <h2 className="section-title fade-up" style={{ animationDelay: '0.1s' }}>
            LEARNING &<br />
            <span className="gradient-text">MILESTONES</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-6 fade-up" style={{ color: 'var(--text-muted)' }}>
              — Formal Education
            </p>
            <div className="space-y-5">
              {educations.map((edu, i) => (
                <div
                  key={edu.id}
                  className="glass-card p-6 rounded-2xl fade-up"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div
                      className="px-3 py-1.5 rounded-lg font-mono text-xs"
                      style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                    >
                      {edu.year}
                    </div>
                    <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                      {edu.location}
                    </span>
                  </div>
                  <h3
                    className="font-semibold text-base mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--text)' }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--accent)' }}>
                    {edu.institution}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {edu.field}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-6 fade-up" style={{ color: 'var(--text-muted)' }}>
              — Key Achievements
            </p>
            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <div
                  key={ach.id}
                  className="glass-card p-5 rounded-2xl flex items-start gap-4 fade-up"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                  >
                    {ach.icon}
                  </div>
                  <div>
                    <h4
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--text)' }}
                    >
                      {ach.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
