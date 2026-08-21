import { useMemo, type CSSProperties } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { VERSES, pickOfDay, pickRandom } from '../lib/discover'
import { ALL_CHARACTERS } from '../categories/characters/data'
import { ALL_STORIES } from '../categories/stories/data'
import { TERMS } from '../categories/glossary/data'
import { ALL_BOOKS } from '../categories/books/data'
import './discover.css'

const enc = encodeURIComponent

export function DiscoverView() {
  const navigate = useNavigate()

  // Deterministic picks for today (stable through the day).
  const { verse, character, story, term } = useMemo(() => ({
    verse: pickOfDay(VERSES, 1),
    character: pickOfDay(ALL_CHARACTERS, 7),
    story: pickOfDay(ALL_STORIES, 13),
    term: pickOfDay(TERMS, 17),
  }), [])

  const surprise = {
    person: () => navigate(`/characters?open=${enc(pickRandom(ALL_CHARACTERS).name)}`),
    story: () => navigate(`/stories?open=${enc(pickRandom(ALL_STORIES).title)}`),
    term: () => navigate(`/glossary?term=${enc(pickRandom(TERMS).term)}`),
    book: () => navigate(`/books?open=${enc(pickRandom(ALL_BOOKS).name)}`),
  }

  return (
    <>
      <div className="tlabel">Verse of the day</div>
      <div className="dv-verse">
        <span className="q">“{verse.text}”</span>
        <span className="ref">{verse.ref}</span>
      </div>

      <div className="tlabel">Today’s picks</div>
      <div className="hlist">
        <Link className="hrow" to={`/characters?open=${enc(character.name)}`} style={{ '--acc': '#8C5A9E' } as CSSProperties}>
          <span className="chip" style={{ background: 'color-mix(in srgb, #8C5A9E 15%, var(--card))' }} aria-hidden>👤</span>
          <span className="hrow-txt"><span className="ht">{character.name}</span><span className="hd">{character.role}</span></span>
          <span className="hrow-chev" aria-hidden>›</span>
        </Link>
        <Link className="hrow" to={`/stories?open=${enc(story.title)}`} style={{ '--acc': '#C15F3C' } as CSSProperties}>
          <span className="chip" style={{ background: 'color-mix(in srgb, #C15F3C 15%, var(--card))' }} aria-hidden>📕</span>
          <span className="hrow-txt"><span className="ht">{story.title}</span><span className="hd">{story.kind} · {story.reference}</span></span>
          <span className="hrow-chev" aria-hidden>›</span>
        </Link>
        <Link className="hrow" to={`/glossary?term=${enc(term.term)}`} style={{ '--acc': '#6E8B3D' } as CSSProperties}>
          <span className="chip" style={{ background: 'color-mix(in srgb, #6E8B3D 15%, var(--card))' }} aria-hidden>📚</span>
          <span className="hrow-txt"><span className="ht">{term.term}</span><span className="hd">{term.short}</span></span>
          <span className="hrow-chev" aria-hidden>›</span>
        </Link>
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
