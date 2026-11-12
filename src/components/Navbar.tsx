import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContent } from '../context/ContentContext'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'Experience' },
  { to: '/equipment', label: 'Equipment' },
  { to: '/quote', label: 'Get a Quote' },
]

export function Navbar() {
  const { content } = useContent()
  const [open, setOpen] = useState(false)

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
          aria-label="Toggle menu"
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
          <Link to="/admin" className="nav-cta" onClick={() => setOpen(false)}>
            Admin
          </Link>
        </nav>
      </div>
    </header>
  )
}
