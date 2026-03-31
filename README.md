# Portfolio Jeki Sauwani

Website portfolio personal berbasis **Next.js 15** dengan desain editorial dark theme.

## 🚀 Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk production

```bash
npm run build
npm run start
```

## 📁 Struktur Project

```
portfolio-jeki/
├── app/
│   ├── globals.css        # CSS global & CSS variables
│   ├── layout.tsx         # Root layout + metadata SEO
│   └── page.tsx           # Halaman utama (assembles semua komponen)
├── components/
│   ├── Cursor.tsx          # Custom cursor animasi (client component)
│   ├── Cursor.module.css
│   ├── ScrollAnimator.tsx  # Intersection Observer untuk fade-up (client)
│   ├── Navbar.tsx          # Navigation bar fixed
│   ├── Navbar.module.css
│   ├── Hero.tsx            # Section hero + stats grid
│   ├── Hero.module.css
│   ├── About.tsx           # Section tentang + detail info
│   ├── About.module.css
│   ├── Skills.tsx          # Grid keahlian 6 kartu
│   ├── Skills.module.css
│   ├── Experience.tsx      # List pengalaman kerja
│   ├── Experience.module.css
│   ├── Education.tsx       # Pendidikan + pencapaian
│   ├── Education.module.css
│   ├── Contact.tsx         # Section kontak (aksen kuning)
│   ├── Contact.module.css
│   ├── Footer.tsx          # Footer sederhana
│   └── Footer.module.css
└── README.md
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| `--bg` | `#0a0a0a` |
| `--accent` | `#e8ff47` (kuning neon) |
| `--text` | `#f0ede8` |
| `--muted` | `#666` |
| Font Display | Bebas Neue |
| Font Body | Outfit |
| Font Mono | IBM Plex Mono |
| Font Serif | DM Serif Display |

## 🌐 Deploy ke Vercel

```bash
npm i -g vercel
vercel
```

Atau push ke GitHub lalu connect ke [vercel.com](https://vercel.com).

## ✏️ Cara Kustomisasi

- **Data konten** → edit langsung di tiap file `components/*.tsx` (array `experiences`, `skills`, dll)
- **Warna** → ubah CSS variables di `app/globals.css`
- **Tambah section baru** → buat file `components/NamaSection.tsx` + `.module.css`, lalu import di `app/page.tsx`
