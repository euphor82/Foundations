import type { ReactNode } from 'react'
import { BooksView } from './books/BooksView'
import { TimelineView } from './timeline/TimelineView'
import { ReligionsView } from './religions/ReligionsView'
import { DenominationsView } from './denominations/DenominationsView'
import { GlossaryView } from './glossary/GlossaryView'
import { store } from '../lib/store'
import { TOTAL_BOOKS } from './books/data'

export interface Category {
  id: string
  path: string
  title: string
  icon: string
  blurb: string
  element: ReactNode
  /** Optional label shown on the hub card (e.g. reading progress). */
  badge?: () => string
}

/* The single source of truth for the hub grid and the router.
 * Adding a future category = add one entry here + its module folder. */
export const CATEGORIES: Category[] = [
  {
    id: 'books',
    path: '/books',
    title: 'Book by Book',
    icon: '📖',
    blurb: 'A summary of all 66 books — purpose, key people, and how each points to Christ.',
    element: <BooksView />,
    badge: () => {
      const read = store.get<string[]>('books.read', [])
      return `${read.length} of ${TOTAL_BOOKS} read`
    },
  },
  {
    id: 'timeline',
    path: '/timeline',
    title: 'Timeline',
    icon: '🕰️',
    blurb: 'The biblical story by era, from creation to the early Church.',
    element: <TimelineView />,
  },
  {
    id: 'religions',
    path: '/religions',
    title: 'Religions',
    icon: '🌐',
    blurb: 'Major world religions described fairly and compared with Christianity.',
    element: <ReligionsView />,
  },
  {
    id: 'denominations',
    path: '/denominations',
    title: 'Denominations',
    icon: '⛪',
    blurb: 'Christian traditions grouped by family — what they share and where they differ.',
    element: <DenominationsView />,
  },
  {
    id: 'glossary',
    path: '/glossary',
    title: 'Glossary',
    icon: '📚',
    blurb: 'Plain-language definitions of key Christian and spiritual terms.',
    element: <GlossaryView />,
  },
]

export const categoryByPath = (pathname: string) => CATEGORIES.find((c) => c.path === pathname)
