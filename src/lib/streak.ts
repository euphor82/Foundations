/* Daily-completion tracking for the Discover tab. Stores, per local date, which
 * parts the user finished; a day is "complete" when all PARTS are done. Backed
 * by localStorage (via `store`, so it's included in Settings → Backup/Restore).
 * Device-local only — no cloud sync. */
import { store } from './store'

export const PARTS = ['verse', 'catechism', 'character', 'story', 'term'] as const
export type Part = (typeof PARTS)[number]

type Progress = Record<string, Part[]>

/** Local date key, e.g. "2026-08-21". */
export const todayKey = () => keyOf(new Date())
export const keyOf = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

const parseKey = (k: string) => {
  const [y, m, d] = k.split('-').map(Number)
  return new Date(y, m - 1, d)
}

const load = (): Progress => store.get<Progress>('discover.progress', {})
const save = (p: Progress) => store.set('discover.progress', p)

export const partsDone = (key: string): Part[] => load()[key] ?? []
export const isDayComplete = (key: string) => {
  const done = partsDone(key)
  return PARTS.every((p) => done.includes(p))
}

/** Toggle a part for a date; returns the new list of done parts. */
export function togglePart(key: string, part: Part): Part[] {
  const p = load()
  const cur = new Set(p[key] ?? [])
  cur.has(part) ? cur.delete(part) : cur.add(part)
  if (cur.size) p[key] = [...cur]
  else delete p[key]
  save(p)
  return p[key] ?? []
}

/** Mark a part done (idempotent) — used when opening/reading an item. */
export function markPart(key: string, part: Part): Part[] {
  const p = load()
  const cur = new Set(p[key] ?? [])
  if (!cur.has(part)) { cur.add(part); p[key] = [...cur]; save(p) }
  return p[key] ?? []
}

/** All dates that are fully complete. */
export function completedDates(): Set<string> {
  const p = load()
  const out = new Set<string>()
  for (const k of Object.keys(p)) if (PARTS.every((x) => p[k].includes(x))) out.add(k)
  return out
}

export interface StreakStats { current: number; longest: number; total: number }

export function streakStats(): StreakStats {
  const done = completedDates()
  const total = done.size

  // current streak: consecutive complete days ending today (or yesterday if
  // today isn't done yet — the streak is still alive until the day ends).
  const oneDay = 86_400_000
  let cursor = new Date(); cursor.setHours(0, 0, 0, 0)
  if (!done.has(keyOf(cursor))) cursor = new Date(cursor.getTime() - oneDay)
  let current = 0
  while (done.has(keyOf(cursor))) { current++; cursor = new Date(cursor.getTime() - oneDay) }

  // longest run across all history.
  const sorted = [...done].sort()
  let longest = 0, run = 0, prev: string | null = null
  for (const k of sorted) {
    const consecutive = prev && Math.round((parseKey(k).getTime() - parseKey(prev).getTime()) / oneDay) === 1
    run = consecutive ? run + 1 : 1
    if (run > longest) longest = run
    prev = k
  }

  return { current, longest, total }
}
