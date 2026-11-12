import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { content } = useContent()
  const { t, L } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{content.brandName}</strong>
          <p className="muted" style={{ marginTop: '0.4rem' }}>
            {L(content.tagline)}
          </p>
        </div>
        <div>
          <p>{content.contactPhone}</p>
          <p>{content.contactEmail}</p>
          <p className="muted">{L(content.serviceArea)}</p>
        </div>
        <div>
          <Link to="/quote">{t('requestQuoteLink')}</Link>
          <br />
          <Link to="/admin">{t('adminLoginLink')}</Link>
        </div>
      </div>
    </footer>
  )
}
