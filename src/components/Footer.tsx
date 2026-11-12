import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'

export function Footer() {
  const { content } = useContent()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{content.brandName}</strong>
          <p className="muted" style={{ marginTop: '0.4rem' }}>
            {content.tagline}
          </p>
        </div>
        <div>
          <p>{content.contactPhone}</p>
          <p>{content.contactEmail}</p>
          <p className="muted">{content.serviceArea}</p>
        </div>
        <div>
          <Link to="/quote">Request a quote</Link>
          <br />
          <Link to="/admin">Admin login</Link>
        </div>
      </div>
    </footer>
  )
}
