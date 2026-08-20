import { useLocation, useNavigate } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { categoryByPath } from '../categories/registry'
import { Logo } from './Logo'

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const category = categoryByPath(location.pathname)
  const isHome = location.pathname === '/' || !category

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
        ) : (
          <Logo />
        )}
        <div>
          <h1>{category ? category.title : 'Foundations'}</h1>
          <p>{category ? 'Foundations' : 'A Christian resource'}</p>
        </div>
      </div>
    </header>
  )
}
