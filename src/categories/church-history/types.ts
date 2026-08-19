export interface HistoryEvent {
  title: string
  when: string
  summary: string
  people?: string[]
}
export interface HistoryPeriod {
  id: string
  name: string
  when: string
  summary: string
  events: HistoryEvent[]
}
