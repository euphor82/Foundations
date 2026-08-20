import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../lib/theme'
import './tabbar.css'

/** Fixed bottom navigation — the app-native way to move around. */
export function TabBar() {
  const location = useLocation()
  const { mode, cycle } = useTheme()
  const onHome = location.pathname === '/'
  const themeIcon = mode === 'system' ? '◐' : mode === 'dark' ? '☾' : '☀'
  const themeLabel = mode === 'system' ? 'System theme' : mode === 'dark' ? 'Dark theme' : 'Light theme'

  return (
    <nav className="tabbar" aria-label="Primary">
      <div className="tabbar-inner wrap">
        <Link className={`tab${onHome ? ' on' : ''}`} to="/" aria-current={onHome ? 'page' : undefined}>
          <span className="ti" aria-hidden>⌂</span>
          <span>Home</span>
        </Link>
        <Link className="tab" to="/?focus=1" aria-label="Search">
          <span className="ti" aria-hidden>⌕</span>
          <span>Search</span>
        </Link>
        <button className="tab" onClick={cycle} aria-label={`${themeLabel} — tap to change`} title={themeLabel}>
          <span className="ti" aria-hidden>{themeIcon}</span>
          <span>Theme</span>
        </button>
      </div>
    </nav>
  )
}
