import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { categoryByPath } from '../categories/registry'
import { Logo } from './Logo'

/** Clean line-drawn gear (emoji ⚙ renders inconsistently across devices). */
const GearIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="3.1" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

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
          <span className="hchip" style={{ background: 'color-mix(in srgb, var(--gold) 16%, var(--card))', color: 'var(--gold)' }} aria-hidden>
            {isSettings ? <GearIcon size={19} /> : appPage.icon}
          </span>
        ) : (
          <Logo />
        )}
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        {!isSettings && (
          <Link className="iconbtn spacer" to="/settings" aria-label="Settings"><GearIcon /></Link>
        )}
      </div>
    </header>
  )
}
