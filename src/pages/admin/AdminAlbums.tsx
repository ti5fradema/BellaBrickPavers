import { useState } from 'react'
import { LocalizedInput } from '../../components/LocalizedInput'
import { useContent } from '../../context/ContentContext'
import type { Album, AlbumPhoto, LocalizedString } from '../../types'

function newId() {
  return crypto.randomUUID()
}

function L(en: string, pt: string): LocalizedString {
  return { en, pt }
}

function emptyAlbum(): Album {
  return {
    id: newId(),
    title: L('New project album', 'Novo álbum de projeto'),
    description: L(
      'Describe the job and materials used.',
      'Descreva a obra e os materiais usados.',
    ),
    coverUrl:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    location: L('City / neighborhood', 'Cidade / bairro'),
    year: String(new Date().getFullYear()),
    photos: [
      {
        id: newId(),
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
        caption: L('Main photo', 'Foto principal'),
      },
    ],
  }
}

export function AdminAlbums() {
  const { content, updateContent } = useContent()
  const [selectedId, setSelectedId] = useState<string | null>(content.albums[0]?.id ?? null)
  const selected = content.albums.find((a) => a.id === selectedId) ?? null

  function patchAlbum(id: string, patch: Partial<Album>) {
    updateContent((prev) => ({
      ...prev,
      albums: prev.albums.map((album) => (album.id === id ? { ...album, ...patch } : album)),
    }))
  }

  function patchPhoto(albumId: string, photoId: string, patch: Partial<AlbumPhoto>) {
    updateContent((prev) => ({
      ...prev,
      albums: prev.albums.map((album) =>
        album.id !== albumId
          ? album
          : {
              ...album,
              photos: album.photos.map((photo) =>
                photo.id === photoId ? { ...photo, ...patch } : photo,
              ),
            },
      ),
    }))
  }

  async function onUploadCover(file: File | null) {
    if (!file || !selected) return
    const url = await fileToDataUrl(file)
    patchAlbum(selected.id, { coverUrl: url })
  }

  async function onUploadPhoto(file: File | null) {
    if (!file || !selected) return
    const url = await fileToDataUrl(file)
    updateContent((prev) => ({
      ...prev,
      albums: prev.albums.map((album) =>
        album.id !== selected.id
          ? album
          : {
              ...album,
              photos: [
                ...album.photos,
                { id: newId(), url, caption: L(file.name, file.name) },
              ],
            },
      ),
    }))
  }

  return (
    <div className="stack">
      <div>
        <h1>Work albums</h1>
        <p className="muted">Create albums with EN + PT titles, descriptions, and captions.</p>
      </div>

      <div className="admin-toolbar">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const album = emptyAlbum()
            updateContent((prev) => ({ ...prev, albums: [album, ...prev.albums] }))
            setSelectedId(album.id)
          }}
        >
          New album
        </button>
      </div>

      <div className="grid-2">
        <div className="stack">
          {content.albums.map((album) => (
            <button
              key={album.id}
              type="button"
              className="panel"
              style={{
                textAlign: 'left',
                cursor: 'pointer',
                borderColor:
                  album.id === selectedId ? 'rgba(255,212,0,0.55)' : 'rgba(255,212,0,0.12)',
              }}
              onClick={() => setSelectedId(album.id)}
            >
              <strong>{album.title.en}</strong>
              <p className="muted">
                {album.year} · {album.photos.length} photos · PT: {album.title.pt}
              </p>
            </button>
          ))}
          {content.albums.length === 0 ? <p className="muted">No albums yet.</p> : null}
        </div>

        {selected ? (
          <div className="field-block">
            <h3>Edit album</h3>
            <LocalizedInput
              label="Title"
              value={selected.title}
              onChange={(v) => patchAlbum(selected.id, { title: v })}
            />
            <LocalizedInput
              label="Description"
              multiline
              value={selected.description}
              onChange={(v) => patchAlbum(selected.id, { description: v })}
            />
            <LocalizedInput
              label="Location"
              value={selected.location}
              onChange={(v) => patchAlbum(selected.id, { location: v })}
            />
            <label>
              Year
              <input
                value={selected.year}
                onChange={(e) => patchAlbum(selected.id, { year: e.target.value })}
              />
            </label>
            <label>
              Cover image URL
              <input
                value={selected.coverUrl}
                onChange={(e) => patchAlbum(selected.id, { coverUrl: e.target.value })}
              />
            </label>
            <label>
              Or upload cover
              <input
                type="file"
                accept="image/*"
                onChange={(e) => void onUploadCover(e.target.files?.[0] ?? null)}
              />
            </label>

            <h3 style={{ marginTop: '0.5rem' }}>Photos</h3>
            <label>
              Upload photo
              <input
                type="file"
                accept="image/*"
                onChange={(e) => void onUploadPhoto(e.target.files?.[0] ?? null)}
              />
            </label>

            <div className="photo-list">
              {selected.photos.map((photo) => (
                <div key={photo.id} className="photo-row">
                  <img src={photo.url} alt={photo.caption.en} />
                  <div className="stack">
                    <input
                      value={photo.url}
                      onChange={(e) => patchPhoto(selected.id, photo.id, { url: e.target.value })}
                      placeholder="Image URL"
                    />
                    <LocalizedInput
                      label="Caption"
                      value={photo.caption}
                      onChange={(v) => patchPhoto(selected.id, photo.id, { caption: v })}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      updateContent((prev) => ({
                        ...prev,
                        albums: prev.albums.map((album) =>
                          album.id !== selected.id
                            ? album
                            : {
                                ...album,
                                photos: album.photos.filter((p) => p.id !== photo.id),
                              },
                        ),
                      }))
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="inline-actions" style={{ marginTop: '0.75rem' }}>
              <button
                type="button"
                className="btn btn-sm btn-ghost"
                onClick={() =>
                  updateContent((prev) => ({
                    ...prev,
                    albums: prev.albums.map((album) =>
                      album.id !== selected.id
                        ? album
                        : {
                            ...album,
                            photos: [
                              ...album.photos,
                              {
                                id: newId(),
                                url: selected.coverUrl,
                                caption: L('New photo', 'Nova foto'),
                              },
                            ],
                          },
                    ),
                  }))
                }
              >
                Add photo by URL
              </button>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={() => {
                  updateContent((prev) => ({
                    ...prev,
                    albums: prev.albums.filter((a) => a.id !== selected.id),
                  }))
                  setSelectedId(null)
                }}
              >
                Delete album
              </button>
            </div>
          </div>
        ) : (
          <p className="muted">Select or create an album.</p>
        )}
      </div>
    </div>
  )
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}
