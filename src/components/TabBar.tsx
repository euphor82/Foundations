import { Link, useLocation } from 'react-router-dom'
import './tabbar.css'

/** Fixed bottom navigation — the app-native way to move around. */
export function TabBar() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const onSettings = pathname === '/settings'

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
        <Link className={`tab${onSettings ? ' on' : ''}`} to="/settings" aria-current={onSettings ? 'page' : undefined}>
          <span className="ti" aria-hidden>⚙</span>
          <span>Settings</span>
        </Link>
      </div>
    </nav>
  )
}
