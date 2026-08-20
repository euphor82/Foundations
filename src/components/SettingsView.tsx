import { useState } from 'react'
import { useSettings, type ThemeMode, type TextSize } from '../lib/settings'
import { store } from '../lib/store'
import { TOTAL_BOOKS } from '../categories/books/data'
import './settings.css'

const APP_VERSION = '1.1'

/* ---- backup helpers (all fdn.* localStorage keys) ---- */
function collectBackup(): string {
  const keys: Record<string, string> = {}
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)
    if (k && k.startsWith('fdn.')) keys[k] = localStorage.getItem(k) ?? ''
  }
  return JSON.stringify({ app: 'Foundations', version: 1, keys }, null, 2)
}
function restoreBackup(text: string): number {
  const parsed = JSON.parse(text)
  const keys: Record<string, string> = parsed.keys ?? parsed
  let n = 0
  for (const [k, v] of Object.entries(keys)) {
    if (k.startsWith('fdn.') && typeof v === 'string') {
      localStorage.setItem(k, v)
      n++
    }
  }
  return n
}

export function SettingsView() {
  const { theme, setTheme, textSize, setTextSize } = useSettings()
  const [msg, setMsg] = useState('')
  const [restoreText, setRestoreText] = useState('')
  const booksRead = store.get<string[]>('books.read', []).length

  const flash = (m: string) => { setMsg(m); window.setTimeout(() => setMsg(''), 3500) }

  const exportBackup = () => {
    const text = collectBackup()
    try {
      const blob = new Blob([text], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'foundations-backup.json'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      flash('Backup downloaded.')
    } catch {
      flash('Download blocked here — use Copy below.')
    }
    setRestoreText(text) // also surface it for copy/paste as a fallback
  }

  const copyBackup = async () => {
    const text = collectBackup()
    try {
      await navigator.clipboard.writeText(text)
      flash('Backup copied to clipboard.')
    } catch {
      setRestoreText(text)
      flash('Copy blocked — select the text below to copy it.')
    }
  }

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const n = restoreBackup(String(reader.result))
        flash(`Restored ${n} settings. Reloading…`)
        window.setTimeout(() => location.reload(), 900)
      } catch {
        flash('That file could not be read as a backup.')
      }
    }
    reader.readAsText(file)
  }

  const restoreFromText = () => {
    if (!restoreText.trim()) return
    try {
      const n = restoreBackup(restoreText)
      flash(`Restored ${n} settings. Reloading…`)
      window.setTimeout(() => location.reload(), 900)
    } catch {
      flash('That text is not a valid backup.')
    }
  }

  const resetProgress = () => {
    if (!window.confirm('Reset your reading progress? This clears which books you’ve marked as read on this device.')) return
    store.set('books.read', [])
    flash('Reading progress reset. Reloading…')
    window.setTimeout(() => location.reload(), 700)
  }

  const THEMES: [ThemeMode, string][] = [['system', 'System'], ['light', 'Light'], ['dark', 'Dark']]
  const SIZES: [TextSize, string][] = [['s', 'Small'], ['m', 'Default'], ['l', 'Large'], ['xl', 'Larger']]

  return (
    <>
      {msg ? <div className="set-flash">{msg}</div> : null}

      <div className="set-group">
        <div className="set-title">Appearance</div>
        <div className="set-card">
          <div className="set-label">Theme</div>
          <div className="set-sub">System follows your device’s light/dark setting.</div>
          <div className="seg" role="group" aria-label="Theme">
            {THEMES.map(([m, label]) => (
              <button key={m} className={theme === m ? 'on' : ''} onClick={() => setTheme(m)}>{label}</button>
            ))}
          </div>

          <div className="set-label" style={{ marginTop: 16 }}>Text size</div>
          <div className="set-sub">Make everything easier to read.</div>
          <div className="seg" role="group" aria-label="Text size">
            {SIZES.map(([s, label]) => (
              <button key={s} className={textSize === s ? 'on' : ''} onClick={() => setTextSize(s)}>{label}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="set-group">
        <div className="set-title">Your data</div>
        <div className="set-card">
          <div className="set-row">
            <div>
              <div className="set-label">Reading progress</div>
              <div className="set-sub">{booksRead} of {TOTAL_BOOKS} books marked read.</div>
            </div>
            <button className="set-btn danger" onClick={resetProgress}>Reset</button>
          </div>

          <hr className="set-hr" />

          <div className="set-label">Backup &amp; restore</div>
          <div className="set-sub">Your progress and settings live only on this device. Save a backup to move them to another device or keep them safe.</div>
          <div className="set-actions">
            <button className="set-btn" onClick={exportBackup}>Export backup</button>
            <button className="set-btn" onClick={copyBackup}>Copy</button>
            <label className="set-btn as-label">
              Restore from file
              <input type="file" accept="application/json,.json" onChange={onFile} hidden />
            </label>
          </div>
          <textarea
            className="set-textarea"
            placeholder="…or paste a backup here and tap Restore"
            value={restoreText}
            onChange={(e) => setRestoreText(e.target.value)}
          />
          <div className="set-actions">
            <button className="set-btn" onClick={restoreFromText} disabled={!restoreText.trim()}>Restore from text</button>
          </div>
        </div>
      </div>

      <div className="set-group">
        <div className="set-title">About</div>
        <div className="set-card">
          <p className="set-about"><b>Foundations</b> — a companion for exploring the Christian faith: the books of the Bible, its people and stories, church history and calendar, world religions, denominations, apologetics, a catechism, and a glossary.</p>
          <p className="set-about">Scripture quotations are from the ESV. This is a study companion — always read the full wording in your own Bible.</p>
          <p className="set-about">The New City Catechism © 2017 The Gospel Coalition &amp; Redeemer Presbyterian Church (CC BY 4.0).</p>
          <p className="set-about muted">Version {APP_VERSION}</p>
        </div>
      </div>
    </>
  )
}
