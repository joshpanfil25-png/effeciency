import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import Navbar from '@/versionB/components/Navbar'
import Footer from '@/versionB/components/Footer'
import { Button } from '@/versionB/components/ui/button'

// Styled to match Version B (the only version). Supplies its own chrome inside
// .version-b-root so Lia's teal/navy tokens apply, just like the blog pages.
export default function NotFound() {
  return (
    <div className="version-b-root min-h-screen flex flex-col">
      <Helmet>
        <title>Page not found — Efficiency Media</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Navbar alwaysSolid />

      <section className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
        <span className="font-display text-6xl font-bold text-gradient">404</span>
        <h1 className="mt-4 font-display text-3xl font-bold text-navy">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-8 flex gap-3">
          <Button asChild>
            <Link to="/">Back home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/blog">Visit the blog</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
