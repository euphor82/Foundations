import { useState } from 'react'
import './compare-select.css'

export interface CompareSubject {
  key: string
  label: string
  sub?: string
}
export interface CompareAttr {
  key: string
  label: string
}

interface Props {
  subjects: CompareSubject[]
  attributes: CompareAttr[]
  value: (subjectKey: string, attributeKey: string) => string
  defaultSelected?: string[]
}

/** Swatch palette used to color-track each selected subject down the cards.
 *  Distinct hues that read on both light and dark grounds. */
const SWATCHES = ['#A9823A', '#3E7C8C', '#8C5A9E', '#4F8A52', '#B2543A', '#5A6BAE']

/** Phone-friendly comparison: pick which subjects to compare, then read them
 *  stacked under each attribute — no horizontal scrolling. */
export function CompareSelect({ subjects, attributes, value, defaultSelected }: Props) {
  const initial = defaultSelected?.filter((k) => subjects.some((s) => s.key === k)) ?? []
  const [selected, setSelected] = useState<string[]>(
    initial.length ? initial : subjects.slice(0, 2).map((s) => s.key),
  )

  const toggle = (key: string) =>
    setSelected((prev) => {
      if (prev.includes(key)) {
        return prev.length > 1 ? prev.filter((k) => k !== key) : prev // keep at least one
      }
      return [...prev, key]
    })

  // stable color per selected subject, by its order of selection
  const colorOf = (key: string) => SWATCHES[selected.indexOf(key) % SWATCHES.length]
  const chosen = subjects.filter((s) => selected.includes(s.key))

  return (
    <div className="cmp">
      <p className="cmp-hint">Choose who to compare — tap to add or remove.</p>
      <div className="cmp-picker">
        {subjects.map((s) => {
          const on = selected.includes(s.key)
          return (
            <button
              key={s.key}
              className={`cmp-chip${on ? ' on' : ''}`}
              aria-pressed={on}
              onClick={() => toggle(s.key)}
              style={on ? { borderColor: colorOf(s.key), color: colorOf(s.key) } : undefined}
            >
              {on && <span className="cmp-dot" style={{ background: colorOf(s.key) }} />}
              {s.label}
            </button>
          )
        })}
      </div>

      <div className="cmp-cards">
        {attributes.map((attr) => (
          <section className="cmp-card" key={attr.key}>
            <h3 className="cmp-attr">{attr.label}</h3>
            {chosen.map((s) => (
              <div className="cmp-item" key={s.key}>
                <div className="cmp-name">
                  <span className="cmp-dot" style={{ background: colorOf(s.key) }} />
                  {s.label}
                  {s.sub && <span className="cmp-sub">{s.sub}</span>}
                </div>
                <p className="cmp-val">{value(s.key, attr.key)}</p>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
