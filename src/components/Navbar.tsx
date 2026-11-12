import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { useLanguage } from '../context/LanguageContext'
import type { Lang } from '../types'

export function Navbar() {
  const { content } = useContent()
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: t('navHome'), end: true },
    { to: '/work', label: t('navWork') },
    { to: '/about', label: t('navAbout') },
    { to: '/equipment', label: t('navEquipment') },
    { to: '/quote', label: t('navQuote') },
  ]

  function switchLang(next: Lang) {
    setLang(next)
    setOpen(false)
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden />
          <span>{content.brandName}</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={t('menuToggle')}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'en' ? 'active' : undefined}
              onClick={() => switchLang('en')}
            >
              {t('langEn')}
            </button>
            <button
              type="button"
              className={lang === 'pt' ? 'active' : undefined}
              onClick={() => switchLang('pt')}
            >
              {t('langPt')}
            </button>
          </div>

          <Link to="/admin" className="nav-cta" onClick={() => setOpen(false)}>
            {t('navAdmin')}
          </Link>
        </nav>
      </div>
    </header>
  )
}
