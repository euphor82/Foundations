export interface TimelineEvent {
  title: string
  when: string
  /** true when scholars disagree on the date — shown as a range + badge. */
  disputed?: boolean
  summary: string
  books?: string[]
  people?: string[]
}
export interface Era {
  id: string
  name: string
  when: string
  note?: string
  events: TimelineEvent[]
}
