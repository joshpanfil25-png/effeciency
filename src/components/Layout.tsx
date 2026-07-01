import { Outlet, useLocation } from 'react-router-dom'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToHash from '@/components/ScrollToHash'
import { useVersion } from '@/versionB/VersionContext'

// Shared chrome for every route — Navbar + Footer, reused on the blog too.
export default function Layout() {
  const { version } = useVersion()
  const pathname = useLocation().pathname
  const isHome = pathname === '/'
  const isBlog = pathname === '/blog' || pathname.startsWith('/blog/')

  // Suppress this site's chrome when the page supplies its own:
  //  • Version B homepage (Lia's Navbar/Footer inside VersionBHome)
  //  • the blog (Version B styled — its own Navbar/Footer)
  // Version A homepage and all other routes keep the normal chrome.
  if (isBlog || (isHome && version === 'B')) {
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
