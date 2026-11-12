import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const links = [
  { to: '/admin', label: 'Overview', end: true },
  { to: '/admin/site', label: 'Site content' },
  { to: '/admin/albums', label: 'Work albums' },
  { to: '/admin/quotes', label: 'Quote inbox' },
  { to: '/admin/settings', label: 'Settings' },
]

export function AdminLayout() {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  if (!isAuthenticated) return <Navigate to="/admin/login" replace />

  return (
    <div className="admin-shell">
      <aside className="admin-side">
        <h2>Bella Admin</h2>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
        <button
          type="button"
          className="linkish"
          onClick={() => {
            logout()
            navigate('/admin/login')
          }}
        >
          Log out
        </button>
      </aside>
      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  )
}
