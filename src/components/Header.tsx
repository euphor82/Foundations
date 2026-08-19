import { useLocation, useNavigate } from 'react-router-dom'
import { categoryByPath } from '../categories/registry'
import { useTheme } from '../lib/theme'
import { Logo } from './Logo'

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const { mode, cycle } = useTheme()
  const themeIcon = mode === 'system' ? '◐' : mode === 'dark' ? '☾' : '☀'
  const themeLabel = mode === 'system' ? 'System theme' : mode === 'dark' ? 'Dark theme' : 'Light theme'
  const category = categoryByPath(location.pathname)
  const isHome = location.pathname === '/' || !category

  return (
    <header className="header">
      <div className="brand wrap">
        {!isHome && (
          <button className="iconbtn" aria-label="Back to home" onClick={() => navigate('/')}>
            ←
          </button>
        )}
        <Logo />
        <div>
          <h1>{category ? category.title : 'Foundations'}</h1>
          <p>{category ? 'Foundations' : 'A Christian resource'}</p>
        </div>
        <button className="iconbtn spacer" aria-label={`${themeLabel} — tap to change`} title={themeLabel} onClick={cycle}>
          {themeIcon}
        </button>
      </div>
    </header>
  )
}
