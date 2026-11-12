import { Link, useParams } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { useLanguage } from '../context/LanguageContext'

export function AlbumDetail() {
  const { id } = useParams()
  const { content } = useContent()
  const { t, L } = useLanguage()
  const album = content.albums.find((a) => a.id === id)

  if (!album) {
    return (
      <section className="section">
        <div className="container">
          <h1>{t('albumNotFound')}</h1>
          <p className="muted" style={{ margin: '0.75rem 0 1.25rem' }}>
            {t('albumRemoved')}
          </p>
          <Link className="btn btn-primary" to="/work">
            {t('backToWork')}
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <p className="eyebrow">
            {album.year} · {L(album.location)}
          </p>
          <h1>{L(album.title)}</h1>
          <p>{L(album.description)}</p>
        </div>
        <div className="gallery-grid">
          {album.photos.map((photo) => (
            <figure key={photo.id}>
              <img src={photo.url} alt={L(photo.caption) || L(album.title)} loading="lazy" />
              {L(photo.caption) ? <figcaption>{L(photo.caption)}</figcaption> : null}
            </figure>
          ))}
        </div>
        <div style={{ marginTop: '1.75rem' }}>
          <Link className="btn btn-ghost" to="/work">
            {t('backToMural')}
          </Link>
        </div>
      </div>
    </section>
  )
}
