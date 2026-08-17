import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from '../../components/SearchBar'
import { Collapsible } from '../../components/Collapsible'
import { CompareSelect } from '../../components/CompareSelect'
import { matches } from '../../lib/text'
import { RELIGIONS, RELIGIONS_INTRO, COMPARE_SUBJECTS } from './data'
import type { Religion } from './types'

const ATTRS = [
  { key: 'founder', label: 'Founder' },
  { key: 'god', label: 'View of God' },
  { key: 'texts', label: 'Sacred texts' },
  { key: 'salvation', label: 'Salvation / goal' },
  { key: 'afterlife', label: 'Afterlife' },
]

export function ReligionsView() {
  const [query, setQuery] = useState('')
  const [showTable, setShowTable] = useState(true)

  const list = RELIGIONS.filter((r) => matches(query, r.name, r.founder, r.origin, r.god, r.differences.join(' ')))

  return (
    <>
      <div className="note">{RELIGIONS_INTRO}</div>

      <div className="chips">
        <button className={showTable ? 'on' : ''} onClick={() => setShowTable(true)}>Compare</button>
        <button className={!showTable ? 'on' : ''} onClick={() => setShowTable(false)}>Detail</button>
      </div>

      {showTable ? (
        <CompareSelect
          subjects={COMPARE_SUBJECTS.map((r) => ({ key: r.name, label: r.name, sub: r.adherents }))}
          attributes={ATTRS}
          defaultSelected={['Christianity', 'Judaism']}
          value={(col, row) => {
            const r = COMPARE_SUBJECTS.find((x) => x.name === col)!
            return String(r[row as keyof Religion])
          }}
        />
      ) : (
        <>
          <SearchBar value={query} onChange={setQuery} placeholder="Search a religion or belief" />
          {list.length ? (
            list.map((r) => (
              <Collapsible key={r.name} title={r.name} badge={<span className="tag">{r.adherents}</span>}>
                <Field k="Founder" v={r.founder} />
                <Field k="Origin" v={r.origin} />
                <Field k="View of God" v={r.god} />
                <Field k="Sacred texts" v={r.texts} />
                <Field k="Salvation / goal" v={r.salvation} />
                <Field k="Afterlife" v={r.afterlife} />
                <div className="lab">Key differences from Christianity</div>
                <ul className="bullets">{r.differences.map((d, i) => <li key={i}>{d}</li>)}</ul>
                <div className="lab">Common ground</div>
                <p className="prose">{r.shared}</p>
                {r.see_also?.length ? (
                  <div className="seealso">
                    <p className="k">See also</p>
                    <div className="row">
                      {r.see_also.map((t) => (
                        <Link key={t} className="pill" to={`/glossary?term=${encodeURIComponent(t)}`}>{t}</Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </Collapsible>
            ))
          ) : (
            <div className="empty"><div className="big">No matches</div>Try another search.</div>
          )}
        </>
      )}
    </>
  )
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div className="field">
      <p className="k">{k}</p>
      <p className="v">{v}</p>
    </div>
  )
}
