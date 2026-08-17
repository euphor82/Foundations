/* Light/dark theme, persisted, applied to <html class="dark">. */
import { useCallback, useEffect, useState } from 'react'
import { store } from './store'

export type Theme = 'light' | 'dark'

function apply(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#17150F' : '#22201C')
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => store.get<Theme>('theme', 'light'))
  useEffect(() => {
    apply(theme)
    store.set('theme', theme)
  }, [theme])
  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return { theme, toggle }
}
