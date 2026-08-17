import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ALL_BOOKS } from '../books/data'
import { ERAS, TIMELINE_INTRO } from './data'
import './timeline.css'

const bookExists = (name: string) => ALL_BOOKS.some((b) => b.name === name)

export function TimelineView() {
  const [params] = useSearchParams()
  const focus = params.get('era') ?? ''

  useEffect(() => {
    if (focus) {
      const el = document.getElementById(`era-${focus}`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [focus])

  return (
    <>
      <div className="note">{TIMELINE_INTRO}</div>
      <div className="tl">
        {ERAS.map((era) => (
          <section key={era.id} id={`era-${era.id}`} className={`era${focus === era.id ? ' hl' : ''}`}>
            <div className="era-when">{era.when}</div>
            <h2 className="era-name">{era.name}</h2>
            {era.note && <p className="era-note">{era.note}</p>}
            {era.events.map((ev) => (
              <div className="ev" key={ev.title}>
                <div className="ev-head">
                  <span className="ev-title">{ev.title}</span>
                  {ev.disputed && <span className="ev-disp">date debated</span>}
                </div>
                <div className="ev-when">{ev.when}</div>
                <p className="ev-sum">{ev.summary}</p>
                {(ev.books?.length || ev.people?.length) ? (
                  <div className="ev-links">
                    {ev.books?.filter(bookExists).map((b) => (
                      <Link key={b} className="pill" to={`/books?open=${encodeURIComponent(b)}`}>
                        {b} →
                      </Link>
                    ))}
                    {ev.people?.map((p) => (
                      <span key={p} className="tag">{p}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </section>
        ))}
      </div>
    </>
  )
}
