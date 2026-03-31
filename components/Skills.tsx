import type { Skill } from '@/types'

const skills: Skill[] = [
  {
    id: 1,
    icon: '⚡',
    name: 'Web Development',
    description: 'Membangun aplikasi web modern dengan stack terkini — dari frontend yang responsif hingga backend yang scalable.',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Go', 'Docker', 'Nginx'],
  },
  {
    id: 2,
    icon: '🤖',
    name: 'AI Integration',
    description: 'Mengintegrasikan kecerdasan buatan ke dalam produk — chatbot, RAG pipeline, dan AI-powered workflows.',
    tags: ['Claude API', 'Vercel AI SDK', 'LangChain', 'RAG', 'Pinecone', 'OpenAI', 'Prompt Eng'],
  },
  {
    id: 3,
    icon: '📈',
    name: 'Digital Marketing',
    description: 'Merancang dan menjalankan strategi pemasaran digital yang terukur dengan ROI yang jelas.',
    tags: ['Meta Ads', 'Instagram', 'TikTok', 'SEO', 'Google Analytics', 'ROAS', 'Content Strategy'],
  },
  {
    id: 4,
    icon: '🎬',
    name: 'Content Creation',
    description: 'Memproduksi konten multimedia berkualitas tinggi — video, copywriting, dan visual branding.',
    tags: ['Reels', 'TikTok', 'CapCut', 'Adobe Premiere', 'Copywriting', 'Canva', 'Branding'],
  },
  {
    id: 5,
    icon: '🖧',
    name: 'IT Infrastructure',
    description: 'Mengelola infrastruktur IT perusahaan — network, server, VPS, dan sistem keamanan.',
    tags: ['Linux', 'Nginx', 'VPS', 'MikroTik', 'CCTV', 'Docker', 'Fail2ban', 'SSL'],
  },
  {
    id: 6,
    icon: '📋',
    name: 'HR & General Affairs',
    description: 'Mengelola administrasi SDM, kepatuhan hukum ketenagakerjaan, dan operasional umum perusahaan.',
    tags: ['Labor Law', 'PKWT', 'Payroll', 'Attendance', 'BPJS', 'Recruitment', 'SOP'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label fade-up">Core Skills</span>
          <h2 className="section-title fade-up" style={{ animationDelay: '0.1s' }}>
            WHAT I<br />
            <span className="gradient-text">BRING</span>
          </h2>
          <p className="mt-4 text-base fade-up" style={{ color: 'var(--text-muted)', animationDelay: '0.2s' }}>
            Kombinasi keahlian teknis dan strategis yang memungkinkan saya menangani proyek dari berbagai domain secara menyeluruh.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <div
              key={skill.id}
              className="glass-card skill-card p-6 rounded-2xl flex flex-col gap-4 fade-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              {/* Icon + Name */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-dim)' }}
                >
                  {skill.icon}
                </div>
                <div>
                  <h3
                    className="font-semibold text-base leading-tight mb-1"
                    style={{ color: 'var(--text)', fontFamily: "'Outfit', sans-serif" }}
                  >
                    {skill.name}
                  </h3>
                  <div className="w-6 h-0.5 rounded-full" style={{ background: 'var(--accent)' }} />
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {skill.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                {skill.tags.map((tag) => (
                  <span key={tag} className="tag-neutral">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
