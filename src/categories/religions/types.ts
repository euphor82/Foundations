export interface ScriptureContrast {
  /** What the religion teaches, stated accurately. */
  belief: string
  /** The Bible's direct answer. */
  response: string
  verse: { ref: string; text: string }
}
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
  /** Core beliefs contrasted with what Scripture says. */
  contrasts?: ScriptureContrast[]
  /** Glossary term names to cross-link to. */
  see_also?: string[]
}
