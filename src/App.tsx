import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { TabBar } from './components/TabBar'
import { Hub } from './components/Hub'
import { CATEGORIES } from './categories/registry'

export function App() {
  return (
    <div className="wrap">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Hub />} />
          {CATEGORIES.map((c) => (
            <Route key={c.id} path={c.path} element={c.element} />
          ))}
          <Route path="*" element={<Hub />} />
        </Routes>
        <div className="foot">Foundations · a study companion. Read the full wording in your own Bible.</div>
      </main>
      <TabBar />
    </div>
  )
}
