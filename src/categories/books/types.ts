export interface Character {
  n: string
  d: string
}
export interface Book {
  name: string
  genre: string
  /** Era id linking to the Timeline category. */
  era?: string
  author: string
  summary: string
  verse?: { ref: string; text: string }
  point: string
  christ?: string
  chars: Character[]
}
export interface BookGroup {
  name: string
  books: Book[]
}
export interface Testament {
  id: 'ot' | 'nt'
  title: string
  subtitle: string
  groups: BookGroup[]
}
