import { AlbumCard } from '../components/AlbumCard'
import { useContent } from '../context/ContentContext'

export function Work() {
  const { content } = useContent()

  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <p className="eyebrow">Work mural</p>
          <h1>Projects & albums</h1>
          <p>
            Browse finished jobs. Each album can be updated from the admin area with new photos and
            details.
          </p>
        </div>
        {content.albums.length === 0 ? (
          <p className="muted">No albums yet. Add the first one in Admin.</p>
        ) : (
          <div className="grid-3">
            {content.albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
