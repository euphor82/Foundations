/* Quiz question generation. Two modes: 'review' (only items the user has
 * checked off in Discover) and 'full' (everything). Multiple choice, four
 * options. Wrong options always come from the full pools so a review question
 * works even after a single day. */
import { TERMS } from '../categories/glossary/data'
import { ALL_CHARACTERS } from '../categories/characters/data'
import { ALL_STORIES } from '../categories/stories/data'
import { CATECHISM } from '../categories/apologetics/catechism'
import { VERSES } from './discover'
import { getReviewed } from './reviewed'
import { store } from './store'

const enc = encodeURIComponent

export type QuizMode = 'review' | 'full'

export interface Question {
  kind: 'Term' | 'Character' | 'Story' | 'Catechism' | 'Verse'
  prompt: string
  sub?: string
  options: string[]
  answer: number
  link?: string
}

function shuffle<T>(a: T[]): T[] {
  const r = [...a]
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[r[i], r[j]] = [r[j], r[i]]
  }
  return r
}

/** Build 4 options from a correct value + a pool of distractor strings. */
function options(correct: string, pool: string[]): { options: string[]; answer: number } {
  const distinct = [...new Set(pool.filter((x) => x && x !== correct))]
  const distractors = shuffle(distinct).slice(0, 3)
  const opts = shuffle([correct, ...distractors])
  return { options: opts, answer: opts.indexOf(correct) }
}

const firstSentence = (s: string) => {
  const m = s.match(/^.*?[.!?](\s|$)/)
  const out = (m ? m[0] : s).trim()
  return out.length > 150 ? out.slice(0, 147).trimEnd() + '…' : out
}

// ---- per-type question builders ----
const TERM_SHORTS = TERMS.map((t) => t.short)
const CHAR_NAMES = ALL_CHARACTERS.map((c) => c.name)
const STORY_REFS = ALL_STORIES.map((s) => s.reference)
const CAT_ANSWERS = CATECHISM.map((c) => firstSentence(c.answer))
const VERSE_WORDS = [...new Set(
  VERSES.flatMap((v) => v.text.split(/\s+/)).map((w) => w.replace(/[^A-Za-z]/g, '')).filter((w) => w.length >= 5),
)]

function termQ(t: (typeof TERMS)[number]): Question {
  return { kind: 'Term', prompt: `What does “${t.term}” mean?`, ...options(t.short, TERM_SHORTS), link: `/glossary?term=${enc(t.term)}` }
}
function charQ(c: (typeof ALL_CHARACTERS)[number]): Question {
  let clue = c.whyMatter || c.summary || c.role
  for (const n of [c.name, ...(c.aka ?? [])]) clue = clue.split(n).join('———')
  return { kind: 'Character', prompt: 'Who is described here?', sub: clue, ...options(c.name, CHAR_NAMES), link: `/characters?open=${enc(c.name)}` }
}
function storyQ(s: (typeof ALL_STORIES)[number]): Question {
  return { kind: 'Story', prompt: `Where is “${s.title}” found?`, ...options(s.reference, STORY_REFS), link: `/stories?open=${enc(s.title)}` }
}
function catQ(c: (typeof CATECHISM)[number]): Question {
  return { kind: 'Catechism', prompt: c.question, sub: `New City Catechism · Q${c.n}`, ...options(firstSentence(c.answer), CAT_ANSWERS), link: '/apologetics' }
}
function verseQ(v: (typeof VERSES)[number]): Question {
  const tokens = v.text.split(' ')
  const cand = tokens
    .map((w, i) => [w, i] as const)
    .filter(([w, i]) => i > 0 && /[A-Za-z]{5,}/.test(w) && !/^[“"]/.test(w))
  const [word, idx] = cand.length ? cand[Math.floor(Math.random() * cand.length)] : ([tokens[tokens.length - 1], tokens.length - 1] as const)
  const correct = word.replace(/[^A-Za-z]/g, '')
  const blanked = tokens.map((t, i) => (i === idx ? t.replace(/[A-Za-z]+/, '_____') : t)).join(' ')
  return { kind: 'Verse', prompt: `“${blanked}”`, sub: `Fill the blank · ${v.ref}`, ...options(correct, VERSE_WORDS) }
}

/** Build a mixed round of `count` questions for the given mode. */
export function buildQuiz(mode: QuizMode, count = 10): Question[] {
  const rev = getReviewed()
  const src = mode === 'review'
    ? {
        terms: TERMS.filter((t) => rev.terms.includes(t.term)),
        chars: ALL_CHARACTERS.filter((c) => rev.characters.includes(c.name)),
        stories: ALL_STORIES.filter((s) => rev.stories.includes(s.title)),
        cats: CATECHISM.filter((c) => rev.catechism.includes(c.n)),
        verses: VERSES.filter((v) => rev.verses.includes(v.ref)),
      }
    : { terms: TERMS, chars: ALL_CHARACTERS, stories: ALL_STORIES, cats: CATECHISM, verses: VERSES }

  const gens: Array<() => Question> = [
    ...src.terms.map((t) => () => termQ(t)),
    ...src.chars.map((c) => () => charQ(c)),
    ...src.stories.map((s) => () => storyQ(s)),
    ...src.cats.map((c) => () => catQ(c)),
    ...src.verses.map((v) => () => verseQ(v)),
  ]
  return shuffle(gens).slice(0, count).map((g) => g())
}

/** How many questions a review round could offer right now. */
export const reviewAvailable = () => {
  const r = getReviewed()
  return r.terms.length + r.characters.length + r.stories.length + r.catechism.length + r.verses.length
}

// ---- stats ----
export interface QuizStats { taken: number; best: number }
export const getQuizStats = (): QuizStats => store.get<QuizStats>('quiz.stats', { taken: 0, best: 0 })
export function recordQuizResult(correct: number): QuizStats {
  const s = getQuizStats()
  const next = { taken: s.taken + 1, best: Math.max(s.best, correct) }
  store.set('quiz.stats', next)
  return next
}
