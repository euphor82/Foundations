import { Link, Route, Routes, useLocation } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { Header } from './components/Header'
import { TabBar } from './components/TabBar'
import { Hub } from './components/Hub'
import { SearchView } from './components/SearchView'
import { DiscoverView } from './components/DiscoverView'
import { QuizView } from './components/QuizView'
import { SettingsView } from './components/SettingsView'
import { CATEGORIES, categoryByPath } from './categories/registry'

export function App() {
  const location = useLocation()
  const category = categoryByPath(location.pathname)
  // In a section, retint the gold/gilt accent tokens to that section's color so
  // every in-content accent (labels, pills, chips, rails, verse refs…) follows it.
  const pageStyle = category
    ? ({ '--gold': category.accent, '--gilt': category.accent } as CSSProperties)
    : undefined
  // When an item was opened from the Discover feed, offer an always-visible way
  // back to it — you shouldn't have to know to tap the Discover tab.
  const fromDiscover = new URLSearchParams(location.search).get('from') === 'discover'

  return (
    <div className="wrap">
      <Header />
      <main className="main">
        <div className="page" key={location.pathname} style={pageStyle}>
          <Routes location={location}>
            <Route path="/" element={<Hub />} />
            <Route path="/search" element={<SearchView />} />
            <Route path="/discover" element={<DiscoverView />} />
            <Route path="/quiz" element={<QuizView />} />
            <Route path="/settings" element={<SettingsView />} />
            {CATEGORIES.map((c) => (
              <Route key={c.id} path={c.path} element={c.element} />
            ))}
            <Route path="*" element={<Hub />} />
          </Routes>
        </div>
        <div className="foot">Foundations · a study companion. Read the full wording in your own Bible.</div>
      </main>
      {fromDiscover && (
        <Link className="return-fab" to="/discover" aria-label="Back to Discover">
          <span aria-hidden>←</span> Back to Discover
        </Link>
      )}
      <TabBar />
    </div>
  )
}
