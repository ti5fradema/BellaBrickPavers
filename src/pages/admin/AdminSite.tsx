import { useContent } from '../../context/ContentContext'
import type { EquipmentItem, ExperienceItem } from '../../types'

function newId() {
  return crypto.randomUUID()
}

export function AdminSite() {
  const { content, updateContent } = useContent()

  function setField<K extends keyof typeof content>(key: K, value: (typeof content)[K]) {
    updateContent((prev) => ({ ...prev, [key]: value }))
  }

  function updateExperience(id: string, patch: Partial<ExperienceItem>) {
    updateContent((prev) => ({
      ...prev,
      experience: prev.experience.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }))
  }

  function updateEquipment(id: string, patch: Partial<EquipmentItem>) {
    updateContent((prev) => ({
      ...prev,
      equipment: prev.equipment.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }))
  }

  return (
    <div className="stack">
      <div>
        <h1>Site content</h1>
        <p className="muted">Hero, about, experience, equipment, and contact — all live.</p>
      </div>

      <div className="field-block">
        <h3>Brand & hero</h3>
        <label>
          Brand name
          <input value={content.brandName} onChange={(e) => setField('brandName', e.target.value)} />
        </label>
        <label>
          Tagline
          <input value={content.tagline} onChange={(e) => setField('tagline', e.target.value)} />
        </label>
        <label>
          Hero title
          <input value={content.heroTitle} onChange={(e) => setField('heroTitle', e.target.value)} />
        </label>
        <label>
          Hero subtitle
          <textarea
            value={content.heroSubtitle}
            onChange={(e) => setField('heroSubtitle', e.target.value)}
          />
        </label>
        <label>
          Hero image URL
          <input value={content.heroImage} onChange={(e) => setField('heroImage', e.target.value)} />
        </label>
      </div>

      <div className="field-block">
        <h3>About / experience</h3>
        <label>
          About title
          <input value={content.aboutTitle} onChange={(e) => setField('aboutTitle', e.target.value)} />
        </label>
        <label>
          About text
          <textarea
            value={content.aboutText}
            onChange={(e) => setField('aboutText', e.target.value)}
            style={{ minHeight: 180 }}
          />
        </label>
        <label>
          About image URL
          <input value={content.aboutImage} onChange={(e) => setField('aboutImage', e.target.value)} />
        </label>
        <label>
          Experience section title
          <input
            value={content.experienceTitle}
            onChange={(e) => setField('experienceTitle', e.target.value)}
          />
        </label>
        <label>
          Experience intro
          <textarea
            value={content.experienceIntro}
            onChange={(e) => setField('experienceIntro', e.target.value)}
          />
        </label>

        {content.experience.map((item) => (
          <div key={item.id} className="stack" style={{ borderTop: '1px solid #333', paddingTop: '0.8rem' }}>
            <label>
              Item title
              <input
                value={item.title}
                onChange={(e) => updateExperience(item.id, { title: e.target.value })}
              />
            </label>
            <label>
              Detail
              <textarea
                value={item.detail}
                onChange={(e) => updateExperience(item.id, { detail: e.target.value })}
              />
            </label>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() =>
                updateContent((prev) => ({
                  ...prev,
                  experience: prev.experience.filter((x) => x.id !== item.id),
                }))
              }
            >
              Remove item
            </button>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-sm btn-ghost"
          onClick={() =>
            updateContent((prev) => ({
              ...prev,
              experience: [
                ...prev.experience,
                { id: newId(), title: 'New specialty', detail: 'Describe this service.' },
              ],
            }))
          }
        >
          Add experience item
        </button>
      </div>

      <div className="field-block">
        <h3>Equipment rental</h3>
        <label>
          Section title
          <input
            value={content.equipmentTitle}
            onChange={(e) => setField('equipmentTitle', e.target.value)}
          />
        </label>
        <label>
          Intro
          <textarea
            value={content.equipmentIntro}
            onChange={(e) => setField('equipmentIntro', e.target.value)}
          />
        </label>

        {content.equipment.map((item) => (
          <div key={item.id} className="stack" style={{ borderTop: '1px solid #333', paddingTop: '0.8rem' }}>
            <label>
              Name
              <input value={item.name} onChange={(e) => updateEquipment(item.id, { name: e.target.value })} />
            </label>
            <label>
              Description
              <textarea
                value={item.description}
                onChange={(e) => updateEquipment(item.id, { description: e.target.value })}
              />
            </label>
            <label>
              Daily rate label
              <input
                value={item.dailyRate}
                onChange={(e) => updateEquipment(item.id, { dailyRate: e.target.value })}
              />
            </label>
            <label>
              Image URL
              <input
                value={item.imageUrl}
                onChange={(e) => updateEquipment(item.id, { imageUrl: e.target.value })}
              />
            </label>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() =>
                updateContent((prev) => ({
                  ...prev,
                  equipment: prev.equipment.filter((x) => x.id !== item.id),
                }))
              }
            >
              Remove equipment
            </button>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-sm btn-ghost"
          onClick={() =>
            updateContent((prev) => ({
              ...prev,
              equipment: [
                ...prev.equipment,
                {
                  id: newId(),
                  name: 'New machine',
                  description: 'Describe the rental unit.',
                  dailyRate: 'From $0/day',
                  imageUrl:
                    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
                },
              ],
            }))
          }
        >
          Add equipment
        </button>
      </div>

      <div className="field-block">
        <h3>Contact & quote page</h3>
        <label>
          Phone
          <input
            value={content.contactPhone}
            onChange={(e) => setField('contactPhone', e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            value={content.contactEmail}
            onChange={(e) => setField('contactEmail', e.target.value)}
          />
        </label>
        <label>
          Address / note
          <input
            value={content.contactAddress}
            onChange={(e) => setField('contactAddress', e.target.value)}
          />
        </label>
        <label>
          Service area
          <input
            value={content.serviceArea}
            onChange={(e) => setField('serviceArea', e.target.value)}
          />
        </label>
        <label>
          Quote page intro
          <textarea
            value={content.quoteIntro}
            onChange={(e) => setField('quoteIntro', e.target.value)}
          />
        </label>
      </div>
    </div>
  )
}
