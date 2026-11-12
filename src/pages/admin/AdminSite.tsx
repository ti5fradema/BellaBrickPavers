import { LocalizedInput } from '../../components/LocalizedInput'
import { useContent } from '../../context/ContentContext'
import type { EquipmentItem, ExperienceItem, LocalizedString } from '../../types'

function newId() {
  return crypto.randomUUID()
}

function L(en: string, pt: string): LocalizedString {
  return { en, pt }
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
        <p className="muted">
          Edit English (default) and Portuguese for every public text field.
        </p>
      </div>

      <div className="field-block">
        <h3>Brand & hero</h3>
        <label>
          Brand name
          <input value={content.brandName} onChange={(e) => setField('brandName', e.target.value)} />
        </label>
        <LocalizedInput
          label="Tagline"
          value={content.tagline}
          onChange={(v) => setField('tagline', v)}
        />
        <LocalizedInput
          label="Hero title"
          value={content.heroTitle}
          onChange={(v) => setField('heroTitle', v)}
        />
        <LocalizedInput
          label="Hero subtitle"
          multiline
          value={content.heroSubtitle}
          onChange={(v) => setField('heroSubtitle', v)}
        />
        <label>
          Hero image URL
          <input value={content.heroImage} onChange={(e) => setField('heroImage', e.target.value)} />
        </label>
      </div>

      <div className="field-block">
        <h3>About / experience</h3>
        <LocalizedInput
          label="About title"
          value={content.aboutTitle}
          onChange={(v) => setField('aboutTitle', v)}
        />
        <LocalizedInput
          label="About text"
          multiline
          value={content.aboutText}
          onChange={(v) => setField('aboutText', v)}
        />
        <label>
          About image URL
          <input value={content.aboutImage} onChange={(e) => setField('aboutImage', e.target.value)} />
        </label>
        <LocalizedInput
          label="Experience section title"
          value={content.experienceTitle}
          onChange={(v) => setField('experienceTitle', v)}
        />
        <LocalizedInput
          label="Experience intro"
          multiline
          value={content.experienceIntro}
          onChange={(v) => setField('experienceIntro', v)}
        />

        {content.experience.map((item) => (
          <div key={item.id} className="stack" style={{ borderTop: '1px solid #333', paddingTop: '0.8rem' }}>
            <LocalizedInput
              label="Item title"
              value={item.title}
              onChange={(v) => updateExperience(item.id, { title: v })}
            />
            <LocalizedInput
              label="Detail"
              multiline
              value={item.detail}
              onChange={(v) => updateExperience(item.id, { detail: v })}
            />
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
                {
                  id: newId(),
                  title: L('New specialty', 'Nova especialidade'),
                  detail: L('Describe this service.', 'Descreva este serviço.'),
                },
              ],
            }))
          }
        >
          Add experience item
        </button>
      </div>

      <div className="field-block">
        <h3>Equipment rental</h3>
        <LocalizedInput
          label="Section title"
          value={content.equipmentTitle}
          onChange={(v) => setField('equipmentTitle', v)}
        />
        <LocalizedInput
          label="Intro"
          multiline
          value={content.equipmentIntro}
          onChange={(v) => setField('equipmentIntro', v)}
        />

        {content.equipment.map((item) => (
          <div key={item.id} className="stack" style={{ borderTop: '1px solid #333', paddingTop: '0.8rem' }}>
            <LocalizedInput
              label="Name"
              value={item.name}
              onChange={(v) => updateEquipment(item.id, { name: v })}
            />
            <LocalizedInput
              label="Description"
              multiline
              value={item.description}
              onChange={(v) => updateEquipment(item.id, { description: v })}
            />
            <LocalizedInput
              label="Daily rate label"
              value={item.dailyRate}
              onChange={(v) => updateEquipment(item.id, { dailyRate: v })}
            />
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
                  name: L('New machine', 'Nova máquina'),
                  description: L('Describe the rental unit.', 'Descreva o equipamento.'),
                  dailyRate: L('From $0/day', 'A partir de US$ 0/dia'),
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
        <LocalizedInput
          label="Address / note"
          value={content.contactAddress}
          onChange={(v) => setField('contactAddress', v)}
        />
        <LocalizedInput
          label="Service area"
          value={content.serviceArea}
          onChange={(v) => setField('serviceArea', v)}
        />
        <LocalizedInput
          label="Quote page intro"
          multiline
          value={content.quoteIntro}
          onChange={(v) => setField('quoteIntro', v)}
        />
      </div>
    </div>
  )
}
