import { Routes, Route } from 'react-router-dom'

import VersionBHome from '@/versionB/VersionBHome'
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
      {/* Homepage — Version B (the version the client chose). Each page below
          supplies its own Navbar/Footer, so there's no shared Layout wrapper. */}
      <Route path="/" element={<VersionBHome />} />

      {/* ── Blog routes (Version B styled) — above the catch-all ── */}
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />

      {/* ── Ad-campaign pages — above the catch-all ── */}
      <Route path="/audit" element={<AuditLanding />} />
      <Route path="/audit/thank-you" element={<AuditThankYou />} />

      {/* Catch-all 404 — keep this last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
