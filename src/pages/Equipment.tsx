import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'

export function Equipment() {
  const { content } = useContent()

  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <p className="eyebrow">Rental fleet</p>
          <h1>{content.equipmentTitle}</h1>
          <p>{content.equipmentIntro}</p>
        </div>

        <div className="grid-3">
          {content.equipment.map((item) => (
            <article key={item.id} className="equip-card">
              <img src={item.imageUrl} alt={item.name} loading="lazy" />
              <div className="equip-body">
                <h3>{item.name}</h3>
                <p className="muted">{item.description}</p>
                <p className="rate">{item.dailyRate}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link className="btn btn-primary" to="/quote">
            Request equipment availability
          </Link>
        </div>
      </div>
    </section>
  )
}
