import { Outlet, useLocation } from 'react-router-dom'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToHash from '@/components/ScrollToHash'
import { useVersion } from '@/versionB/VersionContext'

// Shared chrome for every route — Navbar + Footer, reused on the blog too.
export default function Layout() {
  const { version } = useVersion()
  const isHome = useLocation().pathname === '/'

  // On the homepage in Version B, Lia's own Navbar/Footer render inside
  // VersionBHome, so we suppress this site's chrome to avoid doubling it.
  // Version A and every other route (incl. the blog) are unchanged.
  if (isHome && version === 'B') {
    return <Outlet />
  }

  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToHash />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
