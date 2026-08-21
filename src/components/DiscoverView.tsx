import { useMemo, useState, type CSSProperties } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { VERSES, pickOfDay, pickRandom } from '../lib/discover'
import {
  PARTS, todayKey, keyOf, partsDone, togglePart, markPart, completedDates, streakStats, type Part,
} from '../lib/streak'
import { recordReviewed } from '../lib/reviewed'
import { ALL_CHARACTERS } from '../categories/characters/data'
import { ALL_STORIES } from '../categories/stories/data'
import { TERMS } from '../categories/glossary/data'
import { ALL_BOOKS } from '../categories/books/data'
import { CATECHISM } from '../categories/apologetics/catechism'
import './discover.css'

const enc = encodeURIComponent
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export function DiscoverView() {
  const navigate = useNavigate()
  const key = todayKey()
  const [done, setDone] = useState<Part[]>(() => partsDone(key))
  const [catOpen, setCatOpen] = useState(false)
  const now = new Date()
  const [view, setView] = useState({ y: now.getFullYear(), m: now.getMonth() })

  const daily = useMemo(() => ({
    verse: pickOfDay(VERSES, 1),
    cat: pickOfDay(CATECHISM, 3),
    character: pickOfDay(ALL_CHARACTERS, 7),
    story: pickOfDay(ALL_STORIES, 13),
    term: pickOfDay(TERMS, 17),
  }), [])

  const completed = useMemo(() => completedDates(), [done])
  const stats = useMemo(() => streakStats(), [done])

  // Log the specific item behind a part, so the review quiz can use it.
  const record = (p: Part) => {
    if (p === 'verse') recordReviewed('verses', daily.verse.ref)
    else if (p === 'catechism') recordReviewed('catechism', daily.cat.n)
    else if (p === 'character') recordReviewed('characters', daily.character.name)
    else if (p === 'story') recordReviewed('stories', daily.story.title)
    else if (p === 'term') recordReviewed('terms', daily.term.term)
  }
  const isDone = (p: Part) => done.includes(p)
  const toggle = (p: Part) => { const next = togglePart(key, p); if (next.includes(p)) record(p); setDone(next) }
  const mark = (p: Part) => { record(p); setDone(markPart(key, p)) }
  const allDone = PARTS.every((p) => done.includes(p))

  const Check = ({ part }: { part: Part }) => (
    <button
      className={`dv-check${isDone(part) ? ' on' : ''}`}
      aria-label={isDone(part) ? 'Mark not done' : 'Mark done'}
      aria-pressed={isDone(part)}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(part) }}
    >
      {isDone(part) ? '✓' : ''}
    </button>
  )

  const surprise = {
    person: () => navigate(`/characters?open=${enc(pickRandom(ALL_CHARACTERS).name)}`),
    story: () => navigate(`/stories?open=${enc(pickRandom(ALL_STORIES).title)}`),
    term: () => navigate(`/glossary?term=${enc(pickRandom(TERMS).term)}`),
    book: () => navigate(`/books?open=${enc(pickRandom(ALL_BOOKS).name)}`),
  }

  // calendar
  const first = new Date(view.y, view.m, 1).getDay()
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate()
  const cells: (number | null)[] = [...Array(first).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]
  const shift = (delta: number) => setView(({ y, m }) => {
    const d = new Date(y, m + delta, 1)
    return { y: d.getFullYear(), m: d.getMonth() }
  })

  return (
    <>
      {allDone ? (
        <div className="dv-banner">✓ Today complete{stats.current > 1 ? ` — ${stats.current}-day streak 🔥` : '!'}</div>
      ) : (
        <div className="dv-progress">{done.length} of {PARTS.length} done today</div>
      )}

      <div className="tlabel">Verse of the day</div>
      <div className="dv-item dv-verse-item">
        <Check part="verse" />
        <div className="dv-verse">
          <span className="q">“{daily.verse.text}”</span>
          <span className="ref">{daily.verse.ref}</span>
        </div>
      </div>

      <div className="tlabel">Catechism question</div>
      <div className="dv-item">
        <Check part="catechism" />
        <button className="dv-cat" onClick={() => { setCatOpen((o) => !o); mark('catechism') }}>
          <span className="dv-q">Q{daily.cat.n}. {daily.cat.question}</span>
          {catOpen ? (
            <span className="dv-a">{daily.cat.answer} <span className="ref">— {daily.cat.ref}</span></span>
          ) : (
            <span className="dv-hint">Tap to reveal the answer</span>
          )}
        </button>
      </div>

      <div className="tlabel">Today’s picks</div>
      <div className="hlist">
        <div className="dv-item">
          <Check part="character" />
          <Link className="dv-main" to={`/characters?open=${enc(daily.character.name)}`} onClick={() => mark('character')} style={{ '--acc': '#8C5A9E' } as CSSProperties}>
            <span className="chip" style={{ background: 'color-mix(in srgb, #8C5A9E 15%, var(--card))' }} aria-hidden>👤</span>
            <span className="hrow-txt"><span className="ht">{daily.character.name}</span><span className="hd">{daily.character.role}</span></span>
            <span className="hrow-chev" aria-hidden>›</span>
          </Link>
        </div>
        <div className="dv-item">
          <Check part="story" />
          <Link className="dv-main" to={`/stories?open=${enc(daily.story.title)}`} onClick={() => mark('story')} style={{ '--acc': '#C15F3C' } as CSSProperties}>
            <span className="chip" style={{ background: 'color-mix(in srgb, #C15F3C 15%, var(--card))' }} aria-hidden>📕</span>
            <span className="hrow-txt"><span className="ht">{daily.story.title}</span><span className="hd">{daily.story.kind} · {daily.story.reference}</span></span>
            <span className="hrow-chev" aria-hidden>›</span>
          </Link>
        </div>
        <div className="dv-item">
          <Check part="term" />
          <Link className="dv-main" to={`/glossary?term=${enc(daily.term.term)}`} onClick={() => mark('term')} style={{ '--acc': '#6E8B3D' } as CSSProperties}>
            <span className="chip" style={{ background: 'color-mix(in srgb, #6E8B3D 15%, var(--card))' }} aria-hidden>📚</span>
            <span className="hrow-txt"><span className="ht">{daily.term.term}</span><span className="hd">{daily.term.short}</span></span>
            <span className="hrow-chev" aria-hidden>›</span>
          </Link>
        </div>
      </div>

      <div className="tlabel">Your streak</div>
      <div className="dv-stats">
        <div className="dv-stat"><span className="n">{stats.current}</span><span className="l">Current</span></div>
        <div className="dv-stat"><span className="n">{stats.longest}</span><span className="l">Longest</span></div>
        <div className="dv-stat"><span className="n">{stats.total}</span><span className="l">Total days</span></div>
      </div>

      <div className="dv-cal">
        <div className="dv-cal-head">
          <button className="dv-cal-nav" onClick={() => shift(-1)} aria-label="Previous month">‹</button>
          <span className="dv-cal-title">{MONTHS[view.m]} {view.y}</span>
          <button className="dv-cal-nav" onClick={() => shift(1)} aria-label="Next month">›</button>
        </div>
        <div className="dv-cal-grid">
          {WEEKDAYS.map((w, i) => <span key={'w' + i} className="dv-cal-wd">{w}</span>)}
          {cells.map((d, i) => {
            if (d === null) return <span key={'b' + i} />
            const k = keyOf(new Date(view.y, view.m, d))
            const isComplete = completed.has(k)
            const isToday = k === key
            const isPartial = !isComplete && partsDone(k).length > 0
            return (
              <span key={k} className={`dv-day${isComplete ? ' done' : ''}${isToday ? ' today' : ''}${isPartial ? ' partial' : ''}`}>
                {d}
              </span>
            )
          })}
        </div>
      </div>

      <div className="tlabel">Surprise me</div>
      <div className="dv-surprise">
        <button onClick={surprise.person}>🎲 Random person</button>
        <button onClick={surprise.story}>🎲 Random story</button>
        <button onClick={surprise.term}>🎲 Random term</button>
        <button onClick={surprise.book}>🎲 Random book</button>
      </div>
    </>
  )
}
