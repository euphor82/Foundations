import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, HOME_GROUPS } from '../categories/registry'
import type { Category } from '../categories/registry'
import { store } from '../lib/store'
import './hub.css'

type HomeOrder = 'grouped' | 'az'

export function Hub() {
  const [order, setOrder] = useState<HomeOrder>(() =>
    store.get<string>('homeOrder', 'grouped') === 'az' ? 'az' : 'grouped',
  )
  const changeOrder = (o: HomeOrder) => { setOrder(o); store.set('homeOrder', o) }

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
  )
}
