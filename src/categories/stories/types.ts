export type StoryKind = 'Event' | 'Miracle' | 'Parable'

export interface Story {
  /** Unique, human-readable title, e.g. "David and Goliath". */
  title: string
  kind: StoryKind
  /** Group heading in canonical order, e.g. "Genesis", "Parables of Jesus". */
  collection: string
  /** Scripture location, e.g. "Exodus 14" or "Luke 15:11–32". */
  reference: string
  testament: 'ot' | 'nt'
  /** Optional Timeline era id to cross-link (only lights up if the era exists). */
  era?: string
  /** A short retelling of the story in a few sentences. */
  summary: string
  /** Named people in the story — cross-linked to Bible Characters where they exist. */
  characters: string[]
  /** Where this sits in God's bigger story / how it points to Christ. */
  significance: string
  /** A grounded life takeaway for the reader today. */
  takeaway: string
  /** Optional correction of a common misunderstanding. */
  misread?: string
  /** Theme tags — used for filtering and linked to the Glossary where a term exists. */
  themes: string[]
  /** Optional key verse (ESV wording). */
  verse?: { ref: string; text: string }
}
