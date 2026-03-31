import styles from "./Education.module.css";

const educations = [
  {
    year: "2015 – 2020",
    degree: "SARJANA KOMUNIKASI (S.KOM)",
    school: "Universitas Bunda Mulia · Information Technology",
    note: "📄 PUBLIKASI: Implementasi Algoritma Dijkstra untuk Penentuan Lokasi & Jarak Terpendek Kampus IT di Jakarta",
  },
  {
    year: "2009 – 2012",
    degree: "TEKNIK PENDINGINAN & AC",
    school: "SMK Negeri 4 Pontianak · Teknologi Teknik Pemanasan, Ventilasi, AC & Pendinginan",
    note: "🏆 JUARA 1 — Olimpiade Sains Terapan Nasional Bidang Fisika",
  },
];

const achievements = [
  { num: "🥇", title: "Juara 1 Olimpiade Sains Terapan Nasional", sub: "Bidang Fisika · SMK Negeri 4 Pontianak" },
  { num: "📄", title: "Publikasi Ilmiah Resmi", sub: "Algoritma Dijkstra — Shortest Path pada Kampus IT Jakarta" },
  { num: "360%", title: "Pertumbuhan Organic Reach", sub: "Instagram, TikTok, Facebook — DTS Digital Marketing Campaign" },
  { num: "3×", title: "Multi-Role Expertise", sub: "Web Dev · Digital Marketing · HR & GA — aktif bersamaan" },
];

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--surface)" }}>
      <div className="section-label">04 / PENDIDIKAN</div>
      <h2 className="section-title">LATAR<br />BELAKANG</h2>

      <div className={`${styles.eduGrid} fade-up`}>
        {educations.map((e) => (
          <div key={e.year} className={styles.eduCard}>
            <div className={styles.year}>{e.year}</div>
            <div className={styles.degree}>{e.degree}</div>
            <div className={styles.school}>{e.school}</div>
            <div className={styles.note}>{e.note}</div>
          </div>
        ))}
      </div>

      <div className={styles.achieveSection}>
        <div className="section-label" style={{ marginBottom: "2rem" }}>PENCAPAIAN</div>
        <div className={`${styles.achieveGrid} fade-up`}>
          {achievements.map((a) => (
            <div key={a.title} className={styles.achieveCard}>
              <div className={styles.achieveNum}>{a.num}</div>
              <div>
                <div className={styles.achieveTitle}>{a.title}</div>
                <div className={styles.achieveSub}>{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
