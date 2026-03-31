import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        © 2025 Jeki Sauwani. Dibuat dengan ❤️ dan banyak kopi.
      </div>
      <Link href="#home" className={styles.back}>
        KEMBALI KE ATAS ↑
      </Link>
    </footer>
  );
}
