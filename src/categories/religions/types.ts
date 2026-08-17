export interface Religion {
  name: string
  adherents: string
  founder: string
  origin: string
  god: string
  texts: string
  salvation: string
  afterlife: string
  differences: string[]
  shared: string
  /** Glossary term names to cross-link to. */
  see_also?: string[]
}
