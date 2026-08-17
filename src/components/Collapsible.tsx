import { useEffect, useRef, useState, type ReactNode } from 'react'
import './collapsible.css'

interface Props {
  title: ReactNode
  meta?: ReactNode
  badge?: ReactNode
  defaultOpen?: boolean
  open?: boolean // controlled (for deep-linking)
  onToggle?: (open: boolean) => void
  children: ReactNode
  id?: string
}

/** Accordion row used by list-style category views. Supports controlled open
 *  state so cross-links can expand a specific entry. */
export function Collapsible({ title, meta, badge, defaultOpen = false, open, onToggle, children, id }: Props) {
  const [internal, setInternal] = useState(defaultOpen)
  const isOpen = open ?? internal
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [open])

  const toggle = () => {
    const next = !isOpen
    if (open === undefined) setInternal(next)
    onToggle?.(next)
  }

  return (
    <div className={`collapse${isOpen ? ' open' : ''}`} ref={ref} id={id}>
      <button className="collapse-head" aria-expanded={isOpen} onClick={toggle}>
        <span className="collapse-title">{title}</span>
        {badge}
        {meta && <span className="collapse-meta">{meta}</span>}
        <span className="chev" aria-hidden>›</span>
      </button>
      {isOpen && <div className="collapse-body">{children}</div>}
    </div>
  )
}
