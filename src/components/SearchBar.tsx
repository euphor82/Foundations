import type { Ref } from 'react'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  inputRef?: Ref<HTMLInputElement>
}

export function SearchBar({ value, onChange, placeholder = 'Search…', inputRef }: Props) {
  return (
    <div className="searchrow">
      <span className="mag" aria-hidden>⌕</span>
      <input
        ref={inputRef}
        type="search"
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        autoCapitalize="none"
        spellCheck={false}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
