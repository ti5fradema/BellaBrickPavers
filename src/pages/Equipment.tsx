import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { useLanguage } from '../context/LanguageContext'

export function Equipment() {
  const { content } = useContent()
  const { t, L } = useLanguage()

  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <p className="eyebrow">{t('rentalFleet')}</p>
          <h1>{L(content.equipmentTitle)}</h1>
          <p>{L(content.equipmentIntro)}</p>
        </div>

        <div className="grid-3">
          {content.equipment.map((item) => (
            <article key={item.id} className="equip-card">
              <img src={item.imageUrl} alt={L(item.name)} loading="lazy" />
              <div className="equip-body">
                <h3>{L(item.name)}</h3>
                <p className="muted">{L(item.description)}</p>
                <p className="rate">{L(item.dailyRate)}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link className="btn btn-primary" to="/quote">
            {t('requestEquipment')}
          </Link>
        </div>
      </div>
    </section>
  )
}
