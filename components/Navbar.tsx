"use client";
import styles from "./Navbar.module.css";
import { useTheme } from "./ThemeProvider";
import { useNavTransition } from "./NavTransitionContext";

const links = [
  { href: "#about", label: "TENTANG" },
  { href: "#skills", label: "KEAHLIAN" },
  { href: "#experience", label: "PENGALAMAN" },
  { href: "#education", label: "PENDIDIKAN" },
  { href: "#contact", label: "KONTAK" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { navigateTo } = useNavTransition();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>JS_PORTFOLIO / 2025</div>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={(e) => handleNavClick(e, l.href)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? "☀" : "◐"}
      </button>
    </nav>
  );
}
