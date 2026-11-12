import { Link } from 'react-router-dom'
import { useContent } from '../../context/ContentContext'

export function AdminOverview() {
  const { content } = useContent()

  return (
    <div>
      <h1>Overview</h1>
      <p className="muted">Everything on the public site is editable from this panel.</p>
      <div className="grid-3" style={{ marginTop: '1.5rem' }}>
        <div className="panel">
          <h3>{content.albums.length}</h3>
          <p className="muted">Work albums</p>
          <Link className="btn btn-sm btn-primary" to="/admin/albums" style={{ marginTop: '0.8rem' }}>
            Manage albums
          </Link>
        </div>
        <div className="panel">
          <h3>{content.quoteRequests.length}</h3>
          <p className="muted">Quote requests</p>
          <Link className="btn btn-sm btn-primary" to="/admin/quotes" style={{ marginTop: '0.8rem' }}>
            Open inbox
          </Link>
        </div>
        <div className="panel">
          <h3>{content.equipment.length}</h3>
          <p className="muted">Equipment items</p>
          <Link className="btn btn-sm btn-primary" to="/admin/site" style={{ marginTop: '0.8rem' }}>
            Edit site
          </Link>
        </div>
      </div>
    </div>
  )
}
