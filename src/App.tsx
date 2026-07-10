import { Routes, Route } from 'react-router-dom'

import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
// Blog is styled to match Version B (Lia's design) — see src/versionB/pages.
import BlogIndex from '@/versionB/pages/BlogIndex'
import BlogPost from '@/versionB/pages/BlogPost'
// Ad-campaign landing pages — reached only via ad links, not in nav/footer.
import AuditLanding from '@/versionB/pages/AuditLanding'
import AuditThankYou from '@/versionB/pages/AuditThankYou'

export default function App() {
  return (
    <Routes>
      {/* Homepage — Version A (the design the client approved: "Media that makes
          every dollar work harder", stats bar, Results nav). Wrapped in the
          Version A Layout (Navbar + Footer + ScrollToHash). */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* ── Blog routes (Version B styled — self-contained chrome) ── */}
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />

      {/* ── Ad-campaign pages (Version B styled — self-contained) ── */}
      <Route path="/audit" element={<AuditLanding />} />
      <Route path="/audit/thank-you" element={<AuditThankYou />} />

      {/* Catch-all 404 — keep this last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
