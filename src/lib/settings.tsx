/* App-wide settings (theme + text size), applied at the root so they take
 * effect on every page. Persisted in localStorage via `store`. */
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { store } from './store'

export type ThemeMode = 'system' | 'light' | 'dark'
export type TextSize = 's' | 'm' | 'l' | 'xl'

const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)')
const isDark = (mode: ThemeMode) => (mode === 'system' ? prefersDark().matches : mode === 'dark')

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', dark ? '#17150F' : '#22201C')
}
function applyTextSize(size: TextSize) {
  const el = document.documentElement
  if (size === 'm') delete el.dataset.textsize
  else el.dataset.textsize = size
}

interface Ctx {
  theme: ThemeMode
  setTheme: (m: ThemeMode) => void
  cycleTheme: () => void
  textSize: TextSize
  setTextSize: (s: TextSize) => void
}
const SettingsCtx = createContext<Ctx | null>(null)

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(() => store.get<ThemeMode>('theme', 'system'))
  const [textSize, setTextSize] = useState<TextSize>(() => store.get<TextSize>('textSize', 'm'))

  useEffect(() => { applyTheme(isDark(theme)); store.set('theme', theme) }, [theme])
  useEffect(() => { applyTextSize(textSize); store.set('textSize', textSize) }, [textSize])
  useEffect(() => {
    if (theme !== 'system') return
    const mq = prefersDark()
    const handler = () => applyTheme(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  const cycleTheme = useCallback(
    () => setTheme((m) => (m === 'system' ? 'light' : m === 'light' ? 'dark' : 'system')),
    [],
  )

  return (
    <SettingsCtx.Provider value={{ theme, setTheme, cycleTheme, textSize, setTextSize }}>
      {children}
    </SettingsCtx.Provider>
  )
}

export function useSettings() {
  const ctx = useContext(SettingsCtx)
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider')
  return ctx
}
