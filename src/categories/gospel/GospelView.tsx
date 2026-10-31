import { useState } from 'react'
import { Collapsible } from '../../components/Collapsible'
import { store } from '../../lib/store'
import {
  GOSPEL_INTRO, ONE_SENTENCE, GRACE_TITLE, GRACE_NOTE, GRACE_VERSES, POINTS, ROMANS_ROAD,
  RESPOND, PRAYER, PRAYER_NOTE, MEMORY_VERSES, TIPS, VERSES, WEB_NOTE,
  CHILD_INTRO, CHILD_WELCOME_VERSE, CHILD_POINTS, CHILD_PRAYER, CHILD_PRAYER_NOTE, CHILD_TIPS,
  ENCOURAGE_INTRO, ENCOURAGE, CHILD_ENCOURAGE,
} from './data'
import './gospel.css'

const esvUrl = (ref: string) => `https://www.esv.org/${ref.trim().replace(/[–—]/g, '-').replace(/\s+/g, '+')}/`

/** One reference: shows a quick-view gist always, and reveals the full WEB text
 *  inline on tap (no browser). A small ESV link is offered inside, optional. */
function Verse({ refId }: { refId: string }) {
  const [open, setOpen] = useState(false)
  const entry = VERSES[refId]
  const gist = entry?.gist
  return (
    <div className={`gm-v${open ? ' open' : ''}`}>
      <button className="gm-v-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="gm-v-ref">{refId}</span>
        {gist && <span className="gm-v-gist">{gist}</span>}
        <span className="gm-v-chev" aria-hidden>›</span>
      </button>
      {open && (
        <div className="gm-v-body">
          <p className="gm-v-text">{entry ? entry.text : 'Verse text unavailable — tap “Read in ESV”.'}</p>
          <a className="gm-v-esv" href={esvUrl(refId)} target="_blank" rel="noopener noreferrer">Read in ESV ↗</a>
        </div>
      )}
    </div>
  )
}

const Verses = ({ refs }: { refs: string[] }) => (
  <div className="gm-verses">{refs.map((r) => <Verse key={r} refId={r} />)}</div>
)

function Points({ list }: { list: typeof POINTS }) {
  return (
    <>
      {list.map((p, i) => (
        <div className="gm-point" key={p.title}>
          <h3><span className="gm-num">{p.key.length <= 2 ? p.key : i + 1}</span>{p.title}</h3>
          <p className="gm-sum">{p.summary}</p>
          <ul className="bullets">{p.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>
          {p.verses.length > 0 && (
            <>
              <div className="lab">Scripture</div>
              <Verses refs={p.verses} />
            </>
          )}
        </div>
      ))}
    </>
  )
}

function Adult() {
  return (
    <>
      <div className="note">{GOSPEL_INTRO}</div>

      <div className="gm-one">
        <span className="gm-one-k">The gospel in one sentence</span>
        {ONE_SENTENCE}
      </div>

      <div className="gm-grace">
        <span className="gm-one-k">{GRACE_TITLE}</span>
        <p className="gm-grace-t">{GRACE_NOTE}</p>
        <Verses refs={GRACE_VERSES} />
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

      <Points list={POINTS} />

      <div className="tlabel">Encouragement — what’s next</div>
      <p className="prose">{ENCOURAGE_INTRO}</p>
      <Points list={ENCOURAGE} />

      <div className="tlabel">Quick tools</div>

      <Collapsible title="The Romans Road" meta="5 verses">
        <p className="prose">A short, ordered path through Romans — easy to walk someone down.</p>
        <ol className="gm-road">
          {ROMANS_ROAD.map((s) => (
            <li key={s.ref}>
              <span className="gm-road-note">{s.note}</span>
              <Verse refId={s.ref} />
            </li>
          ))}
        </ol>
      </Collapsible>

      <Collapsible title="How to respond — A · B · C" meta="Repent & believe">
        {RESPOND.map((s) => (
          <div className="gm-abc" key={s.letter}>
            <span className="gm-abc-l">{s.letter}</span>
            <div className="gm-abc-main">
              <div className="gm-abc-t"><b>{s.title}.</b> {s.detail}</div>
              <Verses refs={s.verses} />
            </div>
          </div>
        ))}
        <div className="lab">A prayer to pray together</div>
        <div className="gm-prayer">{PRAYER}</div>
        <p className="gm-note">{PRAYER_NOTE}</p>
      </Collapsible>

      <Collapsible title="Verses to memorize" meta={`${MEMORY_VERSES.length} verses`}>
        <Verses refs={MEMORY_VERSES} />
      </Collapsible>

      <Collapsible title="Tips for sharing" meta="Be gracious">
        <ul className="bullets">{TIPS.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </Collapsible>
    </>
  )
}

function Child() {
  return (
    <>
      <div className="note">{CHILD_INTRO}</div>

      <div className="gm-one">
        <span className="gm-one-k">Jesus loves children</span>
        <Verse refId={CHILD_WELCOME_VERSE} />
      </div>

      <Points list={CHILD_POINTS} />

      <div className="tlabel">A prayer to pray together</div>
      <div className="gm-prayer">{CHILD_PRAYER}</div>
      <p className="gm-note">{CHILD_PRAYER_NOTE}</p>

      <div className="tlabel">Keep going!</div>
      <Points list={CHILD_ENCOURAGE} />

      <Collapsible title="Tips for parents" meta="Keep it simple">
        <ul className="bullets">{CHILD_TIPS.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </Collapsible>
    </>
  )
}

export function GospelView() {
  const [mode, setMode] = useState<'adult' | 'child'>(() =>
    store.get<string>('gospel.mode', 'adult') === 'child' ? 'child' : 'adult',
  )
  const pick = (m: 'adult' | 'child') => { setMode(m); store.set('gospel.mode', m) }

  return (
    <>
      <div className="gm-toggle" role="group" aria-label="Audience">
        <button className={mode === 'adult' ? 'on' : ''} onClick={() => pick('adult')}>For an adult</button>
        <button className={mode === 'child' ? 'on' : ''} onClick={() => pick('child')}>For a child</button>
      </div>

      {mode === 'adult' ? <Adult /> : <Child />}

      <p className="gm-web">{WEB_NOTE}</p>
    </>
  )
}
