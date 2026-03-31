import Link from "next/link";
import styles from "./Hero.module.css";

const stats = [
  { num: "360%", label: "ORGANIC REACH GROWTH" },
  { num: "5+", label: "TAHUN PENGALAMAN" },
  { num: "3", label: "PLATFORM DIKUASAI" },
  { num: "∞", label: "SEMANGAT BELAJAR" },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.left}>
        <div className={styles.tag}>Available for Projects</div>
        <h1 className={styles.name}>
          JEKI
          <span>SAUWANI</span>
        </h1>
        <p className={styles.title}>Web Developer & Digital Strategist</p>
        <p className={styles.desc}>
          Membangun pengalaman digital yang bermakna — dari arsitektur Next.js yang
          scalable hingga strategi konten yang menggerakkan audiens. Berbasis di
          Tangerang, bekerja untuk skala global.
        </p>
        <div className={styles.cta}>
          <Link href="#contact" className="btn btn-primary">
            HUBUNGI SAYA →
          </Link>
          <Link href="#experience" className="btn btn-ghost">
            LIHAT KARYA
          </Link>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.bigNumber} aria-hidden="true">01</div>
        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={`${styles.statBox} stat-box`}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        SCROLL DOWN
      </div>
    </section>
  );
}
