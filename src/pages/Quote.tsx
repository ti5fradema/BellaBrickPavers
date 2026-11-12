import { useState, type FormEvent } from 'react'
import { useContent } from '../context/ContentContext'

export function Quote() {
  const { content, addQuoteRequest } = useContent()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: 'Paver project',
    message: '',
  })

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    addQuoteRequest(form)
    setSent(true)
    setForm({
      name: '',
      email: '',
      phone: '',
      address: '',
      projectType: 'Paver project',
      message: '',
    })
  }

  return (
    <section className="section">
      <div className="container form-panel">
        <div className="page-hero" style={{ paddingTop: 0 }}>
          <p className="eyebrow">Online estimate</p>
          <h1>Request a quote</h1>
          <p>{content.quoteIntro}</p>
        </div>

        {sent ? (
          <div className="alert alert-success">
            Thanks — your request was saved. We will follow up soon.
          </div>
        ) : null}

        <form className="form-grid panel" onSubmit={onSubmit} style={{ padding: '1.4rem' }}>
          <div className="form-row">
            <label>
              Full name
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>
            <label>
              Project type
              <select
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
              >
                <option>Paver project</option>
                <option>Brick / hardscape</option>
                <option>Equipment rental</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <label>
            Job site address
            <input
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </label>
          <label>
            Project details
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Dimensions, timeline, photos you can share, equipment needed..."
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Send quote request
          </button>
        </form>
      </div>
    </section>
  )
}
