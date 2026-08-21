/* Purity — a father's walk-through. A temporary reference section:
 * collapsible talking points with ESV verse chips, check-off, and highlight. */

export interface PurityItem {
  /** Talking-point text. Verse refs are wrapped as [[Book 1:1]] and become chips. */
  t: string
  /** A "Say this" callout card — a line to read aloud. */
  say?: boolean
}

export interface PuritySection {
  id: string
  /** Badge glyph shown in the section header (a number, ♥, ★, ✦…). */
  idx: string
  /** Small uppercase kicker above the label. */
  kick: string
  label: string
  /** The "Before You Begin" (for Dad) section is styled with the ink badge. */
  foryou?: boolean
  items?: PurityItem[]
  /** A section of tappable verse chips only (Key Verses). */
  verses?: string[]
  /** A closing prayer (HTML with <b> for the lead-in). */
  prayer?: string
  /** Index of the item that "owns" the prayer: starring it includes the
   * prayer in the highlighted/filtered view too. */
  prayerItem?: number
}
