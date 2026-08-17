/* Search helpers shared across category views. */
export function matches(query: string, ...fields: (string | undefined)[]): boolean {
  const q = query.trim().toLowerCase()
  if (!q) return true
  return fields.join(' ').toLowerCase().includes(q)
}

export function useQueryParam(search: string, key: string): string {
  const params = new URLSearchParams(search)
  return params.get(key) ?? ''
}
