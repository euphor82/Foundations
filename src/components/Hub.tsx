import { Link } from 'react-router-dom'
import { CATEGORIES } from '../categories/registry'
import './hub.css'

export function Hub() {
  return (
    <>
      <p className="hub-intro">A growing library of Christian resources. Choose a section to explore.</p>
      <div className="hub">
        {CATEGORIES.map((c) => (
          <Link key={c.id} className="hcard" to={c.path}>
            <span className="em" aria-hidden>{c.icon}</span>
            <h3 className="ht">{c.title}</h3>
            <p className="hd">{c.blurb}</p>
            {c.badge && <div className="hp">{c.badge()}</div>}
          </Link>
        ))}
      </div>
    </>
  )
}
