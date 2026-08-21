import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { store } from '../../lib/store'
import { SECTIONS } from './data'
import './purity.css'

/* Persisted marks. Stored under fdn.purity.state so it's included in the
 * app's Settings → Backup/Restore automatically. */
interface PState {
  checked: Record<string, true>
  hl: Record<string, true>
  open: Record<string, boolean>
  filter: boolean
}
const KEY = 'purity.state'

const esv = (ref: string) =>
  `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=ESV`

const itemId = (secId: string, i: number) => `${secId}-${i}`

/** Turn [[Book 1:1]] markers in a talking point into tappable ESV chips. */
function renderText(t: string): ReactNode[] {
  const out: ReactNode[] = []
  const re = /\[\[([^\]]+)\]\]/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(t))) {
    if (m.index > last) out.push(t.slice(last, m.index))
    const ref = m[1]
    out.push(
      <a key={`v${k++}`} className="pw-verse" href={esv(ref)} target="_blank" rel="noopener noreferrer">
        {ref}
      </a>,
    )
    last = m.index + m[0].length
  }
  if (last < t.length) out.push(t.slice(last))
  return out
}

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)
const StarIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.3l-5.4 3 1-6-4.3-4.2 6-.9L12 3l2.7 6 6 .9-4.3 4.2 1 6z" />
  </svg>
)

export function PurityView() {
  const [state, setState] = useState<PState>(() => {
    const s = store.get<PState>(KEY, { checked: {}, hl: {}, open: {}, filter: false })
    // First run: open the "Before You Begin" section by default.
    if (!s.open || Object.keys(s.open).length === 0) s.open = { prep: true }
    return s
  })
  const [toast, setToast] = useState('')
  const toastTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    store.set(KEY, state)
  }, [state])

  const flash = (msg: string) => {
    setToast(msg)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(''), 1400)
  }

  // progress = every item across sections that have items
  const { total, done } = useMemo(() => {
    let total = 0
    let done = 0
    for (const sec of SECTIONS) {
      if (!sec.items) continue
      sec.items.forEach((_, i) => {
        total++
        if (state.checked[itemId(sec.id, i)]) done++
      })
    }
    return { total, done }
  }, [state.checked])
  const pct = total ? Math.round((done / total) * 100) : 0

  const toggleOpen = (secId: string) =>
    setState((s) => ({ ...s, open: { ...s.open, [secId]: !s.open[secId] } }))

  const toggleCheck = (id: string) =>
    setState((s) => {
      const checked = { ...s.checked }
      if (checked[id]) delete checked[id]
      else checked[id] = true
      return { ...s, checked }
    })

  const toggleHl = (id: string) =>
    setState((s) => {
      const hl = { ...s.hl }
      if (hl[id]) delete hl[id]
      else hl[id] = true
      return { ...s, hl }
    })

  const toggleFilter = () => setState((s) => ({ ...s, filter: !s.filter }))

  const reset = () => {
    if (!window.confirm('Clear all check-offs and highlights? Your notes stay; only your marks reset.')) return
    setState((s) => ({ ...s, checked: {}, hl: {} }))
    flash('Marks cleared')
  }

  const sectionDone = (secId: string, items: NonNullable<typeof SECTIONS[number]['items']>) =>
    items.reduce((n, _, i) => n + (state.checked[itemId(secId, i)] ? 1 : 0), 0)

  const hasHl = (secId: string, items?: typeof SECTIONS[number]['items']) =>
    !!items && items.some((_, i) => state.hl[itemId(secId, i)])

  return (
    <div className={`pw${state.filter ? ' pw-filtered' : ''}`}>
      <div className="pw-top">
        <div className="pw-bar"><i style={{ width: `${pct}%` }} /></div>
        <div className="pw-ptext">
          <span>{done} of {total} covered</span>
          <span className="pw-actions">
            <button className={`pw-filterbtn${state.filter ? ' pw-on' : ''}`} onClick={toggleFilter}>
              {state.filter ? 'Show all' : 'Show highlighted only'}
            </button>
            <button className="pw-resetbtn" onClick={reset} aria-label="Reset marks">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" />
              </svg>
              Reset
            </button>
          </span>
        </div>
      </div>

      <div className="pw-legend">
        <span><i className="pw-legchip" /> tap to check off</span>
        <span><i className="pw-legmk" /> tap star to emphasize</span>
        <span><i className="pw-legvs">Titus 2:6</i> tap to open in ESV</span>
      </div>

      {SECTIONS.map((sec) => {
        const isOpen = state.filter || !!state.open[sec.id]
        const empty = state.filter && !hasHl(sec.id, sec.items)
        return (
          <section key={sec.id} className={`pw-card${isOpen ? ' pw-open' : ''}${empty ? ' pw-empty' : ''}`}>
            <button className="pw-shead" onClick={() => toggleOpen(sec.id)} aria-expanded={isOpen}>
              <span className={`pw-sidx${sec.foryou ? ' pw-foryou' : ''}`}>{sec.idx}</span>
              <span className="pw-sinfo">
                <span className="pw-skick">{sec.kick}</span><br />
                <span className="pw-slabel">{sec.label}</span>
              </span>
              {sec.items && <span className="pw-scount">{sectionDone(sec.id, sec.items)}/{sec.items.length}</span>}
              <svg className="pw-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>

            <div className="pw-sbody">
              {sec.verses && (
                <div className="pw-vgrid">
                  {sec.verses.map((ref) => (
                    <a key={ref} className="pw-verse" href={esv(ref)} target="_blank" rel="noopener noreferrer">{ref}</a>
                  ))}
                </div>
              )}

              {sec.items?.map((it, i) => {
                const id = itemId(sec.id, i)
                const cls = `pw-item${it.say ? ' pw-say' : ''}${state.checked[id] ? ' pw-done' : ''}${state.hl[id] ? ' pw-hl' : ''}`
                return (
                  <div key={id} className={cls}>
                    <button className="pw-check" onClick={() => toggleCheck(id)} aria-label="Check off" aria-pressed={!!state.checked[id]}>
                      <CheckIcon />
                    </button>
                    <div className="pw-body">
                      {it.say && <span className="pw-saytag">Say this</span>}
                      <div className="pw-txt">{renderText(it.t)}</div>
                    </div>
                    <button className="pw-mkbtn" onClick={() => toggleHl(id)} aria-label="Highlight to emphasize" aria-pressed={!!state.hl[id]}>
                      <StarIcon />
                    </button>
                  </div>
                )
              })}

              {sec.prayer && <div className="pw-prayer" dangerouslySetInnerHTML={{ __html: sec.prayer }} />}
            </div>
          </section>
        )
      })}

      <div className="pw-foot">
        Verse text opens in the ESV via Bible Gateway. Talking points are summarized —
        read the full verses with him. <br /><em>Grace louder than rules.</em>
      </div>

      {toast && <div className="pw-toast pw-show">{toast}</div>}
    </div>
  )
}
