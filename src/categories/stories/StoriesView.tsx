import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SearchBar } from '../../components/SearchBar'
import { Collapsible } from '../../components/Collapsible'
import { matches } from '../../lib/text'
import { eraName, hasEra } from '../timeline/data'
import { characterExists } from '../characters/data'
import { TERMS } from '../glossary/data'
import { ALL_STORIES, STORIES_INTRO, COLLECTION_ORDER, ALL_THEMES } from './data'
import { ECHOES } from './echoes'
import type { Story, StoryKind } from './types'
import './stories.css'

const STORY_TITLES = new Set(ALL_STORIES.map((s) => s.title))

/** Build an ESV.org reader URL for a single passage reference. */
const esvUrl = (ref: string) => `https://www.esv.org/${ref.trim().replace(/[–—]/g, '-').replace(/\s+/g, '+')}/`

/** The reference line, with each passage linked to the ESV reader.
 *  Splits multi-book refs like "Matthew 21 / John 2" into separate links. */
function PassageLinks({ reference }: { reference: string }) {
  const parts = reference.split('/').map((p) => p.trim()).filter(Boolean)
  return (
    <p className="story-ref">
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 ? <span className="ref-sep"> · </span> : null}
          <a className="ref-link" href={esvUrl(p)} target="_blank" rel="noopener noreferrer">{p}<span className="ref-ext" aria-hidden> ↗</span></a>
        </span>
      ))}
      <span className="ref-esv"> · ESV</span>
    </p>
  )
}

type Sort = 'bible' | 'az'
type KindFilter = 'all' | StoryKind

const TERM_SET = new Set(TERMS.map((t) => t.term))
const kindClass = (k: StoryKind) => (k === 'Miracle' ? 'miracle' : k === 'Parable' ? 'parable' : 'event')

export function StoriesView() {
  const [params] = useSearchParams()
  const openParam = params.get('open') ?? ''
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState<KindFilter>('all')
  const [theme, setTheme] = useState('all')
  const [sort, setSort] = useState<Sort>('bible')
  const [open, setOpen] = useState(openParam)
  useEffect(() => { if (openParam) setOpen(openParam) }, [openParam])

  const q = query.trim()
  const list = useMemo(
    () =>
      ALL_STORIES.filter((s) => {
        if (kind !== 'all' && s.kind !== kind) return false
        if (theme !== 'all' && !s.themes.includes(theme)) return false
        return matches(q, s.title, s.reference, s.summary, s.significance, s.takeaway, s.characters.join(' '), s.themes.join(' '))
      }),
    [q, kind, theme],
  )

  const card = (s: Story, key?: string) => (
    <Collapsible
      key={key || s.title}
      id={`story-${s.title}`}
      title={s.title}
      meta={<span className={`kind ${kindClass(s.kind)}`}>{s.kind}</span>}
      open={open === s.title ? true : undefined}
      onToggle={(o) => setOpen(o ? s.title : '')}
    >
      <StoryDetail s={s} onOpen={setOpen} />
    </Collapsible>
  )

  let body: React.ReactNode
  if (q || kind !== 'all' || theme !== 'all' || sort === 'az') {
    const sorted = [...list].sort((a, b) => a.title.localeCompare(b.title))
    body = sorted.length ? (
      <>
        <div className="tlabel">{sorted.length} {sorted.length === 1 ? 'story' : 'stories'}</div>
        {sorted.map((s) => card(s))}
      </>
    ) : (
      <div className="empty"><div className="big">No matches</div>Try another search or filter.</div>
    )
  } else {
    body = COLLECTION_ORDER.map((col) => {
      const inCol = list.filter((s) => s.collection === col)
      if (!inCol.length) return null
      return (
        <div key={col}>
          <div className="tlabel">{col}</div>
          {inCol.map((s) => card(s, col + '::' + s.title))}
        </div>
      )
    })
  }

  return (
    <>
      <div className="note">{STORIES_INTRO}</div>
      <SearchBar value={query} onChange={setQuery} placeholder="Search a story, person, or theme" />
      <div className="chips">
        {([['all', 'All'], ['Event', 'Events'], ['Miracle', 'Miracles'], ['Parable', 'Parables']] as [KindFilter, string][]).map(([k, label]) => (
          <button key={k} className={kind === k ? 'on' : ''} onClick={() => setKind(k)}>{label}</button>
        ))}
      </div>
      <div className="chips">
        {(['bible', 'az'] as Sort[]).map((s) => (
          <button key={s} className={sort === s ? 'on' : ''} onClick={() => setSort(s)}>{s === 'bible' ? 'Bible order' : 'A–Z'}</button>
        ))}
        <select className="theme-select" value={theme} onChange={(e) => setTheme(e.target.value)} aria-label="Filter by theme">
          <option value="all">All themes</option>
          {ALL_THEMES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      {body}
    </>
  )
}

function StoryDetail({ s, onOpen }: { s: Story; onOpen: (t: string) => void }) {
  return (
    <div>
      <PassageLinks reference={s.reference} />
      <div className="tags">
        {s.era && hasEra(s.era) ? (
          <Link className="tag" to={`/timeline?era=${encodeURIComponent(s.era)}`}>Era · {eraName(s.era)} →</Link>
        ) : null}
      </div>
      <p className="prose">{s.summary}</p>

      {s.verse ? (
        <div className="verse"><span className="q">“{s.verse.text}”</span><span className="ref">{s.verse.ref}</span></div>
      ) : null}

      {s.characters.length ? (
        <div className="seealso">
          <p className="k">Who’s in it</p>
          <div className="row">
            {s.characters.map((n) =>
              characterExists(n) ? (
                <Link key={n} className="pill" to={`/characters?open=${encodeURIComponent(n)}`}>{n} →</Link>
              ) : (
                <span key={n} className="tag">{n}</span>
              ),
            )}
          </div>
        </div>
      ) : null}

      <div className="sig bigstory">
        <p className="sig-k">In God’s bigger story</p>
        <p className="v">{s.significance}</p>
      </div>
      <div className="sig takeaway">
        <p className="sig-k">Takeaway</p>
        <p className="v">{s.takeaway}</p>
      </div>
      {s.misread ? (
        <div className="misread">
          <p className="sig-k">Often misread as…</p>
          <p className="v">{s.misread}</p>
        </div>
      ) : null}

      {ECHOES[s.title]?.length ? (
        <div className="echoes">
          <p className="sig-k">Fulfilled in the New Testament</p>
          {ECHOES[s.title].map((e, i) => (
            <div className="echo" key={i}>
              <p className="echo-head">
                {STORY_TITLES.has(e.story) ? (
                  <Link className="echo-link" to={`/stories?open=${encodeURIComponent(e.story)}`} onClick={() => onOpen(e.story)}>{e.story} →</Link>
                ) : (
                  <span className="echo-name">{e.story}</span>
                )}
                <span className="echo-ref">{e.ref}</span>
              </p>
              <p className="v">{e.note}</p>
            </div>
          ))}
        </div>
      ) : null}

      {s.themes.length ? (
        <div className="themes-row">
          {s.themes.map((t) =>
            TERM_SET.has(t) ? (
              <Link key={t} className="theme-tag" to={`/glossary?term=${encodeURIComponent(t)}`} onClick={() => onOpen(s.title)}>{t}</Link>
            ) : (
              <span key={t} className="theme-tag">{t}</span>
            ),
          )}
        </div>
      ) : null}
    </div>
  )
}
