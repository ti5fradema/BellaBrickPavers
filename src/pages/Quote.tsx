import { useState, type FormEvent } from 'react'
import { useContent } from '../context/ContentContext'
import { useLanguage } from '../context/LanguageContext'

export function Quote() {
  const { content, addQuoteRequest } = useContent()
  const { lang, t, L } = useLanguage()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: 'Paver project',
    message: '',
  })

  const projectTypes = [
    { value: 'Paver project', label: t('typePaver') },
    { value: 'Brick / hardscape', label: t('typeBrick') },
    { value: 'Equipment rental', label: t('typeEquipment') },
    { value: 'Other', label: t('typeOther') },
  ]

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    addQuoteRequest({ ...form, lang })
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
          <p className="eyebrow">{t('onlineEstimate')}</p>
          <h1>{t('requestQuote')}</h1>
          <p>{L(content.quoteIntro)}</p>
        </div>

        {sent ? <div className="alert alert-success">{t('quoteThanks')}</div> : null}

        <form className="form-grid panel" onSubmit={onSubmit} style={{ padding: '1.4rem' }}>
          <div className="form-row">
            <label>
              {t('fullName')}
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label>
              {t('email')}
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
              {t('phone')}
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>
            <label>
              {t('projectType')}
              <select
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
              >
                {projectTypes.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label>
            {t('jobAddress')}
            <input
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </label>
          <label>
            {t('projectDetails')}
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t('projectPlaceholder')}
            />
          </label>
          <button className="btn btn-primary" type="submit">
            {t('sendQuote')}
          </button>
        </form>
      </div>
    </section>
  )
}
