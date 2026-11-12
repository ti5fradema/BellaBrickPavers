import { Link, useParams } from 'react-router-dom'
import { useContent } from '../context/ContentContext'

export function AlbumDetail() {
  const { id } = useParams()
  const { content } = useContent()
  const album = content.albums.find((a) => a.id === id)

  if (!album) {
    return (
      <section className="section">
        <div className="container">
          <h1>Album not found</h1>
          <p className="muted" style={{ margin: '0.75rem 0 1.25rem' }}>
            This album may have been removed.
          </p>
          <Link className="btn btn-primary" to="/work">
            Back to work
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
            {album.year} · {album.location}
          </p>
          <h1>{album.title}</h1>
          <p>{album.description}</p>
        </div>
        <div className="gallery-grid">
          {album.photos.map((photo) => (
            <figure key={photo.id}>
              <img src={photo.url} alt={photo.caption || album.title} loading="lazy" />
              {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
        <div style={{ marginTop: '1.75rem' }}>
          <Link className="btn btn-ghost" to="/work">
            Back to mural
          </Link>
        </div>
      </div>
    </section>
  )
}
