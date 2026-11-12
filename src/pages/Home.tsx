import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AlbumCard } from '../components/AlbumCard'
import { useContent } from '../context/ContentContext'

export function Home() {
  const { content } = useContent()
  const featured = content.albums.slice(0, 3)

  return (
    <>
      <section className="hero">
        <motion.div
          className="hero-media"
          style={{ backgroundImage: `url(${content.heroImage})` }}
          initial={{ scale: 1.12, opacity: 0.6 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.p
            className="eyebrow"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {content.tagline}
          </motion.p>
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {content.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            {content.heroSubtitle}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <Link className="btn btn-primary" to="/quote">
              Get an online estimate <ArrowRight size={18} />
            </Link>
            <Link className="btn btn-ghost" to="/work">
              See the work mural
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Recent work</h2>
            <p>A mural of finished jobs — driveways, patios, and commercial hardscapes.</p>
          </div>
          <div className="grid-3">
            {featured.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="btn btn-ghost" to="/work">
              View all albums
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container about-layout">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 style={{ marginBottom: '1rem' }}>{content.aboutTitle}</h2>
            <p className="about-copy">{content.aboutText}</p>
            <div style={{ marginTop: '1.4rem' }}>
              <Link className="btn btn-primary" to="/about">
                Read the experience
              </Link>
            </div>
          </div>
          <motion.div
            className="about-image"
            style={{ backgroundImage: `url(${content.aboutImage})` }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{content.equipmentTitle}</h2>
            <p>{content.equipmentIntro}</p>
          </div>
          <div className="grid-3">
            {content.equipment.slice(0, 3).map((item) => (
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
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="btn btn-primary" to="/equipment">
              Browse equipment rental
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
