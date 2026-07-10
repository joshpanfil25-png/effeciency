import { Outlet } from 'react-router-dom'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToHash from '@/components/ScrollToHash'

// Chrome for the Version A homepage: Navbar + Footer + hash-scroll handling.
// Only the "/" route is wrapped in this Layout; the blog and /audit pages
// supply their own (Version B) chrome and are routed outside it.
export default function Layout() {
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
