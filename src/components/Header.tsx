import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { categoryByPath } from '../categories/registry'
import { Logo } from './Logo'

/** Top-level app pages that aren't hub categories. */
const APP_PAGES: Record<string, { title: string; icon: string }> = {
  '/settings': { title: 'Settings', icon: '⚙' },
  '/search': { title: 'Search', icon: '⌕' },
  '/discover': { title: 'Discover', icon: '✨' },
  '/quiz': { title: 'Quiz', icon: '🎯' },
}

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname
  const category = categoryByPath(path)
  const appPage = APP_PAGES[path]
  const isSettings = path === '/settings'
  // Show a back arrow only on drill-in pages (a category or Settings), not on
  // the primary tabs (Home / Search / Discover).
  const showBack = !!category || isSettings
  const title = appPage ? appPage.title : category ? category.title : 'Foundations'
  const subtitle = appPage || category ? 'Foundations' : 'A Christian resource'

  return (
    <header
      className={`header${category ? ' accented' : ''}`}
      style={category ? ({ '--acc': category.accent } as CSSProperties) : undefined}
    >
      <div className="brand wrap">
        {showBack && (
          <button className="iconbtn" aria-label="Back to home" onClick={() => navigate('/')}>
            ←
          </button>
        )}
        {category ? (
          <span className="hchip" style={{ background: `color-mix(in srgb, ${category.accent} 16%, var(--card))` }} aria-hidden>
            {category.icon}
          </span>
        ) : appPage ? (
          <span className="hchip" style={{ background: 'color-mix(in srgb, var(--gold) 16%, var(--card))' }} aria-hidden>{appPage.icon}</span>
        ) : (
          <Logo />
        )}
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        {!isSettings && (
          <Link className="iconbtn spacer" to="/settings" aria-label="Settings">⚙</Link>
        )}
      </div>
    </header>
  )
}
