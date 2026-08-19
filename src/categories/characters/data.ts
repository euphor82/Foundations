import type { BibleCharacter } from './types'
import { PATRIARCHS } from './data/patriarchs'
import { EXODUS_JUDGES } from './data/exodus-judges'
import { UNITED_KINGDOM } from './data/united-kingdom'
import { PROPHETS_KINGS } from './data/prophets-kings'
import { EXILE_RETURN } from './data/exile-return'
import { GOSPELS_CHARS } from './data/gospels'
import { APOSTLES } from './data/apostles'
import { EARLY_CHURCH } from './data/early-church'

/* All notable Bible characters, composed from per-era modules. */
export const ALL_CHARACTERS: BibleCharacter[] = [
  ...PATRIARCHS,
  ...EXODUS_JUDGES,
  ...UNITED_KINGDOM,
  ...PROPHETS_KINGS,
  ...EXILE_RETURN,
  ...GOSPELS_CHARS,
  ...APOSTLES,
  ...EARLY_CHURCH,
]

const NAMES = new Set(ALL_CHARACTERS.map((c) => c.name))
export const characterExists = (name: string) => NAMES.has(name)
