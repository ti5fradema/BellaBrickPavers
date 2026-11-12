import { AlbumCard } from '../components/AlbumCard'
import { useContent } from '../context/ContentContext'
import { useLanguage } from '../context/LanguageContext'

export function Work() {
  const { content } = useContent()
  const { t } = useLanguage()

  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <p className="eyebrow">{t('workMural')}</p>
          <h1>{t('projectsAlbums')}</h1>
          <p>{t('workIntro')}</p>
        </div>
        {content.albums.length === 0 ? (
          <p className="muted">{t('noAlbums')}</p>
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
