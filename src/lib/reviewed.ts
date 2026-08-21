/* Records the specific Discover items a user has checked off, so the "Review"
 * quiz can draw only from what they've actually seen. Builds up from now on
 * (past days aren't retroactively logged). Stored locally, in the backup. */
import { store } from './store'

export interface Reviewed {
  terms: string[]
  characters: string[]
  stories: string[]
  catechism: number[]
  verses: string[]
}
export type ReviewedType = keyof Reviewed

const empty = (): Reviewed => ({ terms: [], characters: [], stories: [], catechism: [], verses: [] })

export const getReviewed = (): Reviewed => ({ ...empty(), ...store.get<Reviewed>('quiz.reviewed', empty()) })

export function recordReviewed(type: ReviewedType, id: string | number) {
  const r = getReviewed()
  const arr = r[type] as (string | number)[]
  if (!arr.includes(id)) {
    arr.push(id)
    store.set('quiz.reviewed', r)
  }
}

/** Total distinct reviewed items across all types. */
export const reviewedCount = (r: Reviewed = getReviewed()) =>
  r.terms.length + r.characters.length + r.stories.length + r.catechism.length + r.verses.length
