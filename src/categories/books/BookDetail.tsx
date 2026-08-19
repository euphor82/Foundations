import { Link } from 'react-router-dom'
import type { Book } from './types'
import { eraName, hasEra } from '../timeline/data'
import { characterExists } from '../characters/data'
import { storiesForBook } from '../stories/data'

interface Props {
  book: Book
  isRead: boolean
  onToggleRead: () => void
}

/** Render a Key Person name, linking each name that matches a character
 *  profile — splitting compound entries like "Adam & Eve" so each links. */
function PersonName({ name }: { name: string }) {
  const parts = name.split(/(\s*&\s*|,\s+)/)
  return (
    <>
      {parts.map((part, i) =>
        /^(\s*&\s*|,\s+)$/.test(part) || !characterExists(part) ? (
          <span key={i}>{part}</span>
        ) : (
          <Link key={i} className="person-link" to={`/characters?open=${encodeURIComponent(part)}`}>
            {part}
          </Link>
        ),
      )}
    </>
  )
}

export function BookDetail({ book, isRead, onToggleRead }: Props) {
  const stories = storiesForBook(book.name)
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
            <b><PersonName name={c.n} /></b> — {c.d}
          </li>
        ))}
      </ul>

      {stories.length ? (
        <div className="seealso">
          <p className="k">Stories in this book</p>
          <div className="row">
            {stories.map((s) => (
              <Link key={s.title} className="pill" to={`/stories?open=${encodeURIComponent(s.title)}`}>{s.title} →</Link>
            ))}
          </div>
        </div>
      ) : null}

      <div style={{ marginTop: 14 }}>
        <button className={`readbtn${isRead ? ' on' : ''}`} onClick={onToggleRead}>
          {isRead ? '✓ Read' : 'Mark as read'}
        </button>
      </div>
    </div>
  )
}
