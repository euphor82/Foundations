/* Tiny localStorage wrapper (prefix `fdn.`) + small React hooks built on it. */
import { useCallback, useEffect, useState } from 'react'

const PREFIX = 'fdn.'

export const store = {
  get<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(PREFIX + key)
      return raw == null ? fallback : (JSON.parse(raw) as T)
    } catch {
      return fallback
    }
  },
  set(key: string, value: unknown): void {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value))
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  },
}

/** A persisted piece of state, kept in sync with localStorage. */
export function usePersistentState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => store.get(key, initial))
  useEffect(() => {
    store.set(key, value)
  }, [key, value])
  return [value, setValue] as const
}

/** A persisted set of string ids (e.g. books marked read). */
export function usePersistentSet(key: string) {
  const [ids, setIds] = usePersistentState<string[]>(key, [])
  const set = new Set(ids)
  const has = useCallback((id: string) => set.has(id), [ids]) // eslint-disable-line react-hooks/exhaustive-deps
  const toggle = useCallback(
    (id: string) =>
      setIds((prev) => {
        const next = new Set(prev)
        if (next.has(id)) next.delete(id)
        else next.add(id)
        return [...next]
      }),
    [setIds],
  )
  return { has, toggle, count: ids.length, ids }
}
