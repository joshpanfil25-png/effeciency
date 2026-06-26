import { Routes, Route } from 'react-router-dom'

import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import BlogIndex from '@/pages/BlogIndex'
import BlogPost from '@/pages/BlogPost'
import NotFound from '@/pages/NotFound'
import { useVersion } from '@/versionB/VersionContext'
import VersionBHome from '@/versionB/VersionBHome'
import VersionToggle from '@/versionB/VersionToggle'

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

        {/* ── Blog routes (added above the catch-all) — UNTOUCHED ── */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Catch-all 404 — keep this last */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
