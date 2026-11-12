import { useContent } from '../../context/ContentContext'

export function AdminQuotes() {
  const { content, deleteQuoteRequest } = useContent()

  return (
    <div className="stack">
      <div>
        <h1>Quote inbox</h1>
        <p className="muted">Requests submitted from the public quote form.</p>
      </div>

      {content.quoteRequests.length === 0 ? (
        <p className="muted">No requests yet.</p>
      ) : (
        content.quoteRequests.map((quote) => (
          <article key={quote.id} className="quote-item">
            <h3>
              {quote.name} · {quote.projectType} · {(quote.lang ?? 'en').toUpperCase()}
            </h3>
            <p className="muted">{new Date(quote.createdAt).toLocaleString()}</p>
            <p>
              {quote.email} · {quote.phone}
            </p>
            {quote.address ? <p>{quote.address}</p> : null}
            <p style={{ marginTop: '0.55rem' }}>{quote.message}</p>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              style={{ marginTop: '0.8rem' }}
              onClick={() => deleteQuoteRequest(quote.id)}
            >
              Delete
            </button>
          </article>
        ))
      )}
    </div>
  )
}
