export interface GospelPoint {
  /** Short, memorable keyword for the spine (God · Sin · Christ · Response). */
  key: string
  title: string
  /** One-line summary — the headline idea. */
  summary: string
  /** Brief bullet points to expand on. */
  points: string[]
  /** Supporting ESV references (rendered as tappable chips). */
  verses: string[]
}

export interface RoadStop {
  ref: string
  note: string
}

export interface RespondStep {
  letter: string
  title: string
  detail: string
  verses: string[]
}
