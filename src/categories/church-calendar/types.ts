export interface CalendarEntry {
  name: string
  /** "Season" for a stretch of the year, "Feast" for a single day/celebration. */
  kind: 'Season' | 'Feast'
  /** When it falls in the year, e.g. "Four Sundays before Christmas". */
  when: string
  /** Liturgical color name, e.g. "Purple", "White", "Red", "Green". */
  color: string
  /** Hex for the color swatch. */
  colorHex: string
  summary: string
  /** How and why it is observed. */
  observance: string
}
