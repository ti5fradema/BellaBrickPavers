import { useState, type FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export function AdminLogin() {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (isAuthenticated) return <Navigate to="/admin" replace />

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (login(password)) {
      navigate('/admin')
      return
    }
    setError('Wrong password. Try again.')
  }

  return (
    <div className="login-wrap">
      <form className="login-card stack" onSubmit={onSubmit}>
        <div>
          <p className="eyebrow">Admin</p>
          <h1>Sign in</h1>
          <p className="muted">Edit the whole site, albums, and quote inbox.</p>
        </div>
        {error ? <div className="alert alert-error">{error}</div> : null}
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            required
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Enter admin
        </button>
        <p className="muted" style={{ fontSize: '0.85rem' }}>
          Default password: <strong>bella2026</strong> (change it inside Settings).
        </p>
      </form>
    </div>
  )
}
