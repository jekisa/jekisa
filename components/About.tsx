import styles from "./About.module.css";

const details = [
  { key: "LOKASI", val: "Tangerang, Banten, Indonesia" },
  { key: "STATUS", val: "Aktif Bekerja & Open for Collab" },
  { key: "EMAIL", val: "mr.jekisauwani@gmail.com", href: "mailto:mr.jekisauwani@gmail.com" },
  { key: "LINKEDIN", val: "jekisauwani", href: "https://www.linkedin.com/in/jekisauwani-17382a129" },
  { key: "INSTAGRAM", val: "@jekisauwani", href: "https://www.instagram.com/jekisauwani/" },
  { key: "BAHASA", val: "Indonesia · English" },
  { key: "PUBLIKASI", val: "Algoritma Dijkstra untuk Penentuan Jarak Terpendek Kampus IT di Jakarta" },
];

export default function About() {
  return (
    <section id="about">
      <div className="section-label">01 / TENTANG</div>
      <h2 className="section-title">SIAPA<br />SAYA?</h2>

      <div className={`${styles.grid} fade-up`}>
        <div className={styles.text}>
          <p>
            Saya adalah <strong>Jeki Sauwani</strong>, seorang Web Developer &
            Digital Marketing Specialist di{" "}
            <strong>PT Dea Trans Solusindo</strong>, perusahaan freight
            forwarding yang berfokus pada jalur China-Indonesia.
          </p>
          <p>
            Dengan latar belakang IT yang kuat dari Universitas Bunda Mulia dan
            pengalaman lebih dari satu dekade di industri teknologi dan
            administrasi, saya membawa perspektif unik:{" "}
            <strong>memahami bisnis sekaligus membangun teknologinya.</strong>
          </p>
          <p>
            Saat ini saya aktif mengembangkan keahlian di AI integration,
            membangun chatbot berbasis <strong>Anthropic API</strong>, dan
            merancang sistem yang memudahkan operasional logistik. Saya percaya
            bahwa kode terbaik adalah yang memecahkan masalah nyata.
          </p>
        </div>

        <div className={styles.details}>
          {details.map((d) => (
            <div key={d.key} className={styles.row}>
              <span className={styles.key}>{d.key}</span>
              <span className={styles.val}>
                {d.href ? (
                  <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {d.val}
                  </a>
                ) : (
                  d.val
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
