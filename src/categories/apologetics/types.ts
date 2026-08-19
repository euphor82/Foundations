export interface ApologeticsQA {
  question: string
  /** Topic group, e.g. "God", "The Bible", "Jesus", "Suffering & Evil". */
  topic: string
  /** One-line summary answer. */
  short: string
  /** The fuller, gracious answer (2-4 short paragraphs as one string). */
  answer: string
  /** Optional key points. */
  points?: string[]
  /** Optional supporting verses. */
  verses?: { ref: string; text: string }[]
  /** Glossary terms to cross-link. */
  see_also?: string[]
}
