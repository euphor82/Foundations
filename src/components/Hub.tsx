import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CATEGORIES } from '../categories/registry'
import { SearchBar } from './SearchBar'
import { searchAll, SECTION_ORDER } from '../lib/globalSearch'
import './hub.css'

export function Hub() {
  const [params] = useSearchParams()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const q = query.trim()
  const results = useMemo(() => searchAll(q), [q])

  // Focus the search when arrived here via the Search tab (adds ?focus=1).
  useEffect(() => {
    if (params.get('focus')) inputRef.current?.focus()
  }, [params])

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
      <SearchBar value={query} onChange={setQuery} inputRef={inputRef} placeholder="Search everything — books, people, terms…" />

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
        <div className="hub">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              className="hcard"
              to={c.path}
              style={{ '--acc': c.accent } as CSSProperties}
            >
              <span className="chip" style={{ background: `color-mix(in srgb, ${c.accent} 15%, var(--card))` }} aria-hidden>
                {c.icon}
              </span>
              <div className="hcard-txt">
                <h3 className="ht">{c.title}</h3>
                <p className="hd">{c.badge ? c.badge() : c.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
