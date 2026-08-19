export interface CharRelationship {
  /** e.g. "Father", "Wife", "Son", "Mentor", "Ally", "Enemy" */
  relation: string
  /** Name of the related person; matches another character's `name` where possible (for linking). */
  name: string
}

export interface BibleCharacter {
  name: string
  /** Alternate names, e.g. ["Abram"] for Abraham, ["Simon", "Cephas"] for Peter. */
  aka?: string[]
  /** Meaning of the name where notable, e.g. "father of a multitude". */
  meaning?: string
  /** Short role/title, e.g. "Patriarch", "King of Israel", "Apostle", "Prophet". */
  role: string
  /** Grouping used by the "By Role" sort. Use one of the fixed CATEGORY values. */
  category: string
  testament: 'ot' | 'nt'
  /** true for women of the Bible (drives the "Women" filter). */
  woman?: boolean
  /** Timeline era id for cross-linking. */
  era?: string
  /** Book names this person appears in (match the 66 canonical names). */
  books: string[]
  summary: string
  verse?: { ref: string; text: string }
  /** One-sentence "why they matter" takeaway. */
  whyMatter: string
  relationships?: CharRelationship[]
}

/** Fixed category set, in the order the "By Role" view groups them. */
export const CATEGORY_ORDER = [
  'Patriarchs & Matriarchs',
  'Exodus & Conquest',
  'Judges',
  'Kings & Royalty',
  'Prophets',
  'Priests & Leaders',
  'Apostles',
  'Early Church',
  'Rulers & Adversaries',
  'Other',
] as const
