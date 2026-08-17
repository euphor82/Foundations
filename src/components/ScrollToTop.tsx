import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to the top on route change — unless the route carries a deep-link
 *  param (a cross-link that scrolls to a specific element itself). */
export function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    if (!search) window.scrollTo(0, 0)
  }, [pathname, search])
  return null
}
