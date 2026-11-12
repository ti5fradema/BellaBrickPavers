import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import type { Album } from '../types'

export function AlbumCard({ album }: { album: Album }) {
  const { L } = useLanguage()

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 320, damping: 22 }}>
      <Link to={`/work/${album.id}`} className="album-card" style={{ display: 'block' }}>
        <img className="album-cover" src={album.coverUrl} alt={L(album.title)} loading="lazy" />
        <div className="album-body">
          <p className="album-meta">
            {album.year} · {L(album.location)}
          </p>
          <h3>{L(album.title)}</h3>
          <p className="muted">{L(album.description)}</p>
        </div>
      </Link>
    </motion.div>
  )
}
