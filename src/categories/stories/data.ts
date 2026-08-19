import type { Story } from './types'
import { CREATION_PATRIARCHS } from './data/creation-patriarchs'
import { EXODUS_WILDERNESS } from './data/exodus-wilderness'
import { CONQUEST_JUDGES_STORIES } from './data/conquest-judges'
import { KINGDOM_STORIES } from './data/kingdom'
import { PROPHETS_EXILE } from './data/prophets-exile'
import { GOSPEL_EVENTS } from './data/gospels-events'
import { MIRACLES } from './data/miracles'
import { PARABLES } from './data/parables'
import { ACTS_STORIES } from './data/acts'

export const STORIES_INTRO =
  'The Bible is one great story of God rescuing a people for himself — told through many smaller stories. Here are the accounts most often taught and remembered: what happened, who was there, and why it matters. Each note points to where the story sits in God’s bigger plan and what it means for us, with the common misreadings gently corrected.'

/* All stories, composed in roughly canonical order (Genesis → Acts). */
export const ALL_STORIES: Story[] = [
  ...CREATION_PATRIARCHS,
  ...EXODUS_WILDERNESS,
  ...CONQUEST_JUDGES_STORIES,
  ...KINGDOM_STORIES,
  ...PROPHETS_EXILE,
  ...GOSPEL_EVENTS,
  ...MIRACLES,
  ...PARABLES,
  ...ACTS_STORIES,
]

export const TOTAL_STORIES = ALL_STORIES.length

/** Collections in canonical order, for grouped display. */
export const COLLECTION_ORDER: string[] = (() => {
  const seen = new Set<string>()
  const order: string[] = []
  for (const s of ALL_STORIES) {
    if (!seen.has(s.collection)) {
      seen.add(s.collection)
      order.push(s.collection)
    }
  }
  return order
})()

/** All theme tags in use, sorted, for the theme filter. */
export const ALL_THEMES: string[] = [...new Set(ALL_STORIES.flatMap((s) => s.themes))].sort()

/** Stories that name a given character (for the reverse link on a profile). */
export function storiesForCharacter(name: string): Story[] {
  return ALL_STORIES.filter((s) => s.characters.includes(name))
}

/** Stories set in a given book, derived from each story's reference.
 *  Handles multi-book references like "Matthew 21 / John 2". */
export function storiesForBook(book: string): Story[] {
  return ALL_STORIES.filter((s) =>
    s.reference.split('/').some((seg) => {
      const r = seg.trim()
      return r === book || r.startsWith(book + ' ')
    }),
  )
}
