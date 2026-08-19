import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES } from '../categories/registry'
import { SearchBar } from './SearchBar'
import { searchAll, SECTION_ORDER } from '../lib/globalSearch'
import './hub.css'

export function Hub() {
  const [query, setQuery] = useState('')
  const q = query.trim()
  const results = useMemo(() => searchAll(q), [q])

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
      <SearchBar value={query} onChange={setQuery} placeholder="Search everything — books, people, terms…" />

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
          <p className="hub-intro">A growing library of Christian resources. Choose a section to explore.</p>
          <div className="hub">
            {CATEGORIES.map((c) => (
              <Link key={c.id} className="hcard" to={c.path}>
                <span className="em" aria-hidden>{c.icon}</span>
                <h3 className="ht">{c.title}</h3>
                <p className="hd">{c.blurb}</p>
                {c.badge && <div className="hp">{c.badge()}</div>}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  )
}
