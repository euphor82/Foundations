import { Collapsible } from '../../components/Collapsible'
import {
  GOSPEL_INTRO, ONE_SENTENCE, POINTS, ROMANS_ROAD, RESPOND, PRAYER, PRAYER_NOTE,
  MEMORY_VERSES, TIPS,
} from './data'
import './gospel.css'

const esvUrl = (ref: string) => `https://www.esv.org/${ref.trim().replace(/[–—]/g, '-').replace(/\s+/g, '+')}/`

const Refs = ({ refs }: { refs: string[] }) => (
  <div className="gm-refs">
    {refs.map((r) => (
      <a key={r} className="pill" href={esvUrl(r)} target="_blank" rel="noopener noreferrer">{r} ↗</a>
    ))}
  </div>
)

export function GospelView() {
  return (
    <>
      <div className="note">{GOSPEL_INTRO}</div>

      <div className="gm-one">
        <span className="gm-one-k">The gospel in one sentence</span>
        {ONE_SENTENCE}
      </div>

      <div className="tlabel">The four-point outline</div>
      <div className="gm-spine" aria-hidden>
        {POINTS.map((p, i) => (
          <span key={p.key} className="gm-spine-item">
            <span className="gm-chip">{p.key}</span>
            {i < POINTS.length - 1 && <span className="gm-arrow">→</span>}
          </span>
        ))}
      </div>

      {POINTS.map((p, i) => (
        <div className="gm-point" key={p.key}>
          <h3><span className="gm-num">{i + 1}</span>{p.title}</h3>
          <p className="gm-sum">{p.summary}</p>
          <ul className="bullets">{p.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>
          <Refs refs={p.verses} />
        </div>
      ))}

      <div className="tlabel">Quick tools</div>

      <Collapsible title="The Romans Road" meta="5 verses">
        <p className="prose">A short, ordered path through Romans — easy to walk someone down.</p>
        <ol className="gm-road">
          {ROMANS_ROAD.map((s) => (
            <li key={s.ref}>
              <a className="pill" href={esvUrl(s.ref)} target="_blank" rel="noopener noreferrer">{s.ref} ↗</a>
              <span className="gm-road-note">{s.note}</span>
            </li>
          ))}
        </ol>
      </Collapsible>

      <Collapsible title="How to respond — A · B · C" meta="Repent & believe">
        {RESPOND.map((s) => (
          <div className="gm-abc" key={s.letter}>
            <span className="gm-abc-l">{s.letter}</span>
            <div>
              <div className="gm-abc-t"><b>{s.title}.</b> {s.detail}</div>
              <Refs refs={s.verses} />
            </div>
          </div>
        ))}
        <div className="lab">A prayer to pray together</div>
        <div className="gm-prayer">{PRAYER}</div>
        <p className="gm-note">{PRAYER_NOTE}</p>
      </Collapsible>

      <Collapsible title="Verses to memorize" meta={`${MEMORY_VERSES.length} verses`}>
        <div className="gm-refs">
          {MEMORY_VERSES.map((r) => (
            <a key={r} className="pill" href={esvUrl(r)} target="_blank" rel="noopener noreferrer">{r} ↗</a>
          ))}
        </div>
      </Collapsible>

      <Collapsible title="Tips for sharing" meta="Be gracious">
        <ul className="bullets">{TIPS.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </Collapsible>
    </>
  )
}
