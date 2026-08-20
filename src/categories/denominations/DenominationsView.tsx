import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapsible } from '../../components/Collapsible'
import { CompareSelect } from '../../components/CompareSelect'
import { DENOMINATIONS, DENOM_FAMILIES } from './data'
import type { Denomination } from './types'

const ATTRS = [
  { key: 'authority', label: 'Authority' },
  { key: 'baptism', label: 'Baptism' },
  { key: 'communion', label: 'Communion' },
  { key: 'governance', label: 'Governance' },
  { key: 'leadership', label: 'Leadership' },
  { key: 'salvation', label: 'Salvation' },
]

/** True if `term` appears as a whole word (allowing a simple plural) in `hay`. */
const wordIn = (term: string, hay: string) =>
  new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:s|es)?\\b`, 'i').test(hay)

export function DenominationsView() {
  const [showTable, setShowTable] = useState(false)

  return (
    <>
      <div className="chips">
        <button className={!showTable ? 'on' : ''} onClick={() => setShowTable(false)}>Detail</button>
        <button className={showTable ? 'on' : ''} onClick={() => setShowTable(true)}>Compare</button>
      </div>

      {showTable ? (
        <CompareSelect
          subjects={DENOMINATIONS.map((d) => ({ key: d.name, label: d.name.replace(' Church', ''), sub: d.family.replace('Protestant — ', '') }))}
          attributes={ATTRS}
          defaultSelected={DENOMINATIONS.slice(0, 2).map((d) => d.name)}
          value={(col, row) => {
            const d = DENOMINATIONS.find((x) => x.name === col)!
            return String(d[row as keyof Denomination])
          }}
        />
      ) : (
        DENOM_FAMILIES.map((fam) => (
          <div key={fam}>
            <div className="tlabel">{fam}</div>
            {DENOMINATIONS.filter((d) => d.family === fam).map((d) => {
              const hay = [d.origin, d.distinctives, d.authority, d.baptism, d.communion, d.governance, d.leadership, d.salvation].join(' ')
              const seeAlso = (d.see_also ?? []).filter((t) => wordIn(t, hay))
              return (
              <Collapsible key={d.name} title={d.name}>
                <Field k="Origin" v={d.origin} />
                <Field k="Distinctives" v={d.distinctives} />
                <Field k="Authority" v={d.authority} />
                <Field k="Baptism" v={d.baptism} />
                <Field k="Communion" v={d.communion} />
                <Field k="Church governance" v={d.governance} />
                <Field k="Leadership & structure" v={d.leadership} />
                <Field k="Salvation" v={d.salvation} />
                {seeAlso.length ? (
                  <div className="seealso">
                    <p className="k">See also</p>
                    <div className="row">
                      {seeAlso.map((t) => (
                        <Link key={t} className="pill" to={`/glossary?term=${encodeURIComponent(t)}`}>{t}</Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </Collapsible>
              )
            })}
          </div>
        ))
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
