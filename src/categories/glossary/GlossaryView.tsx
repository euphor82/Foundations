import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SearchBar } from '../../components/SearchBar'
import { Collapsible } from '../../components/Collapsible'
import { matches } from '../../lib/text'
import { TERMS } from './data'

export function GlossaryView() {
  const [params] = useSearchParams()
  const focus = params.get('term') ?? ''
  const [query, setQuery] = useState('')
  const [openTerm, setOpenTerm] = useState(focus)
  useEffect(() => { if (focus) setOpenTerm(focus) }, [focus])

  const list = [...TERMS]
    .sort((a, b) => a.term.localeCompare(b.term))
    .filter((t) => matches(query, t.term, t.short, t.long))

  return (
    <>
      <SearchBar value={query} onChange={setQuery} placeholder="Search a term" />
      {list.length ? (
        list.map((t) => (
          <Collapsible
            key={t.term}
            id={`term-${t.term}`}
            title={t.term}
            meta={t.short}
            open={openTerm === t.term ? true : undefined}
            onToggle={(o) => setOpenTerm(o ? t.term : '')}
          >
            <p className="prose">{t.long}</p>
            {t.see_also?.length ? (
              <div className="seealso">
                <p className="k">See also</p>
                <div className="row">
                  {t.see_also.map((x) => (
                    <Link
                      key={x}
                      className="pill"
                      to={`/glossary?term=${encodeURIComponent(x)}`}
                      onClick={() => setOpenTerm(x)}
                    >
                      {x}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </Collapsible>
        ))
      ) : (
        <div className="empty"><div className="big">No matches</div>Try another term.</div>
      )}
    </>
  )
}
