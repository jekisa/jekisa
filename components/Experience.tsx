import styles from "./Experience.module.css";

const experiences = [
  {
    period: "OKT 2025 – SEKARANG",
    company: "PT DEA TRANS SOLUSINDO",
    role: "DIGITAL MARKETING SPECIALIST & WEB DEVELOPER",
    desc: "Memimpin transformasi digital perusahaan freight forwarding — dari pengembangan website company profile yang SEO-optimized hingga pengelolaan kampanye Meta Ads end-to-end. Berhasil meningkatkan organic reach hingga 360% melalui strategi konten multi-platform. Sekaligus membangun sistem absensi online dan chatbot berbasis AI untuk mendukung operasional.",
    badge: "FULL-TIME · TANGERANG",
  },
  {
    period: "FEB 2020 – OKT 2025",
    company: "PT. GAGAN NUSA PERKASA",
    role: "ADMINISTRATIVE OFFICER",
    desc: "Mengelola operasional administrasi perusahaan selama hampir 6 tahun. Mengembangkan sistem dokumentasi, koordinasi antar-departemen, dan proses administrasi yang efisien. Pengalaman panjang ini membangun fondasi manajemen dan komunikasi profesional yang kuat.",
    badge: "5 TAHUN 9 BULAN · TANGERANG",
  },
  {
    period: "DES 2015 – JAN 2017",
    company: "PT. BUCCHERI INDONESIA",
    role: "IT SUPPORT STAFF",
    desc: "Menangani infrastruktur IT perusahaan retail nasional — PC Desktop, Notebook, Printer, jaringan (LAN/WAN/TCP-IP), dan CCTV. Troubleshooting hardware dan instalasi software untuk mendukung operasional toko di berbagai lokasi.",
    badge: "1 TAHUN 2 BULAN · INDONESIA",
  },
  {
    period: "JUN 2013 – DES 2014",
    company: "PT. SINAR SOSRO",
    role: "TECHNICIAN",
    desc: "Memulai karier teknis di perusahaan minuman terkemuka Indonesia. Pengalaman awal yang membangun disiplin kerja, orientasi terhadap detail, dan kemampuan problem-solving dalam lingkungan industri.",
    badge: "1 TAHUN 7 BULAN · KEP. RIAU",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">03 / PENGALAMAN</div>
      <h2 className="section-title">PERJALANAN<br />KARIER</h2>

      <div className={`${styles.list} fade-up`}>
        {experiences.map((exp) => (
          <div key={exp.period} className={styles.item}>
            <div className={styles.meta}>
              <div className={styles.period}>{exp.period}</div>
              <div className={styles.company}>{exp.company}</div>
            </div>
            <div className={styles.content}>
              <div className={styles.role}>{exp.role}</div>
              <p className={styles.desc}>{exp.desc}</p>
              <span className={styles.badge}>{exp.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
