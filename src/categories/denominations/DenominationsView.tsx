import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapsible } from '../../components/Collapsible'
import { CompareSelect } from '../../components/CompareSelect'
import { DENOMINATIONS, DENOM_INTRO, DENOM_COMMON, DENOM_FAMILIES } from './data'
import type { Denomination } from './types'

const ATTRS = [
  { key: 'authority', label: 'Authority' },
  { key: 'baptism', label: 'Baptism' },
  { key: 'communion', label: 'Communion' },
  { key: 'governance', label: 'Governance' },
  { key: 'leadership', label: 'Leadership' },
  { key: 'salvation', label: 'Salvation' },
]

export function DenominationsView() {
  const [showTable, setShowTable] = useState(false)

  return (
    <>
      <div className="note">
        {DENOM_INTRO}
        <br />
        <br />
        <b>Shared ground:</b> {DENOM_COMMON}
      </div>

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
            {DENOMINATIONS.filter((d) => d.family === fam).map((d) => (
              <Collapsible key={d.name} title={d.name}>
                <Field k="Origin" v={d.origin} />
                <Field k="Distinctives" v={d.distinctives} />
                <Field k="Authority" v={d.authority} />
                <Field k="Baptism" v={d.baptism} />
                <Field k="Communion" v={d.communion} />
                <Field k="Church governance" v={d.governance} />
                <Field k="Leadership & structure" v={d.leadership} />
                <Field k="Salvation" v={d.salvation} />
                {d.see_also?.length ? (
                  <div className="seealso">
                    <p className="k">See also</p>
                    <div className="row">
                      {d.see_also.map((t) => (
                        <Link key={t} className="pill" to={`/glossary?term=${encodeURIComponent(t)}`}>{t}</Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </Collapsible>
            ))}
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
