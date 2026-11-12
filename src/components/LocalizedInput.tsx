import type { LocalizedString } from '../types'

interface Props {
  label: string
  value: LocalizedString
  multiline?: boolean
  onChange: (next: LocalizedString) => void
}

export function LocalizedInput({ label, value, multiline, onChange }: Props) {
  const Field = multiline ? 'textarea' : 'input'

  return (
    <div className="localized-fields">
      <p className="localized-label">{label}</p>
      <label>
        EN
        <Field
          value={value.en}
          onChange={(e) => onChange({ ...value, en: e.target.value })}
        />
      </label>
      <label>
        PT
        <Field
          value={value.pt}
          onChange={(e) => onChange({ ...value, pt: e.target.value })}
        />
      </label>
    </div>
  )
}
