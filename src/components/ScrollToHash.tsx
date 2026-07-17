import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Keeps anchor navigation working across routes: scroll to the hashed section
// when present, otherwise scroll to top on route change. Keyed on location.key
// so re-clicking a link whose hash is already in the URL still scrolls, and
// uses a non-animated jump — smooth scrolling can be silently cancelled by
// concurrent animations, leaving the page stuck at the top.
export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // Defer a tick so the target section is mounted.
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' })
      }, 0)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [location.key, location.hash])

  return null
}
