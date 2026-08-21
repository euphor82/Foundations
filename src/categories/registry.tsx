import type { ReactNode } from 'react'
import { BooksView } from './books/BooksView'
import { CharactersView } from './characters/CharactersView'
import { StoriesView } from './stories/StoriesView'
import { TimelineView } from './timeline/TimelineView'
import { ChurchHistoryView } from './church-history/ChurchHistoryView'
import { ChurchCalendarView } from './church-calendar/ChurchCalendarView'
import { ReligionsView } from './religions/ReligionsView'
import { DenominationsView } from './denominations/DenominationsView'
import { ApologeticsView } from './apologetics/ApologeticsView'
import { GlossaryView } from './glossary/GlossaryView'
import { store } from '../lib/store'
import { TOTAL_BOOKS } from './books/data'
import { TOTAL_STORIES } from './stories/data'

export type HomeGroup = 'Scripture' | 'Through Time' | 'Faith & Belief' | 'Reference'

/** Order the home groups appear in. */
export const HOME_GROUPS: HomeGroup[] = ['Scripture', 'Through Time', 'Faith & Belief', 'Reference']

export interface Category {
  id: string
  path: string
  title: string
  icon: string
  blurb: string
  /** Section accent color — used on hub cards and the section header. */
  accent: string
  /** Short one-line descriptor shown on the compact hub card. */
  tagline: string
  /** Home-screen grouping. */
  group: HomeGroup
  element: ReactNode
  /** Optional label shown on the hub card (e.g. reading progress). */
  badge?: () => string
}

/* The single source of truth for the hub grid and the router.
 * Adding a future category = add one entry here + its module folder. */
export const CATEGORIES: Category[] = [
  {
    id: 'books',
    group: 'Scripture',
    path: '/books',
    title: 'Book by Book',
    icon: '📖',
    blurb: 'A summary of all 66 books — purpose, key people, and how each points to Christ.',
    accent: '#B5762F',
    tagline: 'All 66 books',
    element: <BooksView />,
    badge: () => {
      const read = store.get<string[]>('books.read', [])
      return `${read.length} of ${TOTAL_BOOKS} read`
    },
  },
  {
    id: 'characters',
    group: 'Scripture',
    path: '/characters',
    title: 'Bible Characters',
    icon: '🧑‍🦱',
    blurb: 'Profiles of the notable people of the Bible — sort A–Z, by book, or by role.',
    accent: '#8C5A9E',
    tagline: 'Notable people',
    element: <CharactersView />,
  },
  {
    id: 'stories',
    group: 'Scripture',
    path: '/stories',
    title: 'Bible Stories',
    icon: '📕',
    blurb: 'The best-known stories — what happened, who was there, and why it matters.',
    accent: '#C15F3C',
    tagline: 'Events, miracles, parables',
    element: <StoriesView />,
    badge: () => `${TOTAL_STORIES} stories`,
  },
  {
    id: 'timeline',
    group: 'Through Time',
    path: '/timeline',
    title: 'Timeline',
    icon: '🕰️',
    blurb: 'The biblical story by era, from creation to the early Church.',
    accent: '#3E7C8C',
    tagline: 'Creation → the Church',
    element: <TimelineView />,
  },
  {
    id: 'church-history',
    group: 'Through Time',
    path: '/church-history',
    title: 'Church History',
    icon: '📜',
    blurb: 'Key eras and moments of the Church, from Pentecost to today.',
    accent: '#7A6BA8',
    tagline: 'Pentecost → today',
    element: <ChurchHistoryView />,
  },
  {
    id: 'church-calendar',
    group: 'Through Time',
    path: '/church-calendar',
    title: 'Church Calendar',
    icon: '📅',
    blurb: 'The seasons and feasts of the Christian year and what they mean.',
    accent: '#4F8A52',
    tagline: 'Seasons & feasts',
    element: <ChurchCalendarView />,
  },
  {
    id: 'religions',
    group: 'Faith & Belief',
    path: '/religions',
    title: 'Religions',
    icon: '🌐',
    blurb: 'Major world religions described fairly and compared with Christianity.',
    accent: '#2F6F86',
    tagline: 'World faiths compared',
    element: <ReligionsView />,
  },
  {
    id: 'denominations',
    group: 'Faith & Belief',
    path: '/denominations',
    title: 'Denominations',
    icon: '⛪',
    blurb: 'Christian traditions grouped by family — what they share and where they differ.',
    accent: '#A0522D',
    tagline: 'Christian families',
    element: <DenominationsView />,
  },
  {
    id: 'apologetics',
    group: 'Faith & Belief',
    path: '/apologetics',
    title: 'Apologetics',
    icon: '🛡️',
    blurb: 'Gracious, reasoned answers to common tough questions about the faith.',
    accent: '#5A6BAE',
    tagline: 'Tough questions',
    element: <ApologeticsView />,
  },
  {
    id: 'glossary',
    group: 'Reference',
    path: '/glossary',
    title: 'Glossary',
    icon: '📚',
    blurb: 'Plain-language definitions of key Christian and spiritual terms.',
    accent: '#6E8B3D',
    tagline: 'Key terms',
    element: <GlossaryView />,
  },
]

export const categoryByPath = (pathname: string) => CATEGORIES.find((c) => c.path === pathname)
