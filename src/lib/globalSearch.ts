/* A flat search index across every section, built once at module load.
 * Each result carries a route (`to`) that deep-links to the item where the
 * target view supports it, or to the section otherwise. */
import { ALL_BOOKS } from '../categories/books/data'
import { ALL_CHARACTERS } from '../categories/characters/data'
import { TERMS } from '../categories/glossary/data'
import { RELIGIONS } from '../categories/religions/data'
import { DENOMINATIONS } from '../categories/denominations/data'
import { ERAS } from '../categories/timeline/data'
import { PERIODS } from '../categories/church-history/data'
import { CALENDAR } from '../categories/church-calendar/data'
import { QUESTIONS } from '../categories/apologetics/data'

export interface SearchResult {
  section: string
  label: string
  sub?: string
  to: string
  hay: string
}

const enc = encodeURIComponent
const lc = (...parts: (string | undefined)[]) => parts.filter(Boolean).join(' ').toLowerCase()

const INDEX: SearchResult[] = [
  ...ALL_BOOKS.map((b) => ({
    section: 'Book by Book', label: b.name, sub: b.genre,
    to: `/books?open=${enc(b.name)}`, hay: lc(b.name, b.author, b.summary, b.point, b.christ),
  })),
  ...ALL_CHARACTERS.map((c) => ({
    section: 'Bible Characters', label: c.name, sub: c.role,
    to: `/characters?open=${enc(c.name)}`, hay: lc(c.name, (c.aka || []).join(' '), c.role, c.summary, c.whyMatter),
  })),
  ...TERMS.map((t) => ({
    section: 'Glossary', label: t.term, sub: t.short,
    to: `/glossary?term=${enc(t.term)}`, hay: lc(t.term, t.short, t.long),
  })),
  ...RELIGIONS.map((r) => ({
    section: 'Religions', label: r.name, sub: r.founder,
    to: '/religions',
    hay: lc(r.name, r.founder, r.origin, r.god, r.differences.join(' '), (r.contrasts || []).map((c) => c.belief + ' ' + c.response + ' ' + c.verse.ref).join(' ')),
  })),
  ...DENOMINATIONS.map((d) => ({
    section: 'Denominations', label: d.name, sub: d.family.replace('Protestant — ', ''),
    to: '/denominations', hay: lc(d.name, d.family, d.distinctives, d.leadership),
  })),
  ...ERAS.flatMap((e) =>
    e.events.map((ev) => ({
      section: 'Timeline', label: ev.title, sub: e.name,
      to: `/timeline?era=${enc(e.id)}`, hay: lc(ev.title, ev.summary, e.name),
    })),
  ),
  ...PERIODS.flatMap((p) => [
    { section: 'Church History', label: p.name, sub: p.when, to: '/church-history', hay: lc(p.name, p.summary) },
    ...p.events.map((ev) => ({
      section: 'Church History', label: ev.title, sub: p.name, to: '/church-history', hay: lc(ev.title, ev.summary),
    })),
  ]),
  ...CALENDAR.map((e) => ({
    section: 'Church Calendar', label: e.name, sub: e.when,
    to: '/church-calendar', hay: lc(e.name, e.summary, e.observance),
  })),
  ...QUESTIONS.map((qn) => ({
    section: 'Apologetics', label: qn.question, sub: qn.topic,
    to: '/apologetics', hay: lc(qn.question, qn.short, qn.answer, qn.topic),
  })),
]

/** Section display order for grouping results. */
export const SECTION_ORDER = [
  'Book by Book', 'Bible Characters', 'Timeline', 'Church History',
  'Church Calendar', 'Religions', 'Denominations', 'Apologetics', 'Glossary',
]

export function searchAll(query: string, limit = 60): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  const out: SearchResult[] = []
  for (const r of INDEX) {
    if (r.hay.includes(q)) out.push(r)
    if (out.length >= limit) break
  }
  return out
}
