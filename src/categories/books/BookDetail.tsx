import { Link } from 'react-router-dom'
import type { Book } from './types'
import { eraName, hasEra } from '../timeline/data'

interface Props {
  book: Book
  isRead: boolean
  onToggleRead: () => void
}

export function BookDetail({ book, isRead, onToggleRead }: Props) {
  return (
    <div>
      <div className="tags">
        <span className="tag">{book.genre}</span>
        {book.era && hasEra(book.era) ? (
          <Link className="tag" to={`/timeline?era=${encodeURIComponent(book.era)}`}>
            Era · {eraName(book.era)} →
          </Link>
        ) : (
          book.era && <span className="tag">Era · {eraName(book.era)}</span>
        )}
      </div>

      <p className="prose" style={{ fontStyle: 'italic', color: 'var(--muted)', fontSize: 13 }}>
        Written by <b style={{ color: 'var(--gold)' }}>{book.author}</b>
      </p>
      <p className="prose">{book.summary}</p>

      {book.verse && (
        <>
          <div className="lab">Key verse</div>
          <div className="verse">
            <span className="q">“{book.verse.text}”</span>
            <span className="ref">{book.verse.ref}</span>
          </div>
        </>
      )}

      <div className="lab">Main purpose</div>
      <p className="prose">{book.point}</p>

      {book.christ && (
        <>
          <div className="lab">Christ in this book</div>
          <p className="prose">{book.christ}</p>
        </>
      )}

      <div className="lab">Key people</div>
      <ul className="bullets">
        {book.chars.map((c) => (
          <li key={c.n}>
            <b>{c.n}</b> — {c.d}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 14 }}>
        <button className={`readbtn${isRead ? ' on' : ''}`} onClick={onToggleRead}>
          {isRead ? '✓ Read' : 'Mark as read'}
        </button>
      </div>
    </div>
  )
}
