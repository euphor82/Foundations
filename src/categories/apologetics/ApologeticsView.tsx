import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from '../../components/SearchBar'
import { Collapsible } from '../../components/Collapsible'
import { matches } from '../../lib/text'
import { QUESTIONS, APOLOGETICS_INTRO } from './data'

const TOPICS = ['God', 'The Bible', 'Jesus', 'Suffering & Evil', 'Science & Faith', 'Other Religions', 'Morality', 'The Afterlife']
const PRESENT = TOPICS.filter((t) => QUESTIONS.some((q) => q.topic === t))

export function ApologeticsView() {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState<string>('all')

  const q = query.trim()
  const list = QUESTIONS.filter((item) => {
    if (topic !== 'all' && item.topic !== topic) return false
    return matches(q, item.question, item.short, item.answer, item.topic)
  })

  const render = (items: typeof QUESTIONS) =>
    items.map((item) => (
      <Collapsible key={item.question} title={item.question} meta={item.topic}>
        <p className="prose">{item.answer}</p>
        {item.points?.length ? (
          <ul className="bullets">{item.points.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
        ) : null}
        {item.verses?.length ? (
          <>
            <div className="lab">Scripture</div>
            {item.verses.map((v) => (
              <div className="verse" key={v.ref}>
                <span className="q">“{v.text}”</span>
                <span className="ref">{v.ref}</span>
              </div>
            ))}
          </>
        ) : null}
        {item.see_also?.length ? (
          <div className="seealso">
            <p className="k">See also</p>
            <div className="row">
              {item.see_also.map((t) => (
                <Link key={t} className="pill" to={`/glossary?term=${encodeURIComponent(t)}`}>{t}</Link>
              ))}
            </div>
          </div>
        ) : null}
      </Collapsible>
    ))

  return (
    <>
      <div className="note">{APOLOGETICS_INTRO}</div>
      <SearchBar value={query} onChange={setQuery} placeholder="Search a question or topic" />
      <div className="chips">
        <button className={topic === 'all' ? 'on' : ''} onClick={() => setTopic('all')}>All</button>
        {PRESENT.map((t) => (
          <button key={t} className={topic === t ? 'on' : ''} onClick={() => setTopic(t)}>{t}</button>
        ))}
      </div>
      {q ? (
        list.length ? (
          <>
            <div className="tlabel">Search results</div>
            {render(list)}
          </>
        ) : (
          <div className="empty"><div className="big">No matches</div>Try another question or topic.</div>
        )
      ) : topic !== 'all' ? (
        render(list)
      ) : (
        PRESENT.map((t) => (
          <div key={t}>
            <div className="tlabel">{t}</div>
            {render(QUESTIONS.filter((item) => item.topic === t))}
          </div>
        ))
      )}
    </>
  )
}
