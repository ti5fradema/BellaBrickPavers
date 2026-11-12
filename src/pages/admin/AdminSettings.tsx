import { useRef, useState } from 'react'
import { useContent } from '../../context/ContentContext'

export function AdminSettings() {
  const { content, updateContent, resetContent, exportJson, importJson } = useContent()
  const fileRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState('')

  function downloadBackup() {
    const blob = new Blob([exportJson()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'bella-brick-pavers-backup.json'
    a.click()
    URL.revokeObjectURL(url)
    setMessage('Backup downloaded.')
  }

  async function onImportFile(file: File | null) {
    if (!file) return
    try {
      const text = await file.text()
      importJson(text)
      setMessage('Backup imported successfully.')
    } catch {
      setMessage('Could not import that file.')
    }
  }

  return (
    <div className="stack">
      <div>
        <h1>Settings</h1>
        <p className="muted">Password, backup, and reset.</p>
      </div>

      {message ? <div className="alert alert-success">{message}</div> : null}

      <div className="field-block">
        <h3>Admin password</h3>
        <label>
          Password
          <input
            type="text"
            value={content.adminPassword}
            onChange={(e) =>
              updateContent((prev) => ({ ...prev, adminPassword: e.target.value }))
            }
          />
        </label>
      </div>

      <div className="field-block">
        <h3>Backup</h3>
        <p className="muted">
          Content is saved in this browser. Export a JSON backup to move data to another computer,
          or keep a copy before clearing the site.
        </p>
        <div className="inline-actions">
          <button type="button" className="btn btn-primary" onClick={downloadBackup}>
            Export JSON
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => fileRef.current?.click()}
          >
            Import JSON
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(e) => void onImportFile(e.target.files?.[0] ?? null)}
          />
        </div>
      </div>

      <div className="field-block">
        <h3>Reset</h3>
        <p className="muted">Restore the original demo content shipped with the site.</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            if (confirm('Reset all site content to the defaults?')) {
              resetContent()
              setMessage('Content reset to defaults.')
            }
          }}
        >
          Reset to defaults
        </button>
      </div>
    </div>
  )
}
