import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Album } from '../types'

export function AlbumCard({ album }: { album: Album }) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 320, damping: 22 }}>
      <Link to={`/work/${album.id}`} className="album-card" style={{ display: 'block' }}>
        <img className="album-cover" src={album.coverUrl} alt={album.title} loading="lazy" />
        <div className="album-body">
          <p className="album-meta">
            {album.year} · {album.location}
          </p>
          <h3>{album.title}</h3>
          <p className="muted">{album.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
