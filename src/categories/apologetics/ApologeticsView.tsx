import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SearchBar } from '../../components/SearchBar'
import { Collapsible } from '../../components/Collapsible'
import { matches } from '../../lib/text'
import { QUESTIONS, APOLOGETICS_INTRO } from './data'
import {
  CATECHISM, CATECHISM_INTRO, CATECHISM_TITLE, CATECHISM_ATTRIBUTION, CATECHISM_PARTS,
} from './catechism'

const TOPICS = ['God', 'The Bible', 'Jesus', 'Suffering & Evil', 'Science & Faith', 'Other Religions', 'Morality', 'The Afterlife']
const PRESENT = TOPICS.filter((t) => QUESTIONS.some((q) => q.topic === t))
const PARTS = [1, 2, 3] as const

const esvUrl = (ref: string) => `https://www.esv.org/${ref.trim().replace(/[–—]/g, '-').replace(/\s+/g, '+')}/`

export function ApologeticsView() {
  const [params] = useSearchParams()
  const [mode, setMode] = useState<'questions' | 'catechism'>(params.get('tab') === 'catechism' ? 'catechism' : 'questions')
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState<string>('all')
  useEffect(() => { if (params.get('tab') === 'catechism') setMode('catechism') }, [params])

  const q = query.trim()

  return (
    <>
      <div className="chips">
        <button className={mode === 'questions' ? 'on' : ''} onClick={() => { setMode('questions'); setQuery('') }}>Questions</button>
        <button className={mode === 'catechism' ? 'on' : ''} onClick={() => { setMode('catechism'); setQuery('') }}>Catechism</button>
      </div>

      {mode === 'questions' ? (
        <Questions query={query} setQuery={setQuery} topic={topic} setTopic={setTopic} q={q} />
      ) : (
        <Catechism query={query} setQuery={setQuery} q={q} />
      )}
    </>
  )
}

function Questions({ query, setQuery, topic, setTopic, q }: {
  query: string; setQuery: (v: string) => void; topic: string; setTopic: (v: string) => void; q: string
}) {
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

function Catechism({ query, setQuery, q }: { query: string; setQuery: (v: string) => void; q: string }) {
  const list = CATECHISM.filter((c) => matches(q, `${c.n}`, c.question, c.answer, c.ref))

  const card = (c: (typeof CATECHISM)[number]) => (
    <Collapsible key={c.n} title={`${c.n}. ${c.question}`} meta={`Q${c.n}`}>
      <p className="prose">{c.answer}</p>
      <div className="lab">Scripture</div>
      <a className="pill" href={esvUrl(c.ref)} target="_blank" rel="noopener noreferrer">{c.ref} ↗</a>
    </Collapsible>
  )

  return (
    <>
      <div className="note">
        {CATECHISM_INTRO}
        <br />
        <br />
        <b>{CATECHISM_TITLE}.</b> 52 questions &amp; answers, tap a reference to read it in the ESV.
      </div>
      <SearchBar value={query} onChange={setQuery} placeholder="Search the catechism" />
      {q ? (
        list.length ? (
          <>
            <div className="tlabel">Search results</div>
            {list.map(card)}
          </>
        ) : (
          <div className="empty"><div className="big">No matches</div>Try another word.</div>
        )
      ) : (
        PARTS.map((p) => (
          <div key={p}>
            <div className="tlabel">{CATECHISM_PARTS[p]}</div>
            {CATECHISM.filter((c) => c.part === p).map(card)}
          </div>
        ))
      )}
      <p className="cat-attrib">{CATECHISM_ATTRIBUTION}</p>
    </>
  )
}
