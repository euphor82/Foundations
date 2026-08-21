import { Link, useLocation } from 'react-router-dom'
import './tabbar.css'

/** Fixed bottom navigation — the app-native way to move around. */
export function TabBar() {
  const { pathname } = useLocation()
  const on = (p: string) => (pathname === p ? ' on' : '')

  return (
    <nav className="tabbar" aria-label="Primary">
      <div className="tabbar-inner wrap">
        <Link className={`tab${on('/')}`} to="/" aria-current={pathname === '/' ? 'page' : undefined}>
          <span className="ti" aria-hidden>⌂</span>
          <span>Home</span>
        </Link>
        <Link className={`tab${on('/search')}`} to="/search" aria-current={pathname === '/search' ? 'page' : undefined}>
          <span className="ti" aria-hidden>⌕</span>
          <span>Search</span>
        </Link>
        <Link className={`tab${on('/discover')}`} to="/discover" aria-current={pathname === '/discover' ? 'page' : undefined}>
          <span className="ti" aria-hidden>✨</span>
          <span>Discover</span>
        </Link>
        <Link className={`tab${on('/quiz')}`} to="/quiz" aria-current={pathname === '/quiz' ? 'page' : undefined}>
          <span className="ti" aria-hidden>🎯</span>
          <span>Quiz</span>
        </Link>
      </div>
    </nav>
  )
}
