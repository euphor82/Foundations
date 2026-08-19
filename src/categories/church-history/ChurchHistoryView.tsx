import { Link } from 'react-router-dom'
import { characterExists } from '../characters/data'
import { PERIODS, HISTORY_INTRO } from './data'
import './church-history.css'

export function ChurchHistoryView() {
  return (
    <>
      <div className="note">{HISTORY_INTRO}</div>
      <div className="chr">
        {PERIODS.map((per) => (
          <section key={per.id} className="chr-period">
            <div className="chr-when">{per.when}</div>
            <h2 className="chr-name">{per.name}</h2>
            <p className="chr-sum">{per.summary}</p>
            {per.events.map((ev) => (
              <div className="chr-ev" key={ev.title}>
                <div className="chr-ev-head">
                  <span className="chr-ev-title">{ev.title}</span>
                  <span className="chr-ev-when">{ev.when}</span>
                </div>
                <p className="chr-ev-sum">{ev.summary}</p>
                {ev.people?.length ? (
                  <div className="chr-people">
                    {ev.people.map((p) =>
                      characterExists(p) ? (
                        <Link key={p} className="pill" to={`/characters?open=${encodeURIComponent(p)}`}>{p} →</Link>
                      ) : (
                        <span key={p} className="tag">{p}</span>
                      ),
                    )}
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
