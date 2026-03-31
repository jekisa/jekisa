"use client";
import { useState, FormEvent } from "react";
import styles from "./Contact.module.css";

type FormState = "idle" | "loading" | "success" | "error";

const contactLinks = [
  { icon: "📞", label: "TELEPON", val: "0822 9806 2959", href: "tel:082298062959" },
  { icon: "✉️", label: "EMAIL", val: "mr.jekisauwani@gmail.com", href: "mailto:mr.jekisauwani@gmail.com" },
  { icon: "💼", label: "LINKEDIN", val: "jekisauwani", href: "https://www.linkedin.com/in/jekisauwani-17382a129" },
  { icon: "📸", label: "INSTAGRAM", val: "@jekisauwani", href: "https://www.instagram.com/jekisauwani/" },
  { icon: "💬", label: "WHATSAPP", val: "Chat Langsung", href: "https://wa.me/6282298062959" },
];

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setFeedbackMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok) {
        setFormState("success");
        setFeedbackMsg(json.message);
        form.reset();
      } else {
        setFormState("error");
        setFeedbackMsg(json.error || "Terjadi kesalahan.");
      }
    } catch {
      setFormState("error");
      setFeedbackMsg("Gagal terhubung ke server. Cek koneksi internet Anda.");
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={`${styles.label} section-label`}>05 / KONTAK</div>
      <h2 className={`${styles.title} section-title`}>
        MARI<br />BERKOLABORASI
      </h2>

      <div className={styles.grid}>
        <div>
          <p className={styles.desc}>
            Punya proyek menarik? Butuh website yang lebih dari sekadar tampil
            bagus? Isi form di bawah atau hubungi langsung via channel favorit Anda.
          </p>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.field}>
              <label htmlFor="contact-name" className={styles.fieldLabel}>NAMA</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                placeholder="Nama Anda"
                className={styles.input}
                disabled={formState === "loading"}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email" className={styles.fieldLabel}>EMAIL</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={200}
                placeholder="email@domain.com"
                className={styles.input}
                disabled={formState === "loading"}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.fieldLabel}>PESAN</label>
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder="Ceritakan proyek atau ide Anda..."
                className={styles.textarea}
                disabled={formState === "loading"}
              />
            </div>

            {feedbackMsg && (
              <div className={`${styles.feedback} ${styles[formState]}`}>
                {feedbackMsg}
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={formState === "loading"}
            >
              {formState === "loading" ? "MENGIRIM..." : "KIRIM PESAN →"}
            </button>
          </form>
        </div>

        <div className={styles.links}>
          {contactLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={styles.link}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <span className={styles.linkIcon}>{l.icon}</span>
              <span className={styles.linkLabel}>{l.label}</span>
              <span className={styles.linkVal}>{l.val}</span>
              <span className={styles.linkArrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
