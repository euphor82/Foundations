import type { Testament } from './types'
import { PENTATEUCH } from './data/ot-pentateuch'
import { HISTORICAL } from './data/ot-historical'
import { WISDOM } from './data/ot-wisdom'
import { MAJOR_PROPHETS } from './data/ot-major-prophets'
import { MINOR_PROPHETS } from './data/ot-minor-prophets'
import { GOSPELS_ACTS } from './data/nt-gospels-acts'
import { PAUL } from './data/nt-paul'
import { GENERAL_REV } from './data/nt-general-revelation'

/* The full canon, composed from per-section modules under ./data/.
 * Each section is authored in its own typed module so content stays
 * manageable; this file only assembles them into the testament structure. */
export const TESTAMENTS: Testament[] = [
  {
    id: 'ot',
    title: 'Old Testament',
    subtitle: '39 books — creation, covenant, and the promise of a Redeemer',
    groups: [
      { name: 'The Pentateuch (The Law)', books: PENTATEUCH },
      { name: 'The Historical Books', books: HISTORICAL },
      { name: 'Wisdom & Poetry', books: WISDOM },
      { name: 'The Major Prophets', books: MAJOR_PROPHETS },
      { name: 'The Minor Prophets', books: MINOR_PROPHETS },
    ],
  },
  {
    id: 'nt',
    title: 'New Testament',
    subtitle: '27 books — the coming of Christ and the birth of the Church',
    groups: [
      { name: 'The Gospels & Acts', books: GOSPELS_ACTS },
      { name: "Paul's Letters", books: PAUL },
      { name: 'General Letters & Revelation', books: GENERAL_REV },
    ],
  },
]

export const ALL_BOOKS = TESTAMENTS.flatMap((t) => t.groups.flatMap((g) => g.books))
export const TOTAL_BOOKS = 66
