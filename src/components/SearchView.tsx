import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { searchAll, SECTION_ORDER } from '../lib/globalSearch'
import { CATEGORIES } from '../categories/registry'
import './search.css'

const EXAMPLES = ['grace', 'David', 'Passover', 'Trinity', 'baptism', 'Romans', 'covenant']

export function SearchView() {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const q = query.trim()
  const results = useMemo(() => searchAll(q), [q])

  // Focus the field as soon as the page opens.
  useEffect(() => { inputRef.current?.focus() }, [])

  const grouped = useMemo(() => {
    const by = new Map<string, typeof results>()
    for (const r of results) {
      const arr = by.get(r.section) ?? []
      arr.push(r)
      by.set(r.section, arr)
    }
    return SECTION_ORDER.filter((s) => by.has(s)).map((s) => [s, by.get(s)!] as const)
  }, [results])

  return (
    <>
      <SearchBar value={query} onChange={setQuery} inputRef={inputRef} placeholder="Search everything — books, people, stories, terms…" />

      {q.length >= 2 ? (
        results.length ? (
          <div className="results">
            {grouped.map(([section, items]) => (
              <div key={section}>
                <div className="tlabel">{section}</div>
                {items.map((r, i) => (
                  <Link key={r.label + i} className="result" to={r.to}>
                    <span className="result-label">{r.label}</span>
                    {r.sub && <span className="result-sub">{r.sub}</span>}
                    <span className="result-chev" aria-hidden>›</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="empty"><div className="big">No matches</div>Try another word.</div>
        )
      ) : (
        <>
          <div className="tlabel">Try searching for</div>
          <div className="chips">
            {EXAMPLES.map((e) => (
              <button key={e} onClick={() => setQuery(e)}>{e}</button>
            ))}
          </div>

          <div className="tlabel">Or browse a section</div>
          <div className="search-browse">
            {CATEGORIES.map((c) => (
              <Link key={c.id} className="sb-chip" to={c.path} style={{ borderColor: `color-mix(in srgb, ${c.accent} 45%, var(--line))` }}>
                <span aria-hidden>{c.icon}</span> {c.title}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  )
}
