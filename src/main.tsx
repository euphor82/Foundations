import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './App'
import { ScrollToTop } from './components/ScrollToTop'
import { SettingsProvider } from './lib/settings'
import './theme/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsProvider>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </SettingsProvider>
  </StrictMode>,
)
