/* Theme: System (follows the OS), Light, or Dark. Persisted; System is the
 * default and updates live when the OS setting changes. */
import { useCallback, useEffect, useState } from 'react'
import { store } from './store'

export type ThemeMode = 'system' | 'light' | 'dark'

const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)')
const isDark = (mode: ThemeMode) => (mode === 'system' ? prefersDark().matches : mode === 'dark')

function apply(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', dark ? '#17150F' : '#22201C')
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(() => store.get<ThemeMode>('theme', 'system'))

  useEffect(() => {
    apply(isDark(mode))
    store.set('theme', mode)
  }, [mode])

  // When following the system, re-apply as the OS setting changes.
  useEffect(() => {
    if (mode !== 'system') return
    const mq = prefersDark()
    const handler = () => apply(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mode])

  const cycle = useCallback(
    () => setMode((m) => (m === 'system' ? 'light' : m === 'light' ? 'dark' : 'system')),
    [],
  )

  return { mode, cycle }
}
