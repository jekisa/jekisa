import styles from "./Skills.module.css";

const skills = [
  {
    icon: "⚡",
    name: "WEB DEV",
    desc: "Membangun aplikasi web full-stack yang responsive, SEO-friendly, dengan arsitektur modern.",
    tags: ["Next.js", "React", "HTML/CSS", "MongoDB", "Node.js", "Go", "Docker", "Nginx"],
  },
  {
    icon: "🤖",
    name: "AI INTEGRATION",
    desc: "Mengintegrasikan AI ke dalam produk nyata — chatbot, RAG pipeline, dan sistem otomasi cerdas.",
    tags: ["Claude AI", "Anthropic API", "Vercel AI SDK", "RAG", "Streaming"],
  },
  {
    icon: "📱",
    name: "DIGITAL MARKETING",
    desc: "Strategi konten, Meta Ads, dan social media management yang menghasilkan pertumbuhan nyata.",
    tags: ["Meta Ads", "Instagram", "TikTok", "Facebook", "ROAS Optimization"],
  },
  {
    icon: "🎬",
    name: "CONTENT CREATION",
    desc: "Produksi konten short-form video (Reels/TikTok) dan visual asset yang perform di berbagai platform.",
    tags: ["Reels", "TikTok", "Copywriting", "Creative Strategy"],
  },
  {
    icon: "🖧",
    name: "IT SUPPORT",
    desc: "Infrastruktur jaringan, troubleshooting hardware, dan deployment sistem berbasis Linux/VPS.",
    tags: ["Networking", "TCP/IP", "VPS", "Linux", "CCTV"],
  },
  {
    icon: "📋",
    name: "HR & GA",
    desc: "Penyusunan regulasi ketenagakerjaan, kontrak PKWT, dan administrasi SDM berbasis regulasi terkini.",
    tags: ["UU Cipta Kerja", "PKWT", "Peraturan Perusahaan", "HR Systems"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--surface)" }}>
      <div className="section-label">02 / KEAHLIAN</div>
      <h2 className="section-title">APA YANG<br />SAYA BISA</h2>

      <div className={`${styles.grid} fade-up`}>
        {skills.map((s) => (
          <div key={s.name} className={`${styles.card} skill-card`}>
            <span className={styles.icon}>{s.icon}</span>
            <div className={styles.name}>{s.name}</div>
            <div className={styles.desc}>{s.desc}</div>
            <div className={styles.tags}>
              {s.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
