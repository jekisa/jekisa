'use client'

import { useTheme } from './ThemeProvider'
import { useNavTransition } from './NavTransitionContext'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { navigateTo } = useNavTransition()

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    navigateTo(href)
  }

  function toggleMobile() {
    document.getElementById('mobile-menu')?.classList.toggle('hidden')
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        backgroundColor: 'var(--nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between" style={{ height: '64px' }}>
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                backgroundColor: 'var(--accent)', color: '#000',
                fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', letterSpacing: '0.05em',
              }}
            >
              JS
            </div>
            <span className="hidden sm:block font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
              Portfolio <span style={{ color: 'var(--accent)' }}>/ 2025</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-muted)', fontSize: '13px' }}
            >
              {theme === 'dark' ? '☀' : '◐'}
            </button>

            <button
              onClick={toggleMobile}
              aria-label="Toggle mobile menu"
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col pt-3 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href)
                  document.getElementById('mobile-menu')?.classList.add('hidden')
                }}
                className="nav-link px-3 py-2.5 rounded-xl block"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
