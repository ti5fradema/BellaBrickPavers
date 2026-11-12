import { motion } from 'framer-motion'
import { useContent } from '../context/ContentContext'
import { useLanguage } from '../context/LanguageContext'

export function About() {
  const { content } = useContent()
  const { t, L } = useLanguage()

  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <p className="eyebrow">{t('experienceEyebrow')}</p>
          <h1>{L(content.aboutTitle)}</h1>
          <p className="about-copy">{L(content.aboutText)}</p>
        </div>

        <div
          className="about-image"
          style={{
            backgroundImage: `url(${content.aboutImage})`,
            marginBottom: '2.5rem',
            minHeight: 320,
          }}
        />

        <div className="section-head">
          <h2>{L(content.experienceTitle)}</h2>
          <p>{L(content.experienceIntro)}</p>
        </div>

        <div className="grid-2">
          {content.experience.map((item, index) => (
            <motion.article
              key={item.id}
              className="exp-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
            >
              <h3>{L(item.title)}</h3>
              <p className="muted">{L(item.detail)}</p>
            </motion.article>
          ))}
        </div>

        <div className="contact-strip">
          <div>
            <strong>{t('phoneLabel')}</strong>
            {content.contactPhone}
          </div>
          <div>
            <strong>{t('emailLabel')}</strong>
            {content.contactEmail}
          </div>
          <div>
            <strong>{t('serviceAreaLabel')}</strong>
            {L(content.serviceArea)}
          </div>
        </div>
      </div>
    </section>
  )
}
