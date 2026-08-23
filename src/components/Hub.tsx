import { useMemo, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, HOME_GROUPS } from '../categories/registry'
import type { Category } from '../categories/registry'
import { store } from '../lib/store'
import { SearchBar } from './SearchBar'
import { searchAll, SECTION_ORDER } from '../lib/globalSearch'
import './hub.css'

type HomeOrder = 'grouped' | 'az'

export function Hub() {
  const [order, setOrder] = useState<HomeOrder>(() =>
    store.get<string>('homeOrder', 'grouped') === 'az' ? 'az' : 'grouped',
  )
  const changeOrder = (o: HomeOrder) => { setOrder(o); store.set('homeOrder', o) }

  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  // Which sections to search. Starts as "all"; the filter appears on tap.
  const [active, setActive] = useState<Set<string>>(() => new Set(SECTION_ORDER))
  const q = query.trim()
  const searching = q.length >= 2
  const showFilter = focused || query.length > 0
  const allOn = active.size === SECTION_ORDER.length

  const results = useMemo(() => searchAll(q, active), [q, active])
  const grouped = useMemo(() => {
    const by = new Map<string, typeof results>()
    for (const r of results) {
      const arr = by.get(r.section) ?? []
      arr.push(r)
      by.set(r.section, arr)
    }
    return SECTION_ORDER.filter((s) => by.has(s)).map((s) => [s, by.get(s)!] as const)
  }, [results])

  // Tap behavior: from "all", tapping a section isolates to just it; after that
  // taps add/remove sections. Emptying the selection resets to all.
  const toggleSection = (s: string) =>
    setActive((prev) => {
      if (prev.size === SECTION_ORDER.length) return new Set([s])
      const next = new Set(prev)
      if (next.has(s)) next.delete(s)
      else next.add(s)
      return next.size === 0 ? new Set(SECTION_ORDER) : next
    })
  const selectAll = () => setActive(new Set(SECTION_ORDER))

  const scopeLabel = allOn
    ? 'all sections'
    : active.size === 1
      ? [...active][0]
      : `${active.size} sections`

  const row = (c: Category) => (
    <Link key={c.id} className="hrow" to={c.path} style={{ '--acc': c.accent } as CSSProperties}>
      <span className="chip" style={{ background: `color-mix(in srgb, ${c.accent} 15%, var(--card))` }} aria-hidden>
        {c.icon}
      </span>
      <span className="hrow-txt">
        <span className="ht">{c.title}</span>
        <span className="hd">{c.badge ? c.badge() : c.tagline}</span>
      </span>
      <span className="hrow-chev" aria-hidden>›</span>
    </Link>
  )

  return (
    <>
      <div onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
        <SearchBar value={query} onChange={setQuery} placeholder="Search everything — books, people, stories, terms…" />
      </div>

      {showFilter && (
        <div className="search-filter">
          <div className="sf-head">
            <span className="sf-scope">Searching {scopeLabel}</span>
            {!allOn && <button className="sf-all" onMouseDown={(e) => e.preventDefault()} onClick={selectAll}>Search all</button>}
          </div>
          <div className="chips">
            {SECTION_ORDER.map((s) => (
              <button
                key={s}
                className={active.has(s) ? 'on' : ''}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => toggleSection(s)}
                aria-pressed={active.has(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {searching ? (
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
          <div className="empty"><div className="big">No matches</div>Try another word{allOn ? '' : ' or widen the sections'}.</div>
        )
      ) : (
        <>
          <div className="hub-sort" role="group" aria-label="Order sections">
            <button className={order === 'grouped' ? 'on' : ''} onClick={() => changeOrder('grouped')}>Grouped</button>
            <button className={order === 'az' ? 'on' : ''} onClick={() => changeOrder('az')}>A–Z</button>
          </div>

          {order === 'az' ? (
            <div className="hlist">
              {[...CATEGORIES].sort((a, b) => a.title.localeCompare(b.title)).map(row)}
            </div>
          ) : (
            HOME_GROUPS.map((g) => {
              const inGroup = CATEGORIES.filter((c) => c.group === g)
              return inGroup.length ? (
                <div key={g}>
                  <div className="tlabel">{g}</div>
                  <div className="hlist">{inGroup.map(row)}</div>
                </div>
              ) : null
            })
          )}
        </>
      )}
    </>
  )
}
