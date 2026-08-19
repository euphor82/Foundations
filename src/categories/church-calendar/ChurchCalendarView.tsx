import { useState } from 'react'
import { Collapsible } from '../../components/Collapsible'
import { CALENDAR, CALENDAR_INTRO } from './data'
import './church-calendar.css'

type Filter = 'all' | 'Season' | 'Feast'

export function ChurchCalendarView() {
  const [filter, setFilter] = useState<Filter>('all')
  const list = CALENDAR.filter((e) => filter === 'all' || e.kind === filter)

  return (
    <>
      <div className="note">{CALENDAR_INTRO}</div>
      <div className="chips">
        {(['all', 'Season', 'Feast'] as Filter[]).map((f) => (
          <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>
            {f === 'all' ? 'All' : f === 'Season' ? 'Seasons' : 'Feast days'}
          </button>
        ))}
      </div>
      {list.map((e) => (
        <Collapsible
          key={e.name}
          title={
            <span className="cal-head">
              <span className="cal-dot" style={{ background: e.colorHex }} />
              <span className="cal-name">{e.name}</span>
            </span>
          }
          meta={e.when}
        >
          <div className="tags">
            <span className="tag">{e.kind}</span>
            <span className="tag cal-color"><span className="cal-dot sm" style={{ background: e.colorHex }} />{e.color}</span>
          </div>
          <p className="prose">{e.summary}</p>
          <div className="lab">How it’s observed</div>
          <p className="prose">{e.observance}</p>
        </Collapsible>
      ))}
    </>
  )
}
