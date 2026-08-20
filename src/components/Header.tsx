import { useLocation, useNavigate } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { categoryByPath } from '../categories/registry'
import { Logo } from './Logo'

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const category = categoryByPath(location.pathname)
  const isSettings = location.pathname === '/settings'
  const isHome = location.pathname === '/'
  const title = isSettings ? 'Settings' : category ? category.title : 'Foundations'
  const subtitle = isSettings || category ? 'Foundations' : 'A Christian resource'

  return (
    <header
      className={`header${category ? ' accented' : ''}`}
      style={category ? ({ '--acc': category.accent } as CSSProperties) : undefined}
    >
      <div className="brand wrap">
        {!isHome && (
          <button className="iconbtn" aria-label="Back to home" onClick={() => navigate('/')}>
            ←
          </button>
        )}
        {category ? (
          <span
            className="hchip"
            style={{ background: `color-mix(in srgb, ${category.accent} 16%, var(--card))` }}
            aria-hidden
          >
            {category.icon}
          </span>
        ) : isSettings ? (
          <span className="hchip" style={{ background: 'color-mix(in srgb, var(--gold) 16%, var(--card))' }} aria-hidden>⚙</span>
        ) : (
          <Logo />
        )}
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </header>
  )
}
