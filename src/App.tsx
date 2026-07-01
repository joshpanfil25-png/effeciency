import { Routes, Route } from 'react-router-dom'

import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import { useVersion } from '@/versionB/VersionContext'
import VersionBHome from '@/versionB/VersionBHome'
import VersionToggle from '@/versionB/VersionToggle'
// Blog is styled to match Version B (Lia's design) — see src/versionB/pages.
import BlogIndex from '@/versionB/pages/BlogIndex'
import BlogPost from '@/versionB/pages/BlogPost'

// The homepage: Version A (default) or Version B, with the floating toggle
// visible on both. Only the homepage swaps — the blog is never affected.
function HomeRoute() {
  const { version } = useVersion()
  return (
    <>
      {version === 'B' ? <VersionBHome /> : <Home />}
      <VersionToggle />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeRoute />} />

        {/* ── Blog routes (Version B styled) — above the catch-all ── */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Catch-all 404 — keep this last */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
