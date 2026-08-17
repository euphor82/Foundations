import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchBar } from '../../components/SearchBar'
import { Collapsible } from '../../components/Collapsible'
import { usePersistentSet } from '../../lib/store'
import { matches } from '../../lib/text'
import { TESTAMENTS, ALL_BOOKS } from './data'
import { BookDetail } from './BookDetail'
import './books.css'

type Filter = 'all' | 'ot' | 'nt' | 'unread'

export function BooksView() {
  const [params] = useSearchParams()
  const openParam = params.get('open') ?? ''
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('all')
  const [openBook, setOpenBook] = useState<string>(openParam)
  const read = usePersistentSet('books.read')

  // keep deep-link in sync when arriving via cross-link or hard load
  useEffect(() => { if (openParam) setOpenBook(openParam) }, [openParam])

  const q = query.trim()
  const searchResults = q
    ? ALL_BOOKS.filter((b) =>
        matches(q, b.name, b.author, b.summary, b.point, b.christ, b.chars.map((c) => c.n + ' ' + c.d).join(' ')),
      )
    : null

  const renderBook = (name: string, genre: string, node: React.ReactNode) => (
    <Collapsible
      key={name}
      id={`book-${name}`}
      title={<span className={read.has(name) ? 'read-name' : ''}>{name}</span>}
      meta={genre}
      badge={read.has(name) ? <span className="readdot" aria-label="read">✓</span> : undefined}
      open={openBook === name ? true : undefined}
      onToggle={(o) => setOpenBook(o ? name : '')}
    >
      {node}
    </Collapsible>
  )

  return (
    <>
      <SearchBar value={query} onChange={setQuery} placeholder="Search a book, person, or theme" />
      {!q && (
        <div className="chips">
          {(['all', 'ot', 'nt', 'unread'] as Filter[]).map((f) => (
            <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All' : f === 'ot' ? 'Old Testament' : f === 'nt' ? 'New Testament' : 'Unread'}
            </button>
          ))}
        </div>
      )}

      {searchResults ? (
        searchResults.length ? (
          <>
            <div className="tlabel">Search results</div>
            {searchResults.map((b) =>
              renderBook(b.name, b.genre, <BookDetail book={b} isRead={read.has(b.name)} onToggleRead={() => read.toggle(b.name)} />),
            )}
          </>
        ) : (
          <div className="empty"><div className="big">No matches</div>Try another book, person, or theme.</div>
        )
      ) : (
        TESTAMENTS.filter((t) => filter === 'all' || filter === 'unread' || t.id === filter).map((t) => {
          const groups = t.groups
            .map((g) => ({ ...g, books: filter === 'unread' ? g.books.filter((b) => !read.has(b.name)) : g.books }))
            .filter((g) => g.books.length)
          if (!groups.length) return null
          return (
            <div key={t.id}>
              <div className="tlabel">{t.title}</div>
              <div className="tsub">{t.subtitle}</div>
              {groups.map((g) => {
                const rc = g.books.filter((b) => read.has(b.name)).length
                return (
                  <div key={g.name} className="bookgroup">
                    <div className="groupname">{g.name}<span className="groupcount">{rc}/{g.books.length}</span></div>
                    {g.books.map((b) =>
                      renderBook(b.name, b.genre, <BookDetail book={b} isRead={read.has(b.name)} onToggleRead={() => read.toggle(b.name)} />),
                    )}
                  </div>
                )
              })}
            </div>
          )
        })
      )}
    </>
  )
}
