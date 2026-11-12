import { motion } from 'framer-motion'
import { useContent } from '../context/ContentContext'

export function About() {
  const { content } = useContent()

  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <p className="eyebrow">Experience</p>
          <h1>{content.aboutTitle}</h1>
          <p className="about-copy">{content.aboutText}</p>
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
          <h2>{content.experienceTitle}</h2>
          <p>{content.experienceIntro}</p>
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
              <h3>{item.title}</h3>
              <p className="muted">{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="contact-strip">
          <div>
            <strong>Phone</strong>
            {content.contactPhone}
          </div>
          <div>
            <strong>Email</strong>
            {content.contactEmail}
          </div>
          <div>
            <strong>Service area</strong>
            {content.serviceArea}
          </div>
        </div>
      </div>
    </section>
  )
}
