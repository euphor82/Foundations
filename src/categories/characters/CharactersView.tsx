import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SearchBar } from '../../components/SearchBar'
import { Collapsible } from '../../components/Collapsible'
import { matches } from '../../lib/text'
import { eraName, hasEra } from '../timeline/data'
import { ALL_BOOKS } from '../books/data'
import { storiesForCharacter } from '../stories/data'
import { CATEGORY_ORDER, type BibleCharacter } from './types'
import { ALL_CHARACTERS, characterExists } from './data'
import './characters.css'

type Sort = 'az' | 'book' | 'role'
type Filter = 'all' | 'ot' | 'nt' | 'women'

const AVATAR_COLORS = ['#A9823A', '#3E7C8C', '#8C5A9E', '#4F8A52', '#B2543A', '#5A6BAE', '#9E7B3B', '#4C7A6E']
const colorFor = (name: string) => {
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0
  return AVATAR_COLORS[h % AVATAR_COLORS.length]
}
const bookExists = (n: string) => ALL_BOOKS.some((b) => b.name === n)
const BOOK_ORDER = ALL_BOOKS.map((b) => b.name)

export function CharactersView() {
  const [params] = useSearchParams()
  const openParam = params.get('open') ?? ''
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<Sort>('az')
  const [filter, setFilter] = useState<Filter>('all')
  const [open, setOpen] = useState(openParam)
  useEffect(() => { if (openParam) setOpen(openParam) }, [openParam])

  const q = query.trim()
  const list = useMemo(
    () =>
      ALL_CHARACTERS.filter((c) => {
        if (filter === 'ot' && c.testament !== 'ot') return false
        if (filter === 'nt' && c.testament !== 'nt') return false
        if (filter === 'women' && !c.woman) return false
        return matches(q, c.name, (c.aka || []).join(' '), c.role, c.summary, c.whyMatter)
      }),
    [q, filter],
  )

  const card = (c: BibleCharacter, key?: string) => (
    <Collapsible
      key={key || c.name}
      id={`char-${c.name}`}
      title={
        <span className="char-head">
          <span className="avatar" style={{ background: colorFor(c.name) }}>{c.name.charAt(0)}</span>
          <span className="char-name">{c.name}</span>
        </span>
      }
      meta={c.role}
      open={open === c.name ? true : undefined}
      onToggle={(o) => setOpen(o ? c.name : '')}
    >
      <CharDetail c={c} onOpen={setOpen} />
    </Collapsible>
  )

  let body: React.ReactNode
  if (q) {
    const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name))
    body = sorted.length ? (
      <>
        <div className="tlabel">Search results</div>
        {sorted.map((c) => card(c))}
      </>
    ) : (
      <div className="empty"><div className="big">No matches</div>Try another name or role.</div>
    )
  } else if (sort === 'az') {
    const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name))
    let letter = ''
    body = sorted.map((c) => {
      const l = c.name.charAt(0).toUpperCase()
      const head = l !== letter ? ((letter = l), <div className="alpha" key={'a' + l}>{l}</div>) : null
      return (
        <div key={c.name}>
          {head}
          {card(c)}
        </div>
      )
    })
  } else if (sort === 'book') {
    body = BOOK_ORDER.map((bk) => {
      const inBook = list.filter((c) => c.books.includes(bk)).sort((a, b) => a.name.localeCompare(b.name))
      if (!inBook.length) return null
      return (
        <div key={bk}>
          <div className="tlabel">{bk}</div>
          {inBook.map((c) => card(c, bk + '::' + c.name))}
        </div>
      )
    })
  } else {
    body = CATEGORY_ORDER.map((cat) => {
      const inCat = list.filter((c) => c.category === cat).sort((a, b) => a.name.localeCompare(b.name))
      if (!inCat.length) return null
      return (
        <div key={cat}>
          <div className="tlabel">{cat}</div>
          {inCat.map((c) => card(c, cat + '::' + c.name))}
        </div>
      )
    })
  }

  return (
    <>
      <SearchBar value={query} onChange={setQuery} placeholder="Search a person by name or role" />
      <div className="chips">
        {([['az', 'A–Z'], ['book', 'By book'], ['role', 'By role']] as [Sort, string][]).map(([s, label]) => (
          <button key={s} className={sort === s ? 'on' : ''} onClick={() => setSort(s)}>{label}</button>
        ))}
      </div>
      <div className="chips">
        {([['all', 'All'], ['ot', 'Old Testament'], ['nt', 'New Testament'], ['women', 'Women']] as [Filter, string][]).map(([f, label]) => (
          <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{label}</button>
        ))}
      </div>
      <div className="charcount">{list.length} {list.length === 1 ? 'person' : 'people'}</div>
      {body}
    </>
  )
}

function CharDetail({ c, onOpen }: { c: BibleCharacter; onOpen: (n: string) => void }) {
  return (
    <div>
      <div className="tags">
        {c.aka?.length ? <span className="tag">Also: {c.aka.join(', ')}</span> : null}
        {c.era && hasEra(c.era) ? (
          <Link className="tag" to={`/timeline?era=${encodeURIComponent(c.era)}`}>Era · {eraName(c.era)} →</Link>
        ) : null}
      </div>
      {c.meaning ? <p className="char-meaning">Name means <b>“{c.meaning}”</b></p> : null}
      <p className="prose">{c.summary}</p>
      {c.verse ? (
        <div className="verse"><span className="q">“{c.verse.text}”</span><span className="ref">{c.verse.ref}</span></div>
      ) : null}
      <div className="lab">Why they matter</div>
      <p className="prose">{c.whyMatter}</p>

      {c.relationships?.length ? (
        <>
          <div className="lab">Relationships</div>
          <ul className="rel">
            {c.relationships.map((r, i) => (
              <li key={i}>
                <span className="rel-k">{r.relation}:</span>{' '}
                {characterExists(r.name) ? (
                  <Link className="rel-link" to={`/characters?open=${encodeURIComponent(r.name)}`} onClick={() => onOpen(r.name)}>{r.name}</Link>
                ) : (
                  <span>{r.name}</span>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {c.books?.length ? (
        <div className="seealso">
          <p className="k">Appears in</p>
          <div className="row">
            {c.books.map((bk) =>
              bookExists(bk) ? (
                <Link key={bk} className="pill" to={`/books?open=${encodeURIComponent(bk)}`}>{bk} →</Link>
              ) : (
                <span key={bk} className="tag">{bk}</span>
              ),
            )}
          </div>
        </div>
      ) : null}

      {(() => {
        const stories = storiesForCharacter(c.name)
        return stories.length ? (
          <div className="seealso">
            <p className="k">In these stories</p>
            <div className="row">
              {stories.map((s) => (
                <Link key={s.title} className="pill" to={`/stories?open=${encodeURIComponent(s.title)}`}>{s.title} →</Link>
              ))}
            </div>
          </div>
        ) : null
      })()}
    </div>
  )
}
